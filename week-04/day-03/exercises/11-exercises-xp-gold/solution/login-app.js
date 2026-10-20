const express=require('express'),bcrypt=require('bcrypt'),jwt=require('jsonwebtoken'),{randomUUID}=require('node:crypto');
const app=express();app.use(express.json());const users=[],secret=process.env.JWT_SECRET;
if(!secret||secret.length<32)throw new Error('Set JWT_SECRET to at least 32 random characters');
function publicUser(user){return {id:user.id,email:user.email,role:user.role};}
app.post('/api/register',async(req,res,next)=>{try{const {email,password}=req.body||{};
 if(typeof email!=='string'||!/^\S+@\S+\.\S+$/.test(email)||typeof password!=='string'||password.length<12||Buffer.byteLength(password,'utf8')>72||!/[A-Z]/.test(password)||!/[a-z]/.test(password)||!/[0-9]/.test(password))return res.status(400).json({message:'Valid email and password with 12+ characters (at most 72 UTF-8 bytes), uppercase, lowercase and digit required'});
 const normalized=email.trim().toLowerCase();if(users.some(u=>u.email===normalized))return res.status(409).json({message:'Email already registered'});
 const passwordHash=await bcrypt.hash(password,12);if(users.some(u=>u.email===normalized))return res.status(409).json({message:'Email already registered'});
 const user={id:randomUUID(),email:normalized,passwordHash,role:'user',failures:0,lockedUntil:0};users.push(user);res.status(201).json(publicUser(user));
 }catch(e){next(e);}});
app.post('/api/login',async(req,res,next)=>{try{const {email,password}=req.body||{};if(typeof email!=='string'||typeof password!=='string')return res.status(400).json({message:'Email and password required'});
 const user=users.find(u=>u.email===email.trim().toLowerCase());if(!user)return res.status(401).json({message:'Invalid credentials'});
 if(user.lockedUntil>Date.now())return res.status(429).json({message:'Account locked; try again in 15 minutes'});
 if(!await bcrypt.compare(password,user.passwordHash)){user.failures++;if(user.failures>=5){user.lockedUntil=Date.now()+15*60*1000;user.failures=0;}return res.status(401).json({message:'Invalid credentials'});}
 user.failures=0;user.lockedUntil=0;res.json({token:jwt.sign({sub:user.id,role:user.role},secret,{expiresIn:'1h',algorithm:'HS256'})});
 }catch(e){next(e);}});
function authenticate(req,res,next){try{const match=/^Bearer (.+)$/.exec(req.headers.authorization||'');if(!match)throw new Error();const payload=jwt.verify(match[1],secret,{algorithms:['HS256']});const user=users.find(u=>u.id===payload.sub);if(!user)throw new Error();req.user=user;next();}catch{res.status(401).json({message:'Valid Bearer token required'});}}
app.get('/api/profile',authenticate,(req,res)=>res.json(publicUser(req.user)));
app.get('/api/admin',authenticate,(req,res)=>req.user.role==='admin'?res.json({message:'Admin access'}):res.status(403).json({message:'Admin role required'}));
app.use((_req,res)=>res.status(404).json({message:'Not found'}));app.use((e,_req,res,_next)=>res.status(e.status||500).json({message:e.status?e.message:'Server error'}));
if(require.main===module)app.listen(process.env.PORT||5000);module.exports=app;
