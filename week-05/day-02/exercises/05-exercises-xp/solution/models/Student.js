const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({name:{type:String,required:[true,'Name is mandatory'],trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},age:{type:Number,min:[18,'Students must be at least 18 years old']},updatedAt:Date});
studentSchema.pre('save',function(next){this.updatedAt=new Date();next();});
module.exports=mongoose.model('Student',studentSchema);
