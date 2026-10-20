const fs=require('node:fs');console.log(fs.readdirSync(process.argv[2]||__dirname).join('\n'));
