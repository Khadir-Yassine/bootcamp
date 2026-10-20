from pathlib import Path
root=Path(__file__).resolve().parents[3]
p=root/'week-07/solutions/src/data.jsx'
s=p.read_text(encoding='utf-8')
start=s.find('const countries=(()=>')
if start>=0:
    end=s.index('export class AutoCompletedText',start)
    s=s[:start]+s[end:]
    s=s.replace("import posts from './posts.json';","import posts from './posts.json';\nimport countries from './countries';")
p.write_text(s,encoding='utf-8')
p=root/'week-07/solutions/src/basics.jsx'
s=p.read_text(encoding='utf-8').replace('<section><img src={imageUrl}', '<section className="max-w-md rounded shadow p-6"><img src={imageUrl}')
s=s.replace('<div className="grid" id="features">','<div className="grid md:grid-cols-3 gap-6" id="features">')
p.write_text(s,encoding='utf-8')
