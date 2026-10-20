const fs=require('node:fs'),path=require('node:path');
module.exports=()=>{const filename=path.join(__dirname,'data','example.txt'),exists=fs.existsSync(filename);console.log({exists});if(exists){const info=fs.statSync(filename);console.log({size:info.size,created:info.birthtime});}};
