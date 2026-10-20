"use strict";
function parentAges(myAge,log=console.log){const mother=myAge*2,father=mother*1.2;log(`Mother: ${mother}`);log(`Father: ${father}`);return {mother,father};}
function motherAge(myAge){return myAge*2;}
if(typeof module!=='undefined')module.exports={parentAges,motherAge};
if(typeof document!=='undefined'){const lines=[];parentAges(20,x=>lines.push(x));const result=motherAge(20);console.log(result);lines.push(`Returned mother age: ${result}`);document.querySelector('#output').textContent=lines.join('\n');}
if(typeof require!=='undefined'&&require.main===module){parentAges(20);const result=motherAge(20);console.log(result);}
