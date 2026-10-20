"use strict";
function oddOrEven(){const lines=[];for(let i=0;i<=15;i++)lines.push(`${i} is ${i%2===0?"even":"odd"}`);return lines;}
function capitalizeNames(names=["john","sarah",23,"Rudolf",34]){
 const results=[];
 for(const name of names){if(typeof name!=="string")continue;results.push(name.length?name[0].toUpperCase()+name.slice(1):name);}
 return results;
}
function beforeFirstNonString(names=["john","sarah",23,"Rudolf",34]){
 const results=[];for(const name of names){if(typeof name!=="string")break;results.push(name);}return results;
}
if(typeof module!=="undefined")module.exports={oddOrEven,capitalizeNames,beforeFirstNonString};
if(typeof require!=="undefined"&&require.main===module){oddOrEven().forEach(x=>console.log(x));console.log(capitalizeNames());console.log(beforeFirstNonString());}
