"use strict";
function drivingMessage(input){
 if(input===null)return "Cancelled.";
 if(typeof input==="string"&&input.trim()==="")return "Please enter a valid age.";
 const age=Number(input);
 if(!Number.isFinite(age)||age<0)return "Please enter a valid age.";
 if(age<18)return "Sorry, you are too young to drive this car. Powering off";
 if(age===18)return "Congratulations on your first year of driving. Enjoy the ride!";
 return "Powering On. Enjoy the ride!";
}
if(typeof module!=="undefined")module.exports={drivingMessage};
if(typeof require!=="undefined"&&require.main===module){for(const input of [17,18,19])console.log(drivingMessage(input));}
