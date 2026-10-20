const {test}=require('node:test'),assert=require('node:assert/strict');
const {createApp}=require('./crud');
test('CRUD handles validation, IDs, creation, updates, deletion and search',async t=>{
 const server=createApp().listen(0);await new Promise(resolve=>server.once('listening',resolve));t.after(()=>new Promise(resolve=>server.close(resolve)));
 const url=`http://127.0.0.1:${server.address().port}`,send=(path,method='GET',body)=>fetch(url+path,{method,headers:{'content-type':'application/json'},body:body&&JSON.stringify(body)});
 assert.equal((await send('/api/posts','POST',{})).status,400);
 const created=await send('/api/posts','POST',{title:'Express',content:'Testing'});assert.equal(created.status,201);const post=await created.json();
 assert.equal((await send('/api/posts/'+post.id)).status,200);assert.equal((await (await send('/api/search?title=express')).json()).length,1);
 assert.equal((await send('/api/posts/'+post.id,'PUT',{title:'Updated',content:'New'})).status,200);
 assert.equal((await send('/api/posts/'+post.id,'DELETE')).status,204);assert.equal((await send('/api/posts/'+post.id)).status,404);
 assert.equal((await send('/api/posts/nope')).status,400);assert.equal((await send('/unknown')).status,404);
});
