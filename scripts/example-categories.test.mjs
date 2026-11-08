import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {filterExamples,validCategory} from '../web/example-categories.mjs';
test('category schema stays identical in separate API deployment',async()=>assert.equal(await readFile(new URL('../web/example-categories.mjs',import.meta.url),'utf8'),await readFile(new URL('../editor-api/example-categories.mjs',import.meta.url),'utf8')));
test('categories combine with word search and product; legacy examples remain visible',()=>{
 const examples=[{title:'Рыжий портрет',prompt:'Тёплый свет',category:'portrait',project:'Library'},{title:'Портрет',category:'cinema',project:'Media'},{title:'Legacy'}];
 assert.equal(filterExamples(examples,{query:'свет рыжий',category:'portrait',product:'Library'}).length,1);
 assert.equal(filterExamples(examples,{query:'теплый'}).length,1);
 assert.equal(filterExamples(examples,{category:'uncategorized'})[0].title,'Legacy');
 assert.equal(filterExamples(examples).length,3);
 assert(validCategory(''));assert(validCategory('portrait'));assert(!validCategory('<script>'));assert(!validCategory(null));
});
