import re
import json

with open('src/Data/mockTestsData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect test ids
test_ids = ['hsk1-listening-1', 'hsk1-reading-1', 'hsk1-writing-1', 'hsk2-reading-1', 'hsk3-writing-1']
for tid in test_ids:
    idx = text.find(f'"id": "{tid}"')
    if idx != -1:
        snippet = text[idx:idx+1500]
        print(f"=== {tid} ===")
        print(snippet[:500])
        print("...")
