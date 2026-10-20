const {test}=require('node:test'),assert=require('node:assert/strict'),app=require('./app');
test('emoji game generates valid questions, evaluates server answers and ranks players',async t=>{
 const server=app.listen(0);await new Promise(resolve=>server.once('listening',resolve));t.after(()=>new Promise(resolve=>server.close(resolve)));
 const base=`http://127.0.0.1:${server.address().port}`,api=async(path,body)=>{const response=await fetch(base+'/api/'+path,{method:body?'POST':'GET',headers:{'Content-Type':'application/json'},body:body&&JSON.stringify(body)});return {status:response.status,data:await response.json()};};
 const state=(await api('start',{name:'Emoji player'})).data;
 assert.equal(new Set(state.question.options).size,3);assert(!('answer' in state.question));
 assert.equal((await api('answer',{id:state.id,answer:'not an option'})).status,400);
 const choice=state.question.options[0],result=(await api('answer',{id:state.id,answer:choice})).data;
 assert.equal(result.correct,choice===result.expected);assert.equal(result.score,result.correct?1:0);assert(result.question);
 const leaders=(await api('leaderboard')).data;assert(leaders.some(row=>row.name==='Emoji player'&&row.score===result.score));
});
