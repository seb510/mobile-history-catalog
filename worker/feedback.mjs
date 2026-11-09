import { hasFeedbackMarkup } from '../src/lib/feedback-input.mjs';
const headers = { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff' };
const reply = (status, code) => new Response(JSON.stringify({ok:status===200,code}), {status,headers});
const clean = value => typeof value==='string' ? value.trim().replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g,'') : '';

// Exported for isolated tests: no network calls are made unless an injected fetch is used.
export async function handleFeedback(request, env, send = fetch) {
  if(request.method!=='POST')return new Response(JSON.stringify({ok:false,code:'method'}),{status:405,headers:{...headers,Allow:'POST'}});
  const url=new URL(request.url);
  if(request.headers.get('Origin')!==url.origin)return reply(403,'origin');
  if(!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json'))return reply(415,'content_type');
  // Bound the stream, including chunked requests without Content-Length.
  const reader=request.body?.getReader();
  if(!reader)return reply(400,'body');
  const chunks=[];let length=0;
  try {
    while(true){const {done,value}=await reader.read();if(done)break;length+=value.byteLength;if(length>10000){await reader.cancel();return reply(413,'size');}chunks.push(value);}
  }catch{return reply(400,'body');}
  const bytes=new Uint8Array(length);let at=0;for(const chunk of chunks){bytes.set(chunk,at);at+=chunk.length;}
  let input;try{input=JSON.parse(new TextDecoder().decode(bytes));}catch{return reply(400,'json');}
  if(!input||typeof input!=='object'||Array.isArray(input))return reply(400,'fields');
  const fields=Object.fromEntries(['type','brand','model','message','page','locale','website'].map(key=>[key,clean(input[key])]));
  if(fields.website)return reply(200,'received');
  if(!['phone','correction','bug','idea'].includes(fields.type)||!['uk','ru','en'].includes(fields.locale))return reply(400,'fields');
  const phone=fields.type==='phone';
  if((!phone&&fields.message.length<10)||fields.message.length>(phone?600:1800)||fields.brand.length>60||fields.model.length>100||fields.page.length>240)return reply(400,'fields');
  if(fields.type==='phone'&&(!fields.brand||!fields.model))return reply(400,'phone');
  if(!phone){fields.brand='';fields.model='';}
  if([fields.brand,fields.model,fields.message].some(hasFeedbackMarkup))return reply(400,'text_only');
  // Only a local pathname is accepted; never forward query parameters or fragments.
  if(!/^\/(?!\/)[^?#\s\\]*$/.test(fields.page))return reply(400,'page');
  // Report which binding is unavailable without exposing any secret values.
  if(typeof env.TELEGRAM_BOT_TOKEN!=='string'||!env.TELEGRAM_BOT_TOKEN.trim())return reply(503,'missing_bot_token');
  if(typeof env.TELEGRAM_CHAT_ID!=='string'||!env.TELEGRAM_CHAT_ID.trim())return reply(503,'missing_chat_id');
  if(typeof env.FEEDBACK_RATE_LIMIT?.limit!=='function')return reply(503,'missing_rate_limit');
  try {
    const ip=request.headers.get('CF-Connecting-IP') || 'local';
    const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(`${url.host}:${ip}`));
    const key=Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');
    if(!(await env.FEEDBACK_RATE_LIMIT.limit({key})).success)return reply(429,'rate');
    const text=[`Мобільна Історія · ${fields.type} · ${fields.locale}`,phone?`Телефон: ${fields.brand} ${fields.model}`:'',`Сторінка: ${url.origin}${fields.page}`,'',fields.message].filter(Boolean).join('\n');
    const response=await send(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:env.TELEGRAM_CHAT_ID,text,link_preview_options:{is_disabled:true}}),signal:AbortSignal.timeout(10000)});
    if(!response.ok)return reply(502,'delivery');
    const result=await response.json();
    return result.ok===true ? reply(200,'sent') : reply(502,'delivery');
  }catch{return reply(502,'delivery');} // Never log tokens, message bodies or Telegram errors.
}

export default {
  async fetch(request,env) {
    if(new URL(request.url).pathname==='/api/feedback')return handleFeedback(request,env);
    return env.ASSETS.fetch(request);
  },
};
