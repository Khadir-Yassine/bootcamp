const fs=require('node:fs');module.exports=file=>console.log(fs.readFileSync(file,'utf8'));
