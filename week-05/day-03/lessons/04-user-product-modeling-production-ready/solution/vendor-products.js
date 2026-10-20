const mongoose=require('mongoose');
const root='../../../projects/05-final-project-capstone/solution';
const connect=require(root+'/config/connect'),Product=require(root+'/models/Product');require(root+'/models/User');
(async()=>{try{await connect();const owner=process.argv[2];if(!mongoose.isValidObjectId(owner))throw new Error('Pass a valid owner ObjectId');console.log(await Product.find({owner}).populate('owner','name').lean());}finally{await mongoose.disconnect();}})().catch(e=>{console.error(e.message);process.exitCode=1;});
