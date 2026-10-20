"use strict";
function onlyLetters(text){return text.replace(/[^\p{L}]/gu,'');}
function filterInput(input){const position=input.selectionStart??input.value.length,cleanBefore=onlyLetters(input.value.slice(0,position));input.value=onlyLetters(input.value);input.setSelectionRange(cleanBefore.length,cleanBefore.length);}
function setup(doc){const input=doc.querySelector('#letters');input.addEventListener('input',event=>{if(!event.isComposing)filterInput(input);});input.addEventListener('compositionend',()=>filterInput(input));}
if(typeof module!=='undefined')module.exports={onlyLetters,filterInput,setup};if(typeof document!=='undefined')setup(document);
