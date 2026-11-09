import { phoneIdentity } from '../lib/feedback';
import { hasFeedbackMarkup } from '../lib/feedback-input.mjs';

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
  const message = form.elements.namedItem('message') as HTMLTextAreaElement;
  const phoneFields = form.querySelector<HTMLElement>('[data-feedback-phone]')!;
  let busy = false;
  const type = () => (form.elements.namedItem('type') as RadioNodeList).value;
  const updateModels = () => {
    const key = Object.keys(suggestions).find(key=>key.toLowerCase()===brand.value.trim().toLowerCase());
    const list = form.querySelector('datalist#feedback-models')!;
    list.replaceChildren(...(suggestions[key || ''] || []).map((value:string)=>{const option=document.createElement('option');option.value=value;return option;}));
    model.setCustomValidity('');
  };
  brand.addEventListener('input',()=>{brand.setCustomValidity('');model.value='';updateModels();});
  model.addEventListener('input',()=>model.setCustomValidity(''));
  message.addEventListener('input',()=>message.setCustomValidity(''));
  const updateType = () => {
    const phone = type()==='phone'; phoneFields.hidden=!phone; brand.required=model.required=phone;
    message.required=!phone;message.minLength=phone?0:10;message.maxLength=phone?600:1800;message.rows=phone?2:5;
    message.placeholder=phone?copy.phonePlaceholder:copy.placeholder;
    root.querySelector('[data-feedback-message-label]')!.textContent=phone?copy.comment:copy.message;
    [brand,model,message].forEach(field=>field.setCustomValidity(''));
    status.textContent='';
    if (!phone) model.setCustomValidity('');
  };
  form.querySelectorAll('[name=type]').forEach(input=>input.addEventListener('change',updateType));
  updateType();
  launch.hidden=false;
  launch.addEventListener('click',()=>{dialog.showModal();form.querySelector<HTMLInputElement>('input[name=type]:checked')?.focus();});
  const close = () => {dialog.close();launch.focus();};
  root.querySelector('[data-feedback-close]')!.addEventListener('click',close);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  dialog.addEventListener('close',()=>launch.focus());
  form.addEventListener('submit',async event=>{
    event.preventDefault(); if(busy)return;
    const invalid=[...(type()==='phone'?[brand,model]:[]),message].find(field=>hasFeedbackMarkup(field.value));
    if(invalid){invalid.setCustomValidity(copy.textOnly);invalid.reportValidity();return;}
    if(type()!=='phone'&&message.value.trim().length<10){message.setCustomValidity(copy.messageRequired);message.reportValidity();return;}
    if(type()==='phone'&&message.value.length>600){message.setCustomValidity(copy.commentLimit);message.reportValidity();return;}
    if(type()==='phone' && existing.includes(phoneIdentity(brand.value,model.value))){model.setCustomValidity(copy.exists);model.reportValidity();return;}
    if(!form.reportValidity())return;
    busy=true;submit.disabled=true;submit.textContent=copy.sending;status.textContent='';
    const values=Object.fromEntries(new FormData(form));
    const payload={...values,brand:type()==='phone'?brand.value:'',model:type()==='phone'?model.value:'',page:location.pathname,locale:root.dataset.locale};
    try {
      const response=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});
      if(response.status===404 || !response.headers.get('Content-Type')?.includes('application/json'))throw new Error('unavailable');
      const result=await response.json();
      if(!response.ok||result.ok!==true)throw new Error(response.status===429?'rate':response.status===503?'unavailable':result.code==='text_only'?'text_only':'error');
      form.reset();updateType();updateModels();status.textContent=copy.success;status.focus();
    }catch(error){const code=error instanceof Error?error.message:'';status.textContent=code==='rate'?copy.rate:code==='unavailable'?copy.unavailable:code==='text_only'?copy.textOnly:copy.error;status.focus();}
    finally{busy=false;submit.disabled=false;submit.textContent=copy.send;}
  });
}
