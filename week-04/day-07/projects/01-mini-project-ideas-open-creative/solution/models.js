/** PROJECT: Expense Ledger
 * User (1) -> Expense (many), referenced by userId. Expenses grow independently.
 * Most common query: user's expenses by category, newest first.
 */
const mongoose=require('mongoose'),bcrypt=require('bcrypt');
const user=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,trim:true,lowercase:true,unique:true},password:{type:String,required:true,select:false}},{timestamps:true});
user.pre('save',async function(){if(this.isModified('password'))this.password=await bcrypt.hash(this.password,12);});
const User=mongoose.model('User',user);
const expense=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},description:{type:String,required:true,trim:true},category:{type:String,required:true,enum:['Food','Travel','Home','Other']},amount:{type:Number,required:true,min:0}},{timestamps:true});
expense.index({userId:1,category:1,createdAt:-1});const Expense=mongoose.model('Expense',expense);
module.exports={User,Expense};
