import re
import json

with open('src/Data/mockTestsData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

types = set(re.findall(r'"type":\s*"([^"]+)"', text))
print("Unique types in mockTestsData:", types)

for t in types:
    m = re.search(r'\{[^{}]*"type":\s*"' + t + r'"[^{}]*\}', text)
    if m:
        print(f"\n--- Sample for type '{t}': ---")
        print(m.group(0)[:300])
