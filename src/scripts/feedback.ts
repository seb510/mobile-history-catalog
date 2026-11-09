import { phoneIdentity } from '../lib/feedback';

const root = document.querySelector<HTMLElement>('[data-feedback-root]');
if (root) {
  const { copy, suggestions, existing } = JSON.parse(root.querySelector('[data-feedback-data]')!.textContent!);
  const dialog = root.querySelector<HTMLDialogElement>('dialog')!;
  const form = root.querySelector<HTMLFormElement>('form')!;
  const launch = root.querySelector<HTMLButtonElement>('[data-feedback-open]')!;
  const status = root.querySelector<HTMLElement>('[data-feedback-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[type=submit]')!;
  const brand = form.elements.namedItem('brand') as HTMLInputElement;
  const model = form.elements.namedItem('model') as HTMLInputElement;
  const phoneFields = form.querySelector<HTMLElement>('[data-feedback-phone]')!;
  let busy = false;
  const type = () => (form.elements.namedItem('type') as RadioNodeList).value;
  const updateModels = () => {
    const key = Object.keys(suggestions).find(key=>key.toLowerCase()===brand.value.trim().toLowerCase());
    const list = form.querySelector('datalist#feedback-models')!;
    list.replaceChildren(...(suggestions[key || ''] || []).map((value:string)=>{const option=document.createElement('option');option.value=value;return option;}));
    model.setCustomValidity('');
  };
  brand.addEventListener('input',()=>{model.value='';updateModels();});
  model.addEventListener('input',()=>model.setCustomValidity(''));
  form.addEventListener('change',()=>{
    const phone = type()==='phone'; phoneFields.hidden=!phone; brand.required=model.required=phone;
    if (!phone) model.setCustomValidity('');
  });
  launch.hidden=false;
  launch.addEventListener('click',()=>{dialog.showModal();form.querySelector<HTMLInputElement>('input[name=type]:checked')?.focus();});
  const close = () => {dialog.close();launch.focus();};
  root.querySelector('[data-feedback-close]')!.addEventListener('click',close);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  dialog.addEventListener('close',()=>launch.focus());
  form.addEventListener('submit',async event=>{
    event.preventDefault(); if(busy)return;
    if(type()==='phone' && existing.includes(phoneIdentity(brand.value,model.value))){model.setCustomValidity(copy.exists);model.reportValidity();return;}
    if(!form.reportValidity())return;
    busy=true;submit.disabled=true;submit.textContent=copy.sending;status.textContent='';
    const values=Object.fromEntries(new FormData(form));
    const payload={...values,brand:type()==='phone'?brand.value:'',model:type()==='phone'?model.value:'',page:location.pathname,locale:root.dataset.locale};
    try {
      const response=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});
      if(response.status===404 || !response.headers.get('Content-Type')?.includes('application/json'))throw new Error('unavailable');
      const result=await response.json();
      if(!response.ok||result.ok!==true)throw new Error(response.status===429?'rate':response.status===503?'unavailable':'error');
      status.textContent=copy.success; form.reset();phoneFields.hidden=false;brand.required=model.required=true;updateModels();status.focus();
    }catch(error){const code=error instanceof Error?error.message:'';status.textContent=code==='rate'?copy.rate:code==='unavailable'?copy.unavailable:copy.error;status.focus();}
    finally{busy=false;submit.disabled=false;submit.textContent=copy.send;}
  });
}
