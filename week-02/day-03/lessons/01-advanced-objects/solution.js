'use strict';
const myObj = { name: 'John', lastName: 'Doe', age: 25, friends: ['Mark', 'Lucie', 'Ana'] };
console.log(Object.keys(myObj).length, Object.values(myObj).length); // 4 keys and 4 values.
Object.entries(myObj).forEach(([key, value], index) => console.log(`The ${index + 1}# key is : ${key} The ${index + 1}# value is : ${value}`));
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin); // {admin:true,name:'Lydia',age:21}; a new shallow object.
module.exports = { myObj, admin };
