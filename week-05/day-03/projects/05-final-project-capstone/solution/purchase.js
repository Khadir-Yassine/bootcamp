const mongoose=require('mongoose'),connect=require('./config/connect'),{purchase}=require('./services/purchase');
(async()=>{try{await connect();const [buyerId,productId,quantity='1']=process.argv.slice(2);console.log(await purchase(buyerId,productId,Number(quantity)));}finally{await mongoose.disconnect();}})().catch(e=>{console.error(e.message);process.exitCode=1;});
