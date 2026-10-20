const express=require('express');
function createApp({base='/api/posts',kind='post',seed=[]}={}){
  const app=express();app.use(express.json());let records=structuredClone(seed),nextId=Math.max(0,...records.map(r=>r.id))+1;
  const fields=kind==='book'?['title','author','publishedYear']:kind==='todo'?['title','completed']:['title','content'];
  function clean(body){
    if(!body||typeof body!=='object'||Array.isArray(body))throw Object.assign(new Error('JSON object required'),{status:400});
    const result={};for(const field of fields){let value=body[field];
      if(field==='completed'){if(value===undefined)value=false;if(typeof value!=='boolean')throw Object.assign(new Error('completed must be boolean'),{status:400});}
      else if(field==='publishedYear'){if(!Number.isInteger(value)||value<0)throw Object.assign(new Error('publishedYear must be a positive integer'),{status:400});}
      else {if(typeof value!=='string'||!value.trim())throw Object.assign(new Error(`${field} required`),{status:400});value=value.trim();}
      result[field]=value;
    }return result;
  }
  app.get('/api/greetings',(_req,res)=>res.json({message:'Hello from Express!'}));
  app.get('/api/search',(req,res)=>res.json(records.filter(p=>p.title.toLowerCase().includes(String(req.query.title||'').toLowerCase()))));
  app.get(base,(_req,res)=>res.json(records));
  app.param('id',(req,res,next,value)=>{const id=Number(value);if(!Number.isSafeInteger(id)||id<1)return res.status(400).json({message:'Invalid ID'});const record=records.find(r=>r.id===id);if(!record)return res.status(404).json({message:'Record not found'});req.record=record;next();});
  app.get(base+'/:id',(req,res)=>res.json(req.record));
  app.post(base,(req,res,next)=>{try{const record={id:nextId++,...clean(req.body)};records.push(record);res.status(201).json(record);}catch(e){next(e);}});
  app.put(base+'/:id',(req,res,next)=>{try{Object.assign(req.record,clean(req.body));res.json(req.record);}catch(e){next(e);}});
  app.delete(base+'/:id',(req,res)=>{records=records.filter(r=>r.id!==req.record.id);res.status(204).end();});
  app.use((_req,res)=>res.status(404).json({message:'Route not found'}));
  app.use((error,_req,res,_next)=>res.status(error.status||500).json({message:error.status?error.message:'Server error'}));
  return app;
}
module.exports={createApp};
