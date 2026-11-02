import re

with open('src/Data/mockTestsData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's count tests and total questions
tests = re.findall(r'"id":\s*"(hsk\d-[^"]+)"', text)
questions = re.findall(r'"prompt":\s*"([^"]+)"', text)
print(f"Total tests: {len(tests)}, Total questions across all tests: {len(questions)}")

# Check fields present
fields = ['audioText', 'imageEmoji', 'sentence', 'text', 'words', 'character', 'pinyin', 'explanation']
for f in fields:
    matches = re.findall(rf'"{f}":', text)
    print(f"Field '{f}': {len(matches)} occurrences")
