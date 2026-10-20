process.env.GAME_MODE='emoji';
const express=require('express'),{randomUUID,randomInt}=require('node:crypto'),path=require('node:path');
const app=express();app.use(express.json());app.use(express.static(path.join(__dirname,'public')));
const sessions=new Map();
const quiz=[{prompt:'Which HTTP method creates a resource?',options:['GET','POST','DELETE'],answer:'POST'}, {prompt:'Which status means Not Found?',options:['200','404','201'],answer:'404'}, {prompt:'Which method converts JSON text to an object?',options:['JSON.parse','JSON.stringify','Array.from'],answer:'JSON.parse'}];
const emojis=[{emoji:'😀',name:'Smile'},{emoji:'🐶',name:'Dog'},{emoji:'🌮',name:'Taco'},{emoji:'🐱',name:'Cat'},{emoji:'🚀',name:'Rocket'}];
const mode=process.env.GAME_MODE||'quiz';
function shuffled(array){const copy=[...array];for(let i=copy.length-1;i>0;i--){const j=randomInt(i+1);[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
function question(session){if(mode==='emoji'){const emoji=emojis[randomInt(emojis.length)];session.current={prompt:emoji.emoji,options:shuffled([emoji.name,...shuffled(emojis.filter(e=>e!==emoji)).slice(0,2).map(e=>e.name)]),answer:emoji.name};}else session.current=quiz[session.index];const q=session.current;return q?{prompt:q.prompt,options:shuffled(q.options)}:null;}
app.post('/api/start',(req,res)=>{const id=randomUUID(),session={id,name:String(req.body?.name||'Player').slice(0,30),score:0,index:0,created:Date.now()};sessions.set(id,session);res.json({id,score:0,question:question(session)});});
app.post('/api/answer',(req,res)=>{const session=sessions.get(req.body?.id);if(!session)return res.status(404).json({message:'Session not found'});if(!session.current)return res.status(409).json({message:'Game complete'});if(typeof req.body.answer!=='string'||!session.current.options.includes(req.body.answer))return res.status(400).json({message:'Select one of the options'});
const correct=req.body.answer===session.current.answer;const expected=session.current.answer;if(correct)session.score++;session.index++;res.json({correct,expected,score:session.score,question:question(session)});});
app.get('/api/leaderboard',(_req,res)=>res.json([...sessions.values()].sort((a,b)=>b.score-a.score).slice(0,10).map(({name,score})=>({name,score}))));
setInterval(()=>{for(const [id,s]of sessions)if(Date.now()-s.created>3600000)sessions.delete(id);},60000).unref();
app.use((_req,res)=>res.status(404).json({message:'Not found'}));app.use((e,_req,res,_next)=>res.status(e.status||500).json({message:e.status?e.message:'Server error'}));
if(require.main===module)app.listen(process.env.PORT||3000);module.exports=app;
