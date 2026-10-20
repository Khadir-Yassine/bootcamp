const mongoose=require('mongoose');
const item=new mongoose.Schema({productId:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},title:{type:String,required:true},priceAtPurchase:{type:Number,min:0,required:true},quantity:{type:Number,min:1,required:true,validate:Number.isInteger}},{_id:false});
const schema=new mongoose.Schema({buyer:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},items:{type:[item],validate:{validator:items=>items.length>0,message:'At least one item required'}},totalAmount:{type:Number,required:true,min:0},status:{type:String,enum:['pending','shipped','delivered'],default:'pending'}},{timestamps:true});
module.exports=mongoose.model('Order',schema);
