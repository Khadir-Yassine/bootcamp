const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({name:{type:String,trim:true},username:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,trim:true,lowercase:true}},{timestamps:true});
const User=mongoose.model('User',userSchema);
const postSchema=new mongoose.Schema({title:{type:String,required:true,trim:true},content:String,slug:{type:String,index:true},author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},comments:[{text:{type:String,required:true},author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},createdAt:{type:Date,default:Date.now}}]},{timestamps:true});
postSchema.pre('save',function(next){if(this.isModified('title'))this.slug=this.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');next();});
postSchema.index({author:1});
const Post=mongoose.model('Post',postSchema);
module.exports={User,Post};
