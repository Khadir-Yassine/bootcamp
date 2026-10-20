const {addDays,format}=require('date-fns');module.exports=()=>console.log(format(addDays(new Date(),5),'yyyy-MM-dd HH:mm:ss'));
