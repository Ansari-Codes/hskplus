import json
import re

with open(r'C:\Users\Paradise Computers\.gemini\antigravity\brain\2ab14fdf-191d-41ce-b477-9cf322b59e23\.system_generated\logs\transcript_full.jsonl', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    data = json.loads(line)
    content = data.get('content', '')
    if 'lighthouseVersion' in content:
        # Find all audit blocks
        # "id": "...", "title": "...", "score": ...
        audits = re.findall(r'"([a-z0-9\-]+)":\s*\{\s*"id":\s*"\1",\s*"title":\s*"([^"]+)",(?:[^{}]|\{[^{}]*\})*?"score":\s*([0-9\.]+|null)', content)
        print(f"Found {len(audits)} audits in truncated text")
        
        # Or let's see which audits have numericValue or score
        # Let's inspect key performance metrics from the text:
        metrics = ['first-contentful-paint', 'largest-contentful-paint', 'speed-index', 'total-blocking-time', 'cumulative-layout-shift', 'interactive']
        for m in metrics:
            pat = r'"' + m + r'":\s*\{[^}]+"displayValue":\s*"([^"]+)"'
            match = re.search(pat, content)
            score_match = re.search(r'"' + m + r'":\s*\{[^}]+"score":\s*([0-9\.]+)', content)
            dv = match.group(1) if match else "N/A"
            sc = score_match.group(1) if score_match else "N/A"
            print(f"{m}: {dv} (score: {sc})")
            
        print("\nAll audits found:")
        for aid, title, score in audits:
            print(f"  [{score}] {aid}: {title}")
        break
