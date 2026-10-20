const mongoose=require('mongoose'),connect=require('./config/connect'),Student=require('./models/Student');
async function main(){try{await connect();console.log('Connection Successful! Node.js is talking to MongoDB.');await Student.init();
try{await new Student({name:'Omar',email:'omar@school.com',age:16}).save();throw new Error('Expected rejection');}catch(error){if(error.name!=='ValidationError')throw error;console.log('Validation Error Caught:',error.message);}
}finally{await mongoose.disconnect();}}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
