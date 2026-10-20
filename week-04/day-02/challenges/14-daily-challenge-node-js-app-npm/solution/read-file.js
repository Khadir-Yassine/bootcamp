const fs=require('node:fs'),path=require('node:path');module.exports=()=>console.log(fs.readFileSync(path.join(__dirname,'files','file-data.txt'),'utf8'));
