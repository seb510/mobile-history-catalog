import test from 'node:test';
import assert from 'node:assert/strict';
import worker, { handleFeedback } from '../worker/feedback.mjs';

const origin='https://archive.example';
const payload={type:'phone',brand:'Nokia',model:'3650',message:'Please consider this phone.',source:'https://example.com/source',email:'',page:'/catalog/',locale:'uk',website:''};
const env={TELEGRAM_BOT_TOKEN:'test-only-token',TELEGRAM_CHAT_ID:'test-only-chat',FEEDBACK_RATE_LIMIT:{limit:async()=>({success:true})}};
const request=(data=payload,extra={})=>new Request(origin+'/api/feedback',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json','CF-Connecting-IP':'192.0.2.1'},body:JSON.stringify(data),...extra});
const mustNotSend=()=>{throw new Error('unexpected delivery');};

test('valid submission delivers plain text to the configured chat without IP or preview',async()=>{
  let calls=0;
  const result=await handleFeedback(request(),env,async(url,options)=>{
    calls++;assert.equal(url,'https://api.telegram.org/bottest-only-token/sendMessage');
    const data=JSON.parse(options.body);assert.equal(data.chat_id,env.TELEGRAM_CHAT_ID);
    assert.equal(data.parse_mode,undefined);assert.equal(data.link_preview_options.is_disabled,true);
    assert.match(data.text,/Nokia 3650/);assert.ok(!data.text.includes('192.0.2.1'));
    return Response.json({ok:true});
  });
  assert.equal(result.status,200);assert.equal(calls,1);assert.equal((await result.json()).ok,true);
  assert.equal(result.headers.get('Cache-Control'),'no-store');
});
test('cross-origin requests cannot send',async()=>assert.equal((await handleFeedback(request(payload,{headers:{Origin:'https://other.example','Content-Type':'application/json'}}),env,mustNotSend)).status,403));
test('GET is rejected',async()=>assert.equal((await handleFeedback(new Request(origin+'/api/feedback'),env,mustNotSend)).status,405));
test('wrong content type is rejected',async()=>assert.equal((await handleFeedback(request(payload,{headers:{Origin:origin,'Content-Type':'text/plain'}}),env,mustNotSend)).status,415));
for(const [name,value] of Object.entries({type:'other',locale:'other',brand:'a'.repeat(61),model:'',page:'/compare/?a=private'})) {
  test(`invalid ${name} does not send`,async()=>assert.equal((await handleFeedback(request({...payload,[name]:value}),env,mustNotSend)).status,400));
}
test('phone suggestion needs only brand and model',async()=>assert.equal((await handleFeedback(request({...payload,message:''}),env,async()=>Response.json({ok:true}))).status,200));
for(const type of ['correction','bug','idea']) {
  test(`${type} requires a non-whitespace description`,async()=>assert.equal((await handleFeedback(request({...payload,type,message:'          '}),env,mustNotSend)).status,400));
}
test('phone comments are capped independently of longer issue descriptions',async()=>assert.equal((await handleFeedback(request({...payload,message:'a'.repeat(601)}),env,mustNotSend)).status,400));
for(const message of ['<script>alert(1)</script>','<img src=x onerror=alert(1)>','javascript:alert(1)','&#60;script&#62;alert(1)','&lt;script&gt;alert(1)','onload = alert(1)','data:text/html,<svg>']) {
  test(`script or markup input is rejected: ${message.slice(0,24)}`,async()=>assert.equal((await handleFeedback(request({...payload,message}),env,mustNotSend)).status,400));
}
test('markup is rejected in phone identity as well as description',async()=>assert.equal((await handleFeedback(request({...payload,model:'<svg onload=alert(1)>'}),env,mustNotSend)).status,400));
test('plain code-like text is inert; removed email/source and hidden phone fields are not forwarded',async()=>{
  const response=await handleFeedback(request({...payload,type:'bug',brand:'hidden',model:'hidden',message:"The page says SELECT * FROM phones; it does not load.",email:'private@example.com',source:'https://private.example'}),env,async(_,options)=>{
    const body=JSON.parse(options.body);assert.equal(body.parse_mode,undefined);assert.ok(!body.text.includes('private'));assert.ok(!body.text.includes('hidden'));assert.ok(body.text.includes('SELECT * FROM phones'));return Response.json({ok:true});
  });assert.equal(response.status,200);
});
test('bounded body rejects oversized payload without delivery',async()=>assert.equal((await handleFeedback(request({...payload,message:'x'.repeat(11000)}),env,mustNotSend)).status,413));
test('invalid JSON is rejected',async()=>assert.equal((await handleFeedback(request(payload,{body:'{'}),env,mustNotSend)).status,400));
test('honeypot acknowledges without forwarding',async()=>assert.equal((await handleFeedback(request({...payload,website:'bot'}),env,mustNotSend)).status,200));
test('missing setup returns unavailable',async()=>assert.equal((await handleFeedback(request(),{},mustNotSend)).status,503));
for(const [binding,code] of [['TELEGRAM_BOT_TOKEN','missing_bot_token'],['TELEGRAM_CHAT_ID','missing_chat_id'],['FEEDBACK_RATE_LIMIT','missing_rate_limit']]) {
  test(`configuration diagnostic identifies ${binding} without leaking other values`,async()=>{
    const config={...env};delete config[binding];
    const response=await handleFeedback(request(),config,mustNotSend);
    assert.equal(response.status,503);
    assert.deepEqual(await response.json(),{ok:false,code});
  });
}
test('rate limit rejects without forwarding',async()=>assert.equal((await handleFeedback(request(),{...env,FEEDBACK_RATE_LIMIT:{limit:async()=>({success:false})}},mustNotSend)).status,429));
test('Telegram false response is not reported as success',async()=>assert.equal((await handleFeedback(request(),env,async()=>Response.json({ok:false}))).status,502));
test('upstream failures do not expose credentials or raw errors',async()=>{
  const response=await handleFeedback(request(),env,async()=>{throw Error('test-only-token');});
  assert.equal(response.status,502);assert.ok(!(await response.text()).includes('test-only-token'));
});
test('non-API routes still use static assets',async()=>{
  const response=await worker.fetch(new Request(origin+'/catalog/'),{ASSETS:{fetch:async()=>new Response('static')}});
  assert.equal(await response.text(),'static');
});
