"use strict";
function evenNumbersToRandom(random=Math.random){const maximum=Math.floor(random()*100)+1;const numbers=[];for(let n=0;n<=maximum;n+=2)numbers.push(n);return {maximum,numbers};}
function capitalize(text){let even="",odd="";for(let i=0;i<text.length;i++){even+=i%2===0?text[i].toUpperCase():text[i];odd+=i%2===1?text[i].toUpperCase():text[i];}return [even,odd];}
function isPalindrome(text){const normalized=text.toLowerCase().replace(/[^a-z0-9]/g,"");return normalized===Array.from(normalized).reverse().join("");}
function biggestNumberInArray(values){let biggest;for(const value of values){if(typeof value==="number"&&!Number.isNaN(value)&&(biggest===undefined||value>biggest))biggest=value;}return biggest===undefined?0:biggest;}
function uniqueElements(values){return [...new Set(values)];}
function calendarMatrix(year,month){
 if(!Number.isInteger(year)||year<1||!Number.isInteger(month)||month<1||month>12)throw new RangeError("Use a positive year and a month from 1 to 12.");
 const first=new Date(0);first.setUTCHours(0,0,0,0);first.setUTCFullYear(year,month-1,1);
 const next=new Date(first);next.setUTCMonth(month);next.setUTCDate(0);
 const days=next.getUTCDate(),offset=(first.getUTCDay()+6)%7,rows=[];
 for(let slot=0;slot<offset+days;slot++){const row=Math.floor(slot/7);if(!rows[row])rows[row]=Array(7).fill(null);if(slot>=offset)rows[row][slot%7]=slot-offset+1;}
 return rows;
}
function createCalendar(year,month,doc=document){
 const table=doc.createElement("table"),caption=doc.createElement("caption"),head=doc.createElement("thead"),header=doc.createElement("tr"),body=doc.createElement("tbody");caption.textContent=`${year}-${String(month).padStart(2,'0')}`;table.appendChild(caption);
 for(const name of ["MO","TU","WE","TH","FR","SA","SU"]){const th=doc.createElement("th");th.scope="col";th.textContent=name;header.appendChild(th);}head.appendChild(header);table.appendChild(head);
 for(const week of calendarMatrix(year,month)){const tr=doc.createElement("tr");for(const day of week){const td=doc.createElement("td");td.textContent=day===null?"":String(day);tr.appendChild(td);}body.appendChild(tr);}table.appendChild(body);return table;
}
if(typeof module!=="undefined")module.exports={evenNumbersToRandom,capitalize,isPalindrome,biggestNumberInArray,uniqueElements,calendarMatrix,createCalendar};
if(typeof require!=="undefined"&&require.main===module){console.log(evenNumbersToRandom());console.log(capitalize('abcdef'));console.log(isPalindrome('madam'));console.log(biggestNumberInArray([-1,0,3,100,99,2,99]));console.log(uniqueElements([1,2,3,3,3,3,4,5]));console.table(calendarMatrix(2012,9));}
