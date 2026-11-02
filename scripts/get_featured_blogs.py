import json

with open('src/Data/blogsData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# let's find the first 4 slugs and titles
import re
slugs = re.findall(r'"slug":\s*"([^"]+)"', text)[:4]
titles = re.findall(r'"title":\s*"([^"]+)"', text)[:4]
excerpts = re.findall(r'"excerpt":\s*"([^"]+)"', text)[:4]
categories = re.findall(r'"category":\s*"([^"]+)"', text)[:4]
readTimes = re.findall(r'"readTime":\s*"([^"]+)"', text)[:4]
wordCounts = re.findall(r'"wordCount":\s*([0-9]+)', text)[:4]

for i in range(4):
    print(f"Blog {i+1}:")
    print(f"  slug: {slugs[i]}")
    print(f"  title: {titles[i]}")
    print(f"  excerpt: {excerpts[i]}")
    print(f"  category: {categories[i]}")
    print(f"  readTime: {readTimes[i]}")
    print(f"  wordCount: {wordCounts[i]}")
