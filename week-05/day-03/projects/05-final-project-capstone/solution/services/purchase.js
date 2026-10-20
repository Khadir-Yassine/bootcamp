const mongoose=require('mongoose'),Product=require('../models/Product'),Order=require('../models/Order'),User=require('../models/User');
// Requires a replica set: the stock decrement and order creation commit together.
async function purchase(buyerId,productId,quantity){
 if(!mongoose.isValidObjectId(buyerId)||!mongoose.isValidObjectId(productId))throw Object.assign(new Error('Invalid ID'),{status:400});
 if(!Number.isSafeInteger(quantity)||quantity<1)throw Object.assign(new Error('Quantity must be a positive integer'),{status:400});
 const session=await mongoose.startSession();let order;
 try{await session.withTransaction(async()=>{
   if(!await User.exists({_id:buyerId}).session(session))throw Object.assign(new Error('Buyer not found'),{status:404});
   // Conditional $inc prevents two buyers from overselling the same final unit.
   const product=await Product.findOneAndUpdate({_id:productId,stock:{$gte:quantity}},{$inc:{stock:-quantity}},{new:true,session,runValidators:true});
   if(!product)throw Object.assign(new Error('Product missing or insufficient stock'),{status:409});
   [order]=await Order.create([{buyer:buyerId,items:[{productId:product._id,title:product.title,priceAtPurchase:product.price,quantity}],totalAmount:Math.round(product.price*quantity*100)/100}],{session});
 });return order;
 }finally{await session.endSession();}
}
module.exports={purchase};
