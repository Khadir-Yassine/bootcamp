const express=require('express'),axios=require('axios');const app=express();app.use(express.json());
async function forward(req,res){try{
 const id=req.params.id;if(id&&(!/^\d+$/.test(id)||Number(id)<1))return res.status(400).json({message:'Invalid ID'});
 const {data,status}=await axios({method:req.method,url:'https://jsonplaceholder.typicode.com/posts'+(id?'/'+id:''),data:['POST','PUT'].includes(req.method)?req.body:undefined,timeout:15000});res.status(status).json(data);
}catch(e){res.status(e.response?.status||502).json({message:e.response?'Upstream request rejected':'Upstream API unavailable'});}}
app.route('/api/posts').get(forward).post(forward);app.route('/api/posts/:id').get(forward).put(forward).delete(forward);app.use((_req,res)=>res.status(404).json({message:'Not found'}));app.listen(process.env.PORT||5000);
