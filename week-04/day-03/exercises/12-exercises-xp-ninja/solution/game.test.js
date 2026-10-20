const {test}=require('node:test'),assert=require('node:assert/strict'),app=require('./app');
test('quiz scores correct answers, ends after last question and isolates players',async t=>{
 const server=app.listen(0);await new Promise(resolve=>server.once('listening',resolve));t.after(()=>new Promise(resolve=>server.close(resolve)));
 const base=`http://127.0.0.1:${server.address().port}`,api=async(path,body)=>{const response=await fetch(base+'/api/'+path,{method:body?'POST':'GET',headers:{'Content-Type':'application/json'},body:body&&JSON.stringify(body)});return {status:response.status,data:await response.json()};};
 const one=(await api('start',{name:'One'})).data,two=(await api('start',{name:'Two'})).data;
 assert(!('answer' in one.question));assert.equal((await api('answer',{id:one.id,answer:'invalid'})).status,400);
 let result;for(const answer of ['POST','404','JSON.parse'])result=(await api('answer',{id:one.id,answer})).data;
 assert.equal(result.score,3);assert.equal(result.question,null);
 assert.equal((await api('answer',{id:one.id,answer:'POST'})).status,409);
 assert.equal((await api('answer',{id:two.id,answer:'GET'})).data.score,0);
 const leaders=(await api('leaderboard')).data;assert.equal(leaders[0].name,'One');assert.equal(leaders[0].score,3);
 assert.equal((await api('answer',{id:'missing',answer:'POST'})).status,404);
});
