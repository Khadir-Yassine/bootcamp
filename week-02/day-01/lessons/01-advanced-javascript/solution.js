'use strict';
// 1. var permits redeclaration: the second assignment overwrites the first.
var num = 8; var num = 10; console.log(num); // 10.
// 2. Each const message is block-scoped. Returning it outside either block
// raises ReferenceError. Here the error is caught to keep the demonstration runnable.
function brokenCheckAge(age) { if (age < 18) { const message = "Sorry, you're too young."; } else { const message = "Yay! You're old enough!"; } return message; }
try { brokenCheckAge(21); } catch (error) { console.log(error.name); }
const checkAge = age => age < 18 ? "Sorry, you're too young." : "Yay! You're old enough!";
// 3. let makes i inaccessible outside the loop. typeof an undeclared binding
// returns the string 'undefined'; reading i directly would throw ReferenceError.
function numbers() { for (let i = 0; i < 5; i++) console.log(i); console.log(typeof i); }
numbers();
// Follow the exercise's > 2000 boundary literally; this is not historical terminology.
const checkYear = year => year > 2000 ? 'You are in the 21st century' : 'You live in the Middle Age';
console.log(checkAge(21), checkYear(2026));
module.exports = { checkAge, checkYear, numbers };
