'use strict';
const doubled = [1, 2, 3].map(num => typeof num === 'number' ? num * 2 : undefined);
// The initial accumulator [1,2] is retained before the two nested arrays are concatenated.
const flattened = [[0, 1], [2, 3]].reduce((acc, cur) => acc.concat(cur), [1, 2]);
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i); // i is the zero-based index: 0 through 5, not the value.
  // In a browser alert(num) would show each original value. Console output keeps this runnable in Node.
  return num * 2;
});
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const shallow = array.flat(2);
const greeting = [['Hello', 'young', 'grasshopper!'], ['you', 'are'], ['learning', 'fast!']];
const phrases = greeting.map(words => words.join(' '));
const sentence = phrases.join(' ');
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log({ doubled, flattened, newArray, shallow, phrases, sentence, freed: trapped.flat(Infinity) });
module.exports = { doubled, flattened, newArray, shallow, phrases, sentence };
