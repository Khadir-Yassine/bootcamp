const mongoose=require('mongoose');
module.exports=mongoose.model('Task',new mongoose.Schema({title:{type:String,required:[true,'You must provide a task title'],trim:true},description:String,status:{type:String,enum:['pending','completed'],default:'pending'},createdAt:{type:Date,default:Date.now}}));
