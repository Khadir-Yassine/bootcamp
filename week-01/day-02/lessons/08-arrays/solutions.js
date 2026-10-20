"use strict";
function petsExercise(){const pets=["cat","dog","fish","rabbit","cow"];const dog=pets[1];pets.push("horse");pets.splice(pets.indexOf("rabbit"),1);return {dog,pets,length:pets.length};}
module.exports={petsExercise};if(require.main===module){const result=petsExercise();console.log(result.dog);console.log(result.pets);console.log(result.length);}
