const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const yaml=fs.readFileSync(path.join(root,'.github/workflows/quality.yml'),'utf8');
const commands=[...yaml.matchAll(/^\s*(?:run:\s*)?(node .+)$/gm)].map(m=>m[1].trim());
const results=[],logs=[];
for(const cmd of commands){
 const r=spawnSync(process.execPath,cmd.split(/\s+/).slice(1),{cwd:root,encoding:'utf8',windowsHide:true,timeout:120000});
 logs.push(cmd+'\n'+r.stdout+'\n'+r.stderr);
 results.push({command:cmd,passed:r.status===0,error:r.status===0?undefined:(r.stderr||r.stdout||String(r.error)).slice(-1800)});
}
const out=path.join(root,'.artifacts/anura');fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'regressions.log'),logs.join('\n\n'));
fs.writeFileSync(path.join(out,'regressions.json'),JSON.stringify(results,null,2));
console.log(JSON.stringify({total:results.length,passed:results.filter(x=>x.passed).length,failed:results.filter(x=>!x.passed)},null,2));
if(results.some(x=>!x.passed))process.exitCode=1;
