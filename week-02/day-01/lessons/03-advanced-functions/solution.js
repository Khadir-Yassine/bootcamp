'use strict';
function add() {
  let counter = 0;
  function plus() { counter += 1; console.log(counter); }
  plus(); // 1: plus reads and changes the enclosing counter.
}
add();
const createCounter = () => { let counter = 0; return () => ++counter; };
const persistentAdd = (function () { let counter = 0; return function calculus() { return ++counter; }; })();
console.log(persistentAdd(), persistentAdd(), persistentAdd()); // 1, 2, 3: one retained lexical environment.
const g = n => n + 1, f = n => n * 2, h = x => f(g(x));
console.log(h(20)); // 42: 20 + 1, then multiply by 2.
module.exports = { add, createCounter, h };
