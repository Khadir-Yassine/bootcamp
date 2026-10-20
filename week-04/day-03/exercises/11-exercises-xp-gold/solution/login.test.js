const {test}=require('node:test'),assert=require('node:assert/strict');
process.env.JWT_SECRET='local-test-secret-at-least-thirty-two-characters';
const app=require('./login-app');
test('registration, login, protected profile, role restriction and account lockout',async t=>{
 const server=app.listen(0);await new Promise(resolve=>server.once('listening',resolve));t.after(()=>new Promise(resolve=>server.close(resolve)));
 const base=`http://127.0.0.1:${server.address().port}`;
 const send=(path,body,token)=>fetch(base+path,{method:body?'POST':'GET',headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:body&&JSON.stringify(body)});
 assert.equal((await send('/api/register',{email:'test@example.com',password:'weak'})).status,400);
 const created=await send('/api/register',{email:'test@example.com',password:'StrongPassword123!'});assert.equal(created.status,201);const user=await created.json();assert(!('passwordHash' in user));
 assert.equal((await send('/api/register',{email:'TEST@example.com',password:'StrongPassword123!'})).status,409);
 assert.equal((await send('/api/profile')).status,401);
 const login=await send('/api/login',{email:'test@example.com',password:'StrongPassword123!'});assert.equal(login.status,200);const {token}=await login.json();
 assert.equal((await send('/api/profile',undefined,token)).status,200);
 assert.equal((await send('/api/admin',undefined,token)).status,403);
 assert.equal((await send('/api/profile',undefined,'invalid')).status,401);
 for(let i=0;i<5;i++)assert.equal((await send('/api/login',{email:'test@example.com',password:'wrong'})).status,401);
 assert.equal((await send('/api/login',{email:'test@example.com',password:'StrongPassword123!'})).status,429);
});
