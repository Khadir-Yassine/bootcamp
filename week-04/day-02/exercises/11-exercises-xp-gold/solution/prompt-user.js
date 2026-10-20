const readline=require('node:readline/promises'),{stdin,stdout}=require('node:process');
const {addUser,users}=require('./faker-users');
(async()=>{const rl=readline.createInterface({input:stdin,output:stdout});try{addUser({name:await rl.question('Full name: '),street:await rl.question('Street: '),country:await rl.question('Country: ')});console.log(users);}finally{rl.close();}})().catch(console.error);
