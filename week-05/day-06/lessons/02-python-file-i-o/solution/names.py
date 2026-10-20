"""Read the supplied names file, then write an edited copy without changing the source."""
from pathlib import Path
from collections import Counter
import argparse, urllib.request

def transform(path: Path, first_name: str):
    text=path.read_text(encoding='utf-8')
    for line in text.splitlines(): print(line)
    lines=text.splitlines()
    print('Fifth line:', lines[4] if len(lines)>=5 else '(fewer than five lines)')
    print('First five characters:',text[:5])
    print('Lines:',lines)
    words=[word for line in lines for word in line.split()]
    print('Words:',words)
    counts=Counter(words)
    print({name:counts[name] for name in ['Darth','Luke','Lea']})
    lines.append(first_name)
    updated=[' '.join('Luke SkyWalker' if word=='Luke' else word for word in line.split()) for line in lines]
    destination=path.with_name(path.stem+'-updated'+path.suffix)
    destination.write_text('\n'.join(updated)+'\n',encoding='utf-8')
    return destination

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('file',nargs='?',default='nameslist.txt');parser.add_argument('--name',default='Yassine');parser.add_argument('--download',action='store_true');args=parser.parse_args()
    path=Path(args.file)
    if args.download:
        with urllib.request.urlopen('https://www.practicepython.org/assets/nameslist.txt',timeout=15) as response:
            path.write_bytes(response.read())
    print('Saved:',transform(path,args.name))
