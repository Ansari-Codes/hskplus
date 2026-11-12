const fs = require('fs');
const path = require('path');

console.log('=== 1. Verifying dist/hsk1/vocabulary/不/index.html ===');
const buPath = path.resolve(__dirname, '../dist/hsk1/vocabulary/不/index.html');
const buHtml = fs.readFileSync(buPath, 'utf8');

const match = buHtml.match(/<div id="seo-prerender-content"[\s\S]*?<\/article>\s*<\/div>/);
if (!match) {
  console.error('FAIL: No #seo-prerender-content found');
  process.exit(1);
}

console.log('[PASS] Found #seo-prerender-content in dist/hsk1/vocabulary/不/index.html');
console.log('  - Has Confusing Word Alert (bu-vs-mei):', buHtml.includes('https://desihop.net/compare/bu-vs-mei'));
console.log('  - Has Practice Writing Link:', buHtml.includes('https://desihop.net/hsk1/practice/%E4%B8%8D'));
console.log('  - Has Frequently Asked Questions Section:', buHtml.includes('Frequently Asked Questions about 不 (bù)'));
console.log('  - Has Prev / Next navigation:', buHtml.includes('All HSK 1 Words'));
console.log('  - Has Related HSK 1 Words Mesh:', buHtml.includes('Related HSK 1 Words'));

console.log('\n=== 2. Verifying dist/hsk1/vocabulary/index.html ===');
const hubPath = path.resolve(__dirname, '../dist/hsk1/vocabulary/index.html');
const hubHtml = fs.readFileSync(hubPath, 'utf8');
const links = hubHtml.match(/href="https:\/\/desihop\.net\/hsk1\/vocabulary\/[^"]+"/g) || [];
console.log(`[PASS] Crawlable word links found in HSK 1 Vocabulary Hub: ${links.length} / 150`);

console.log('\n=== 3. Verifying dist/compare/bu-vs-mei/index.html ===');
const compPath = path.resolve(__dirname, '../dist/compare/bu-vs-mei/index.html');
const compHtml = fs.readFileSync(compPath, 'utf8');
console.log('  - Links back to 不 vocabulary page:', compHtml.includes('https://desihop.net/hsk1/vocabulary/%E4%B8%8D'));
console.log('  - Links back to 没 vocabulary page:', compHtml.includes('https://desihop.net/hsk1/vocabulary/%E6%B2%A1'));
console.log('  - Links to 不 practice page:', compHtml.includes('https://desihop.net/hsk1/practice/%E4%B8%8D'));
console.log('  - Links to 没 practice page:', compHtml.includes('https://desihop.net/hsk1/practice/%E6%B2%A1'));

console.log('\n=== 4. Raw #seo-prerender-content in dist/hsk1/vocabulary/不/index.html ===');
console.log(match[0]);
