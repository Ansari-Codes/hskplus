const fs = require('fs');
const path = require('path');

function testJsonLd(relPath) {
  const filePath = path.resolve(__dirname, '..', relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<script id="route-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) {
    console.error(`FAIL: No route-json-ld script found in ${relPath}`);
    process.exit(1);
  }
  try {
    const parsed = JSON.parse(match[1]);
    console.log(`[PASS] ${relPath}`);
    console.log(`  Entities in @graph:`, parsed['@graph'].map(e => e['@type']));
    return { fullTag: match[0], parsed };
  } catch (err) {
    console.error(`[FAIL] JSON parsing failed in ${relPath}:`, err.message);
    process.exit(1);
  }
}

console.log('--- Verifying Static Pre-rendered JSON-LD ---');
const vocabResult = testJsonLd('dist/hsk1/vocabulary/我/index.html');
const vocabEncodedResult = testJsonLd('dist/hsk1/vocabulary/%E6%88%91/index.html');
const compResult = testJsonLd('dist/compare/bu-vs-mei/index.html');
const blogResult = testJsonLd('dist/blogs/ultimate-hsk-1-guide/index.html');
const hubResult = testJsonLd('dist/hsk1/index.html');
const vocabListResult = testJsonLd('dist/hsk1/vocabulary/index.html');

console.log('\n================ Exact JSON-LD Output for dist/hsk1/vocabulary/我/index.html ================');
console.log(vocabResult.fullTag);

console.log('\n================ Exact JSON-LD Output for dist/compare/bu-vs-mei/index.html ================');
console.log(compResult.fullTag);
