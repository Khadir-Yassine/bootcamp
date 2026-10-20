const mongoose=require('mongoose'),connect=require('./config/connect'),Task=require('./models/Task');
async function createTask(title,description){return Task.create({title,description});}
async function getAllTasks(){return Task.find().lean();}
async function completeTask(id){const task=await Task.findByIdAndUpdate(id,{$set:{status:'completed'}},{new:true,runValidators:true});if(!task)throw new Error('Task not found');return task;}
async function main(){try{await connect();
for(const invalid of [{description:'Missing title'},{title:'Invalid status',status:'in-progress'}]){try{await Task.create(invalid);throw new Error('Expected rejection');}catch(e){if(e.name!=='ValidationError')throw e;console.log('Validation Error Caught:',e.message);}}
const task=await createTask(process.argv[2]||'Learn Mongoose Validation','Complete the daily challenge');console.log(await completeTask(task._id));console.log(await getAllTasks());
}finally{await mongoose.disconnect();}}
if(require.main===module)main().catch(e=>{console.error(e.message);process.exitCode=1;});
module.exports={createTask,getAllTasks,completeTask};
