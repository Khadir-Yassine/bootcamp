const mongoose=require('mongoose'),bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({username:{type:String,required:true,trim:true,lowercase:true},password:{type:String,required:true,select:false}},{timestamps:true});
userSchema.pre('save',async function(){if(this.isModified('password'))this.password=await bcrypt.hash(this.password,12);});
const User=mongoose.model('User',userSchema);
const taskSchema=new mongoose.Schema({title:{type:String,required:true,trim:true,maxlength:200},user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},category:{type:String,required:true,enum:['Work','Personal'],default:'Personal'},status:{type:String,enum:['pending','completed'],default:'pending'}},{timestamps:true});
taskSchema.index({category:1});taskSchema.index({user:1,status:1});
const Todo=mongoose.model('Todo',taskSchema);module.exports={User,Todo};
