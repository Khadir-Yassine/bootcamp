const fs=require('node:fs');exports.readFile=path=>fs.readFileSync(path,'utf8');exports.writeFile=(path,content)=>fs.writeFileSync(path,content,'utf8');
