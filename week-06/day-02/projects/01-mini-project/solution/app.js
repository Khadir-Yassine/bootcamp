const express=require('express'),{createRouter}=require('./routes/menuRoutes');
function createApp(model){const app=express();app.use(express.json());app.use('/api',createRouter(model));app.use((_req,res)=>res.status(404).json({message:'Not found'}));app.use((error,_req,res,_next)=>res.status(error.status||(error.code==='23505'?409:500)).json({message:error.status?error.message:error.code==='23505'?'Item name already exists':'Server error'}));return app;}
module.exports={createApp};
