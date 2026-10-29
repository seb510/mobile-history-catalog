import fs from 'node:fs';
import YAML from 'yaml';
const items=new Map();
for(const collection of ['phones','brands'])for(const file of fs.readdirSync(`src/data/${collection}/uk`)){const data=YAML.parse(fs.readFileSync(`src/data/${collection}/uk/${file}`,'utf8').split('---')[1]);const url=data.image||data.logo;if(url)items.set(url,{file:`${collection}/${file}`,url});}
const queue=[...items.values()],results=[];
let rateLimited=false;
async function worker(){while(queue.length && !rateLimited){const item=queue.shift();try{const r=await fetch(item.url,{method:'HEAD',signal:AbortSignal.timeout(12000)});results.push({...item,status:r.status});if(r.status===429)rateLimited=true;}catch(error){results.push({...item,status:'request-failed',message:error.message});}}}
await worker();
for(const item of queue)results.push({...item,status:"not-checked-after-rate-limit"});
fs.mkdirSync('docs',{recursive:true});fs.writeFileSync('docs/asset-audit.json',JSON.stringify({date:'2026-10-29',method:'HEAD; availability at audit time, not a license review',results},null,2)+'\n');
console.log(JSON.stringify({checked:results.length,ok:results.filter(r=>r.status===200).length,issues:results.filter(r=>r.status!==200)},null,2));
