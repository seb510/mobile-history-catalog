/** Original geometric study, not a scanned or manufacturer-supplied model. */
export function initPhoneModel(root: HTMLElement) {
 const stage = root.querySelector<HTMLElement>('[data-model-stage]')!;
 const twist = root.querySelector<HTMLInputElement>('[data-model-twist]')!;
 const zoom = root.querySelector<HTMLInputElement>('[data-model-zoom]')!;
 const angle = root.querySelector<HTMLOutputElement>('[data-model-angle]')!;
 const svg = (height: number, body: string) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 ${height}" width="150" height="${height}"><defs><linearGradient id="silver-${height}" x2="1" y2=".25"><stop stop-color="#b2b5b3"/><stop offset=".28" stop-color="#f0efea"/><stop offset=".62" stop-color="#cecfca"/><stop offset="1" stop-color="#9a9d9b"/></linearGradient><linearGradient id="glass-${height}" x2=".8" y2="1"><stop stop-color="#465950"/><stop offset=".45" stop-color="#142e29"/><stop offset="1" stop-color="#091e1c"/></linearGradient></defs>${body}</svg>`;
 const upperFront = svg(210, `<path d="M0 32Q0 0 32 0H118Q150 0 150 32V210H0Z" fill="url(#silver-210)"/><path d="M16 32Q16 11 36 11H115Q133 11 133 32V210H16Z" fill="#25292a"/><path d="M40 8H108" stroke="#707573" stroke-width="3" stroke-linecap="round"/><circle cx="119" cy="14" r="2" fill="#626960"/><rect x="23" y="33" width="103" height="131" rx="1" fill="#0a1010"/><rect x="27" y="37" width="95" height="122" fill="url(#glass-210)"/><g fill="#5e8d65" opacity=".22"><circle cx="48" cy="107" r="22"/><circle cx="98" cy="125" r="27"/><circle cx="94" cy="75" r="19"/></g><g fill="#d6dfce" font-family="Arial,sans-serif"><text x="32" y="48" font-size="6">▮▮▮</text><text x="104" y="48" font-size="6">▰</text><text x="74" y="79" text-anchor="middle" font-size="19">12:45</text><text x="74" y="93" text-anchor="middle" font-size="6">07.11.2007</text><text x="32" y="153" font-size="5">Menu</text><text x="103" y="153" font-size="5">Music</text></g><text x="137" y="84" transform="rotate(90 137 84)" fill="#eee" font-size="9" font-weight="bold" font-family="Arial" letter-spacing="1.5">NOKIA</text><path d="M22 166H128V210H22Z" fill="url(#silver-210)" stroke="#898e8b"/><path d="M29 187H122" stroke="#707873"/><g stroke="#818784" stroke-width="1.5"><rect x="29" y="172" width="19" height="6" rx="3" fill="#4e8791"/><rect x="102" y="172" width="19" height="6" rx="3" fill="#4e8791"/><rect x="29" y="197" width="19" height="6" rx="3" fill="#248048"/><rect x="102" y="197" width="19" height="6" rx="3" fill="#a12e38"/></g><rect x="56" y="169" width="38" height="38" rx="17" fill="#e9e8df" stroke="#555d58" stroke-width="2"/><rect x="65" y="178" width="20" height="20" rx="7" fill="#424a46"/><rect x="68" y="181" width="14" height="14" rx="5" fill="url(#silver-210)"/><g fill="#c7cdca" font-size="10" font-family="Arial"><text x="6" y="181">−</text><text x="136" y="181">−</text><text x="7" y="201">❖</text><text x="136" y="201">c</text></g>`);
 const keyLabels = ['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ','+','',''];
 const keys = ['1','2','3','4','5','6','7','8','9','*','0','#'].map((key,i) => {const x=22+(i%3)*36,y=4+Math.floor(i/3)*23;return `<rect x="${x}" y="${y}" width="34" height="21" rx="3" fill="url(#silver-110)" stroke="#6f7470"/><text x="${x+7}" y="${y+14}" font-family="Arial" font-size="12" fill="#202526">${key}</text><text x="${x+19}" y="${y+15}" font-family="Arial" font-size="4" fill="#202526">${keyLabels[i]}</text>`;}).join('');
 const lowerFront=svg(110,`<path d="M0 0H150V78Q150 110 119 110H31Q0 110 0 78Z" fill="url(#silver-110)"/><path d="M20 0H131V79Q131 100 111 100H40Q20 100 20 79Z" fill="#303634"/>${keys}`);
 const lowerBack=svg(110,`<path d="M0 0H150V78Q150 110 119 110H31Q0 110 0 78Z" fill="url(#silver-110)"/><path d="M20 0H130V77Q130 99 109 99H41Q20 99 20 77Z" fill="#8c918e" stroke="#5b635e"/><path d="M75 0V18" stroke="#4d5751"/><rect x="59" y="19" width="33" height="41" rx="14" fill="url(#silver-110)" stroke="#636e67"/><g fill="#303d35" font-family="Arial" text-anchor="middle"><text x="76" y="39" font-size="13">▶Ⅱ</text><text x="76" y="51" font-size="8">▣</text><text x="36" y="37" font-size="14">⏮</text><text x="114" y="37" font-size="14">⏭</text></g>`);
 const faces = (front: string, back: string) => `<div class="model-face model-front">${front}</div><div class="model-face model-back">${back}</div><div class="model-side model-left"></div><div class="model-side model-right"></div><div class="model-cap model-top"></div><div class="model-cap model-bottom"></div>`;
 stage.innerHTML = `<div class="model-ground" aria-hidden="true"></div><div class="model-phone" aria-hidden="true"><div class="model-part model-upper">${faces(upperFront,'<div class="model-back-label">NOKIA<br><br>XpressMusic</div><div class="model-battery-seam"></div>')}</div><div class="model-part model-lower">${faces(lowerFront,lowerBack)}</div></div>`;
 stage.querySelector('.model-lower .model-left')!.innerHTML = '<div class="model-camera"></div>';
 const phone = stage.querySelector<HTMLElement>('.model-phone')!;
 const lower = stage.querySelector<HTMLElement>('.model-lower')!;
 let x = -12, y = -24;
 const draw = () => {
  phone.style.transform = `translate(-50%,-50%) scale(${Number(zoom.value)/100*.86}) rotateX(${x}deg) rotateY(${y}deg)`;
  lower.style.transform = `rotateY(${twist.value}deg)`;
  angle.value = `${twist.value}°`;
 };
 const modes = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-model-mode]'));
 const updateMode = () => modes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.modelMode === twist.value)));
 const update = () => { draw(); updateMode(); };
 twist.addEventListener('input', update); zoom.addEventListener('input', draw);
 modes.forEach(button => button.addEventListener('click', () => {twist.value=button.dataset.modelMode!; update();}));
 root.querySelector('[data-model-front]')!.addEventListener('click',()=>{x=0;y=0;draw();});
 root.querySelector('[data-model-back]')!.addEventListener('click',()=>{x=0;y=180;draw();});
 root.querySelector('[data-model-reset]')!.addEventListener('click',()=>{x=-12;y=-24;twist.value='0';zoom.value='100';update();});
 let pointer: {id:number;x:number;y:number} | undefined;
 stage.addEventListener('pointerdown',e=>{if(e.button!==0 || pointer)return; pointer={id:e.pointerId,x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);});
 stage.addEventListener('pointermove',e=>{if(!pointer || pointer.id!==e.pointerId)return; y+=(e.clientX-pointer.x)*.6;x=Math.max(-70,Math.min(70,x-(e.clientY-pointer.y)*.5));pointer.x=e.clientX;pointer.y=e.clientY;draw();});
 const release = () => {pointer=undefined;};
 stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);stage.addEventListener('lostpointercapture',release);
 stage.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();if(e.key==='Home'){x=-12;y=-24;}else if(e.key==='ArrowLeft')y-=15;else if(e.key==='ArrowRight')y+=15;else x=Math.max(-70,Math.min(70,x+(e.key==='ArrowUp'?15:-15)));draw();});
 update();
}
