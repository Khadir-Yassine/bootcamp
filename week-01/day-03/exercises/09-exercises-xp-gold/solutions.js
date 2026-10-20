"use strict";
function isBlank(text){return text.trim().length===0;}
function abbrevName(name){const parts=name.trim().split(/\s+/);return parts.length>1?`${parts[0]} ${parts[parts.length-1][0]}.`:parts[0];}
function swapCase(text){return Array.from(text,char=>char===char.toUpperCase()?char.toLowerCase():char.toUpperCase()).join("");}
function isOmnipresent(arrays,value){return arrays.every(array=>array.includes(value));}
function colorDiagonal(table){for(let i=0;i<table.rows.length;i++){if(table.rows[i].cells[i])table.rows[i].cells[i].style.backgroundColor="red";}}
if(typeof module!=="undefined")module.exports={isBlank,abbrevName,swapCase,isOmnipresent,colorDiagonal};
if(typeof require!=="undefined"&&require.main===module){console.log(isBlank(''));console.log(isBlank('abc'));console.log(abbrevName('Robin Singh'));console.log(swapCase('The Quick Brown Fox'));console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]],1));}
