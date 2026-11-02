import re

with open('src/Data/mockTestsData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect a few questions with question or audioText containing 男 or 女
dialog_matches = re.findall(r'\{[^{}]*"audioText":\s*"[^"]*男[^{}]*\}', text)
print(f"Questions with dialogue: {len(dialog_matches)}")
if dialog_matches:
    print(dialog_matches[0][:400])
