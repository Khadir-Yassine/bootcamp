const readline=require('node:readline/promises');
module.exports=async()=>{const rl=readline.createInterface({input:process.stdin,output:process.stdout});try{await require('./weather')(await rl.question('City: '));}finally{rl.close();}};
