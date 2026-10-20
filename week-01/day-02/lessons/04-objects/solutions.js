"use strict";
function objectExercise() {
 const user={username:"example-user",password:"example-only-not-a-real-password"};
 const database=[user];
 const newsfeed=[{username:"Alex",timeline:"Learning JavaScript."},{username:"Sam",timeline:"Practicing objects."},{username:"Robin",timeline:"Building a small page."}];
 return {user,database,newsfeed};
}
if(typeof module!=="undefined")module.exports={objectExercise};
if(typeof require!=="undefined"&&require.main===module)console.log(objectExercise());
