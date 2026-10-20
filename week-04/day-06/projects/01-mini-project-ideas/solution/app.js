const mongoose=require('mongoose'),connect=require('./config/connect'),{Todo}=require('./models');
async function main(){try{await connect();const [command='list',userId,idOrTitle,category='Personal']=process.argv.slice(2);if(!mongoose.isValidObjectId(userId))throw new Error('Pass a valid user ID');
if(command==='add'){if(!await require('./models').User.exists({_id:userId}))throw new Error('User not found');console.log(await Todo.create({title:idOrTitle,user:userId,category}));}
else if(command==='complete'||command==='delete'){if(!mongoose.isValidObjectId(idOrTitle))throw new Error('Valid todo ID required');const query={_id:idOrTitle,user:userId};const result=command==='complete'?await Todo.findOneAndUpdate(query,{$set:{status:'completed'}},{new:true,runValidators:true}):await Todo.findOneAndDelete(query);if(!result)throw new Error('Todo not found');console.log(result);}
else if(command==='list'||command==='completed'){const query={user:userId};if(command==='completed')query.status='completed';console.log(await Todo.find(query).lean());}
else throw new Error('Commands: add, list, complete, completed, delete');
}finally{await mongoose.disconnect();}}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
