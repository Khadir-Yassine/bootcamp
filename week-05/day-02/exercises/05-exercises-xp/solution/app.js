const mongoose=require('mongoose'),connect=require('./config/connect'),{User,Post}=require('./models/blog');
async function main(){try{await connect();await User.init();
const lina=await User.findOneAndUpdate({email:'lina@test.com'},{$set:{username:'LinaDev',name:'Lina'}},{upsert:true,new:true,runValidators:true});
const adam=await User.findOneAndUpdate({email:'adam@test.com'},{$set:{username:'AdamCode',name:'Adam'}},{upsert:true,new:true,runValidators:true});
let post=await Post.findOne({title:'MongoDB Relationships',author:lina._id});
if(!post)post=await Post.create({title:'MongoDB Relationships',content:'Today we learned about population...',author:lina._id,comments:[{text:'Great post!',author:adam._id}]});
const feed=await Post.find({_id:post._id}).populate('author','name username').populate('comments.author','username').lean();console.log(JSON.stringify(feed,null,2));
}finally{await mongoose.disconnect();}}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
