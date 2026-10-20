'use strict';
const calculator = (a, b, operator) => operator === '+' ? a + b : operator === '-' ? a - b : operator === '*' ? a * b : operator === '/' ? a / b : 'Invalid operator';
console.log(calculator(8, 2, '+'), calculator(8, 2, '-'), calculator(8, 2, '*'), calculator(8, 2, '/'), calculator(8, 2, '%'));
// JavaScript division by zero produces Infinity (or NaN for 0/0).
module.exports = { calculator };
