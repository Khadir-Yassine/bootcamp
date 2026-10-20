const mongoose=require('mongoose'),bcrypt=require('bcrypt');
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true,minlength:12,select:false},role:{type:String,enum:['buyer','seller','admin'],default:'buyer'}},{timestamps:true});
schema.pre('save',async function(){if(this.isModified('password'))this.password=await bcrypt.hash(this.password,12);});
module.exports=mongoose.model('User',schema);
