'use strict';
const person = { name: 'Lydia', age: 21 };
for (const item in person) console.log(item); // name, then age: for...in enumerates keys.
module.exports = { person };
