"use strict";
let allBoldItems=[];
function sphereVolume(radius){if(!Number.isFinite(radius)||radius<0)throw new RangeError('Radius must be a nonnegative finite number.');return 4/3*Math.PI*radius**3;}
function nameValues(first,last){const values=[first.trim(),last.trim()];if(values.some(value=>value===''))throw new Error('Both names are required.');return values;}
function setupArticle(doc,random=Math.random){
 const article=doc.querySelector('article'),h1=article.querySelector('h1'),h2=article.querySelector('h2'),h3=article.querySelector('h3');console.log(h1);article.querySelector('p:last-of-type').remove();
 h2.addEventListener('click',()=>h2.style.backgroundColor='red');h3.addEventListener('click',()=>h3.style.display='none');
 doc.querySelector('#bold-article').addEventListener('click',()=>article.querySelectorAll('p').forEach(p=>p.style.fontWeight='bold'));
 h1.addEventListener('mouseover',()=>h1.style.fontSize=`${Math.floor(random()*101)}px`);
 const second=article.querySelectorAll('p')[1];second.style.transition='opacity 500ms';second.addEventListener('mouseover',()=>second.style.opacity='0');
}
function setupNames(doc){
 const form=doc.querySelector('#names');console.log(form);console.log(doc.getElementById('fname'),doc.getElementById('lname'));console.log(form.elements.namedItem('firstname'),form.elements.namedItem('lastname'));
 form.addEventListener('submit',event=>{event.preventDefault();const list=doc.querySelector('.usersAnswer'),status=doc.querySelector('#name-error');list.replaceChildren();try{for(const value of nameValues(form.elements.firstname.value,form.elements.lastname.value)){const li=doc.createElement('li');li.textContent=value;list.appendChild(li);}status.textContent='';}catch(error){status.textContent=error.message;}});
}
function getBoldItems(doc=document){allBoldItems=doc.querySelectorAll('#sentence strong');return allBoldItems;}
function highlight(){for(const item of allBoldItems)item.style.color='blue';}
function returnItemsToDefault(){for(const item of allBoldItems)item.style.color='black';}
function setupSentence(doc){getBoldItems(doc);const sentence=doc.querySelector('#sentence');sentence.addEventListener('mouseover',highlight);sentence.addEventListener('mouseout',returnItemsToDefault);}
function setupSphere(doc){doc.querySelector('#MyForm').addEventListener('submit',event=>{event.preventDefault();const raw=doc.querySelector('#radius').value,result=doc.querySelector('#volume'),error=doc.querySelector('#volume-error');try{if(raw.trim()==='')throw new Error('A radius is required.');result.value=sphereVolume(Number(raw)).toFixed(3);error.textContent='';}catch(problem){result.value='';error.textContent=problem.message;}});}
if(typeof module!=='undefined')module.exports={sphereVolume,nameValues,setupArticle,setupNames,getBoldItems,highlight,returnItemsToDefault,setupSentence,setupSphere};
if(typeof document!=='undefined'){setupArticle(document);setupNames(document);setupSentence(document);setupSphere(document);}
