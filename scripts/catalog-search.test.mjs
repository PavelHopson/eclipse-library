import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../web/catalog-search.js', import.meta.url), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const search = context.window.EclipseCatalogSearch;
assert.ok(search, 'search runtime must be exported');

const localImage = search.createQueryPlan('\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439');
assert.deepEqual([...localImage.direct], ['\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f', '\u043c\u043e\u0434\u0435\u043b\u044c', '\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439']);
assert.equal(search.matches('Local self-hosted LLM image generator', localImage), true);
assert.equal(search.matches('Cloud audio transcription model', localImage), false);

const ai = search.createQueryPlan('ai');
assert.equal(search.matches('paid cloud service', ai), false);
assert.equal(search.matches('AI model provider', ai), true);

const typo = search.createQueryPlan('securty');
assert.equal(search.matches('Security and privacy audit', typo), true);

const stopwords = search.createQueryPlan('\u0434\u043b\u044f \u0438 \u043d\u0430');
assert.equal(stopwords.direct.length, 0);
assert.equal(search.matches('anything', stopwords), true);

console.log('catalog-search tests: ok');
