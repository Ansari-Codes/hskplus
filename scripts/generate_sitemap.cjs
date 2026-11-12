const fs = require('fs');

// Read vocabularyData.ts
const vocabFile = fs.readFileSync('src/Data/vocabularyData.ts', 'utf8');
const arrayStart = vocabFile.indexOf('export const VOCABULARY_DATA: VocabularyEntry[] = [');
const arrayEnd = vocabFile.indexOf('export function getVocabularyByLevel');
const arrayJsonStr = vocabFile.slice(arrayStart + 'export const VOCABULARY_DATA: VocabularyEntry[] = '.length, arrayEnd).trim().replace(/;$/, '');
const vocabData = eval(arrayJsonStr);

// Read comparisonsData.ts
const compContent = fs.readFileSync('src/Data/comparisonsData.ts', 'utf8');
const compSlugs = [...compContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

// Read blogsData.ts
const blogsContent = fs.readFileSync('src/Data/blogsData.ts', 'utf8');
const blogSlugs = [...blogsContent.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);

const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

const sitemapFooter = `</urlset>
`;

let urls = [];

// 1. Core Static Pages
const corePages = [
  { url: 'https://desihop.net/', changefreq: 'daily', priority: '1.0' },
  { url: 'https://desihop.net/about', changefreq: 'monthly', priority: '0.7' },
  { url: 'https://desihop.net/contact', changefreq: 'monthly', priority: '0.6' },
  { url: 'https://desihop.net/privacy-policy', changefreq: 'yearly', priority: '0.5' },
  { url: 'https://desihop.net/terms-of-service', changefreq: 'yearly', priority: '0.5' },
  { url: 'https://desihop.net/score-calculator', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/downloads', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/mock-tests', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/blogs', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/compare', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/radicals', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/pinyin', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/hsk-intro', changefreq: 'weekly', priority: '0.9' },
  { url: 'https://desihop.net/english-speakers-guide', changefreq: 'weekly', priority: '0.9' },
];

urls.push('  <!-- Core Static Pages -->');
corePages.forEach(p => {
  urls.push(`  <url>
    <loc>${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);
});

// 2. Level Hubs & Modules
[1, 2, 3].forEach(lvl => {
  urls.push(`  <!-- HSK Level ${lvl} Hub & Modules -->`);
  const modules = [
    { path: `/hsk${lvl}`, priority: '0.95' },
    { path: `/hsk${lvl}/vocabulary`, priority: '0.9' },
    { path: `/hsk${lvl}/practice`, priority: '0.9' },
    { path: `/hsk${lvl}/lessons`, priority: '0.9' },
    { path: `/hsk${lvl}/sentences`, priority: '0.9' },
    { path: `/hsk${lvl}/dialogs`, priority: '0.9' },
    { path: `/hsk${lvl}/tests`, priority: '0.9' },
  ];
  modules.forEach(m => {
    urls.push(`  <url>
    <loc>https://desihop.net${m.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${m.priority}</priority>
  </url>`);
  });
});

// 3. Educational Blog Guides
urls.push('  <!-- Educational Blog Guides (1,000+ words each) -->');
blogSlugs.forEach(slug => {
  urls.push(`  <url>
    <loc>https://desihop.net/blogs/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`);
});

// 4. Confusing Word Guides (15 Guides)
urls.push('  <!-- 15 Confusing Word Guides -->');
compSlugs.forEach(slug => {
  urls.push(`  <url>
    <loc>https://desihop.net/compare/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`);
});

// 5. Individual Word Pages per HSK Level (HSK 1, 2, 3)
const seenWordKeys = new Set();

[1, 2, 3].forEach(lvl => {
  const wordsInLevel = vocabData.filter(v => v.level === lvl);
  urls.push(`  <!-- HSK Level ${lvl} Individual Word Pages (${wordsInLevel.length} words) -->`);

  wordsInLevel.forEach(w => {
    const key = `${lvl}-${w.character}`;
    if (seenWordKeys.has(key)) return;
    seenWordKeys.add(key);

    const encodedChar = encodeURIComponent(w.character);
    urls.push(`  <url>
    <loc>https://desihop.net/hsk${lvl}/vocabulary/${encodedChar}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });
});

const fullSitemap = `${sitemapHeader}\n${urls.join('\n')}\n${sitemapFooter}`;

fs.writeFileSync('public/sitemap.xml', fullSitemap, 'utf8');
console.log(`Generated public/sitemap.xml with ${seenWordKeys.size + corePages.length + 21 + blogSlugs.length + compSlugs.length} total URLs.`);
