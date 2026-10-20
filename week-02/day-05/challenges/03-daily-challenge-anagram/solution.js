'use strict';
const normalize = text => [...text.normalize('NFC').toLocaleLowerCase('en').replace(/\s/gu, '')].sort().join('');
const isAnagram = (first, second) => normalize(first) === normalize(second);
// Ignore case and all whitespace. Punctuation remains significant; letters are not discarded.
console.log(isAnagram('Astronomer', 'Moon starer'), isAnagram('School master', 'The classroom'), isAnagram('The Morse Code', 'Here come dots'));
if (typeof module !== 'undefined') module.exports = { normalize, isAnagram };
