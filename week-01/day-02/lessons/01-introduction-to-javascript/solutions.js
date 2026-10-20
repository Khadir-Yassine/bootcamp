"use strict";
function addressExercise() {
 const addressNumber=55,addressStreet="av Bosquet",country="France";
 const globalAddress="I live in "+addressNumber+" "+addressStreet+", in "+country;
 return {addressNumber,addressStreet,country,globalAddress};
}
function ageExercise(birthYear=2000,futureYear=2030) {
 const birthdayAge=futureYear-birthYear;
 return {possibleAges:[birthdayAge-1,birthdayAge],message:`I will be ${birthdayAge} in ${futureYear}`};
}
if(typeof module!=="undefined")module.exports={addressExercise,ageExercise};
if(typeof require!=="undefined"&&require.main===module){console.log(addressExercise().globalAddress);console.log(ageExercise().message);console.log(ageExercise().possibleAges);}
