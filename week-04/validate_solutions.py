"""Run only local checks; never contacts lesson APIs or connects to a database."""
from pathlib import Path
import subprocess, os, json, sys, concurrent.futures, shutil

repo=Path(__file__).resolve().parents[1]
node=shutil.which('node') or 'node'
env=os.environ.copy()
env['NODE_PATH']=str(repo/'week-04/.validation/node_modules')
source=[]
for week in ['week-04','week-05','week-06']:
    for folder, dirs, files in os.walk(repo/week):
        dirs[:]=[name for name in dirs if not name.startswith('.') and name not in ['node_modules','__pycache__']]
        for name in files:
            p=Path(folder)/name
            if 'solution' in p.parts and p.suffix in ['.js','.cjs','.mjs']:source.append(p)

def syntax(path):
    result=subprocess.run([str(node),'--check',str(path)],capture_output=True,text=True,env=env)
    return {'path':str(path.relative_to(repo)),'passed':result.returncode==0,'output':result.stderr.strip()}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results=list(pool.map(syntax,source))
tests=[]
for path in [p for p in source if p.name.endswith('.test.js')]+[repo/'week-04/logic.test.cjs']:
    result=subprocess.run([str(node),'--test','--test-isolation=none',str(path)],capture_output=True,text=True,env=env,timeout=60)
    tests.append({'path':str(path.relative_to(repo)),'passed':result.returncode==0,'output':result.stdout+result.stderr})
path=repo/'week-05/day-06/lessons/02-python-file-i-o/solution'
result=subprocess.run([sys.executable,'-m','unittest','test_names.py'],cwd=path,capture_output=True,text=True,timeout=30)
tests.append({'path':str(path.relative_to(repo))+'/test_names.py','passed':result.returncode==0,'output':result.stdout+result.stderr})
report={'syntax':results,'tests':tests}
(repo/'week-04/validation-results.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print('Syntax:',sum(r['passed'] for r in results),'/',len(results))
print('Test files:',sum(r['passed'] for r in tests),'/',len(tests))
for result in results+tests:
    if not result['passed']:print(result['path'],result['output'])
if any(not r['passed'] for r in results+tests):sys.exit(1)
