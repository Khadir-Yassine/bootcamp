'use strict';
const c = { greeting: 'Hey!' };
const d = c;
c.greeting = 'Hello';
console.log(d.greeting); // Hello: d and c contain references to the same object.
module.exports = { c, d };
