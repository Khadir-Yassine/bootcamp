"use strict";
const calculator=(first,second,operator)=>operator==='+'?first+second:operator==='-'?first-second:operator==='*'?first*second:operator==='/'?first/second:'Invalid operator';
if(typeof module!=='undefined')module.exports={calculator};
if(typeof document!=='undefined')document.querySelector('#calculator').addEventListener('submit',event=>{event.preventDefault();const a=Number(document.querySelector('#first').value),b=Number(document.querySelector('#second').value),operator=document.querySelector('#operator').value;document.querySelector('#result').textContent=String(calculator(a,b,operator));});
if(typeof require!=='undefined'&&require.main===module)console.log(calculator(8,2,'+'),calculator(8,2,'-'),calculator(8,2,'*'),calculator(8,2,'/'),calculator(8,2,'?'));
