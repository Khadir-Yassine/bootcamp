"use strict";
function insertRow(doc=document){const table=doc.getElementById('sampleTable'),number=table.rows.length+1,row=table.insertRow();for(let column=1;column<=2;column++)row.insertCell().textContent=`Row${number} cell${column}`;return row;}
function setupEvents(doc){
 doc.querySelector('#insert').addEventListener('click',()=>insertRow(doc));
 const style=doc.querySelector('#jsstyle');style.addEventListener('mouseover',()=>style.style.backgroundColor='#d76032');style.addEventListener('mouseout',()=>style.style.backgroundColor='');style.addEventListener('click',()=>style.style.fontWeight=style.style.fontWeight==='bold'?'normal':'bold');
 const log=doc.querySelector('#events'),wrapper=doc.querySelector('#wrapper'),button=doc.querySelector('#propagation');
 wrapper.addEventListener('click',()=>log.textContent+='Parent click\n');
 button.addEventListener('click',event=>{log.textContent+='Button click\n';button.style.borderRadius='24px';if(doc.querySelector('#stop').checked)event.stopPropagation();});
 button.addEventListener('mouseover',()=>button.style.transform='scale(1.04)');button.addEventListener('mouseout',()=>button.style.transform='');
}
if(typeof module!=='undefined')module.exports={insertRow,setupEvents};if(typeof document!=='undefined')setupEvents(document);
