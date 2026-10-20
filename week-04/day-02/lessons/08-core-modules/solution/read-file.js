const fs=require('node:fs'),path=require('node:path');console.log(fs.readFileSync(path.join(__dirname,'output.txt'),'utf8'));
