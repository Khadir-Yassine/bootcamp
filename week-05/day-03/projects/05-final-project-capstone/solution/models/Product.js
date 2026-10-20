const mongoose=require('mongoose');
const schema=new mongoose.Schema({title:{type:String,required:true,trim:true},description:{type:String,default:''},category:{type:String,required:true,trim:true},image:String,price:{type:Number,required:true,min:0},stock:{type:Number,required:true,min:0,validate:Number.isInteger},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}},{timestamps:true});
schema.index({price:1});schema.index({category:1,price:-1});
module.exports=mongoose.model('Product',schema);
