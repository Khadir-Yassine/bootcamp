'use strict';
const numbers = [10, 11, 12, 15, 20];
const evens = [];
numbers.forEach(number => { if (number % 2 === 0) { evens.push(number); console.log(number); } });
const someStartsH = ['wow', 'hey', 'bye'].some(word => word.startsWith('h'));
const allStartH = ['hello', 'hey', 'hola'].every(word => word.startsWith('h'));
console.log(someStartsH, allStartH); // true, true.
module.exports = { evens, someStartsH, allStartH };
