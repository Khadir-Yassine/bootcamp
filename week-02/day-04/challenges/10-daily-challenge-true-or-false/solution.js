'use strict';
const allTruthy = (...values) => values.every(Boolean);
console.log(allTruthy(true, true, true), allTruthy(true, false, true), allTruthy(5, 4, 3, 2, 1, 0));
// No arguments returns true: there is no false element, matching every's empty-array behavior.
module.exports = { allTruthy };
