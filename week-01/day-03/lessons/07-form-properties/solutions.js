"use strict";
function setupSchoolSelect(doc,notify=()=>{}){
 const select=doc.getElementById('school-type'),secondOptionValue=select.options[1].value;
 const work=doc.createElement('option');work.value='Work';work.textContent='Work';select.appendChild(work);
 const primary=doc.createElement('option');primary.value='Primary School';primary.textContent='Primary School';select.prepend(primary);
 // Three equivalent selection mechanisms, all ending on College.
 select.value='college';select.selectedIndex=Array.from(select.options).findIndex(option=>option.value==='college');select.options[select.selectedIndex].selected=true;
 doc.querySelector('#choice').addEventListener('click',()=>notify(select.options[select.selectedIndex].text));
 return {secondOptionValue,selectedValue:select.value,optionValues:Array.from(select.options,option=>option.value)};
}
if(typeof module!=='undefined')module.exports={setupSchoolSelect};
if(typeof document!=='undefined')document.querySelector('#output').textContent=JSON.stringify(setupSchoolSelect(document,message=>window.alert(message)),null,2);
