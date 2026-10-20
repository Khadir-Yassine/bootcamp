const {test}=require('node:test'),assert=require('node:assert/strict'),{createApp}=require('./app');
test('restaurant API contracts, validation and missing IDs (in-memory model double)',async t=>{
 let rows=[],next=1;const model={getAllItems:async()=>rows,getItemByName:async name=>rows.find(r=>r.item_name===name),createItem:async(name,price)=>{const row={item_id:next++,item_name:name,item_price:price};rows.push(row);return row;},updateItem:async(id,name,price)=>{const row=rows.find(r=>r.item_id===id);if(row)Object.assign(row,{item_name:name,item_price:price});return row;},deleteItem:async id=>{const row=rows.find(r=>r.item_id===id);rows=rows.filter(r=>r.item_id!==id);return row;}};
 const server=createApp(model).listen(0);await new Promise(r=>server.once('listening',r));t.after(()=>new Promise(r=>server.close(r)));const base=`http://127.0.0.1:${server.address().port}/api/menu`;
 const send=(suffix='',method='GET',body)=>fetch(base+suffix,{method,headers:{'content-type':'application/json'},body:body&&JSON.stringify(body)});
 assert.equal((await send('','POST',{name:'Burger',price:-1})).status,400);
 const created=await send('','POST',{name:'Burger',price:35});assert.equal(created.status,201);const item=await created.json();
 assert.equal((await (await send('/Burger')).json()).item_price,35);
 assert.equal((await send('/'+item.item_id,'PUT',{name:'Veggie Burger',price:37})).status,200);
 assert.equal((await send('/abc','DELETE')).status,400);
 assert.equal((await send('/'+item.item_id,'DELETE')).status,204);
 assert.equal((await send('/Burger')).status,404);
 assert.equal((await send('/'+item.item_id,'DELETE')).status,404);
});
