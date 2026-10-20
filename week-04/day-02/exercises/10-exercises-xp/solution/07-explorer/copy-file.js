const fs=require('node:fs'),path=require('node:path');fs.copyFileSync(path.join(__dirname,'source.txt'),path.join(__dirname,'destination.txt'));
