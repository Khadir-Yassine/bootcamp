'use strict';
const printFullName = ({ first, last }) => `Your full name is ${first} ${last}`;
function keysAndValues(object) {
  const keys = Object.keys(object).sort();
  return [keys, keys.map(key => object[key])];
}
class Counter { constructor() { this.count = 0; } increment() { this.count++; } }
const counterOne = new Counter(); counterOne.increment(); counterOne.increment();
const counterTwo = counterOne; counterTwo.increment();
console.log(printFullName({ first: 'Elie', last: 'Schoppik' }), keysAndValues({ c: 3, a: 1, b: 2 }), counterOne.count);
// 3: both identifiers refer to the same instance, not independent counters.
module.exports = { printFullName, keysAndValues, Counter };
