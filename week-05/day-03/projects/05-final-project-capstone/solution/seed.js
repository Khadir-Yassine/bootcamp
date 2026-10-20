const mongoose=require('mongoose'),connect=require('./config/connect'),User=require('./models/User'),Product=require('./models/Product');
(async()=>{try{await connect();await User.init();let owner=await User.findOne({email:'demo@example.com'});if(!owner)owner=await User.create({name:'Demo Buyer',email:'demo@example.com',password:'ExamplePassword123!',role:'buyer'});
const product=await Product.findOneAndUpdate({title:'Demo Laptop',owner:owner._id},{$set:{description:'A demo product',category:'Electronics',price:1500,stock:10}},{upsert:true,new:true,runValidators:true});console.log({buyerId:String(owner._id),productId:String(product._id)});
}finally{await mongoose.disconnect();}})().catch(e=>{console.error(e.message);process.exitCode=1;});
