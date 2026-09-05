import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {publicEntries,publicFiles} from './anura-publication.mjs';
import {smokeBase} from './gwen-publication.mjs';
test('ANURA exact allowlist excludes internal documents and source MOV',()=>{
 const entries=publicEntries();assert.equal(entries.length,253);assert.equal(publicFiles.length,252);
 assert.ok(entries.reduce((n,x)=>n+x.size,0)<6_000_000);
 assert.ok(!entries.some(x=>/\.mov$|design-qa|README|reports\//i.test(x.path)));
});
test('production smoke refuses third-party or credential-bearing origins',()=>{
 assert.throws(()=>smokeBase('https://example.com/'));assert.throws(()=>smokeBase('https://secret@library.eclipse-forge.ru/'));
 assert.throws(()=>smokeBase('https://library.eclipse-forge.ru/a/'));assert.throws(()=>smokeBase('https://library.eclipse-forge.ru/?token=x'));
});
test('deployment is gated on trusted master push; fork/PR cannot access deploy credentials',()=>{
 const y=readFileSync(new URL('../.github/workflows/deploy-vps.yml',import.meta.url),'utf8');
 const condition=y.match(/    if: >-\r?\n([\s\S]+?)\r?\n    runs-on:/)?.[1];assert.ok(condition);
 assert.match(condition,/github\.event_name == 'workflow_run'/);
 assert.match(condition,/github\.event\.workflow_run\.event == 'push'/);
 assert.match(condition,/github\.event\.workflow_run\.head_repository\.full_name == github\.repository/);
 assert.match(condition,/github\.event\.workflow_run\.head_branch == 'master'/);
 assert.match(condition,/github\.event\.workflow_run\.conclusion == 'success'/);
 assert.match(condition,/github\.event_name == 'workflow_dispatch' && github\.ref == 'refs\/heads\/master'/);
 const trusted={event_name:'workflow_run',ref:'refs/heads/master',repository:'PavelHopson/eclipse-library',event:{workflow_run:{event:'push',head_branch:'master',head_repository:{full_name:'PavelHopson/eclipse-library'},conclusion:'success'}}};
 const allowed=github=>runInNewContext(condition,{github},{timeout:100})===true;
 assert.ok(allowed(trusted));
 for(const change of [{event:'pull_request'},{head_branch:'feature'},{head_repository:{full_name:'someone/fork'}},{conclusion:'failure'}]){
  const candidate=structuredClone(trusted);Object.assign(candidate.event.workflow_run,change);assert.equal(allowed(candidate),false);
 }
 assert.ok(allowed({...trusted,event_name:'workflow_dispatch'}));
 assert.equal(allowed({...trusted,event_name:'workflow_dispatch',ref:'refs/heads/feature'}),false);
 assert.equal(allowed({...trusted,event_name:'pull_request'}),false);
 assert.doesNotMatch(y,/pull_request_target|write-all|StrictHostKeyChecking=no/);
 for(const action of y.matchAll(/uses: ([^\s]+)/g))assert.match(action[1],/@[a-f0-9]{40}$/);
 assert.match(y,/permissions:\s+contents: read/);
 assert.match(y,/node scripts\/anura-publication.mjs --check-stage _site/);
 assert.match(y,/node scripts\/anura-publication.mjs --smoke https:\/\/library.eclipse-forge.ru\//);
});
