'use strict';
// Nested functions close over result: four underscores, /, four apostrophes, \, four underscores.
const landscape = () => {
  let result = '';
  const flat = x => { for (let count = 0; count < x; count++) result += '_'; };
  const mountain = x => { result += '/'; for (let count = 0; count < x; count++) result += "'"; result += '\\'; };
  flat(4); mountain(4); flat(4); return result;
};
const addTo = x => y => x + y;
const addToTen = addTo(10); // The returned closure remembers x = 10.
const curriedSum = a => b => a + b;
const add5 = curriedSum(5);
const compose = (f, g) => a => f(g(a));
const add1 = num => num + 1;
console.log(landscape(), addToTen(3), curriedSum(30)(1), add5(12), compose(add1, add5)(10));
// Results: ____/''''\____, 13, 31, 17, 16. Composition applies g before f.
module.exports = { landscape, addTo, curriedSum, compose };
