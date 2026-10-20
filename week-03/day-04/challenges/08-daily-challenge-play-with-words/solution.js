'use strict';
const makeAllCaps = words => new Promise((resolve, reject) => {
  if (!Array.isArray(words) || !words.every(word => typeof word === 'string')) reject(new TypeError('Every word must be a string'));
  else resolve(words.map(word => word.toUpperCase()));
});
const sortWords = words => new Promise((resolve, reject) => words.length > 4 ? resolve([...words].sort()) : reject(new Error('More than four words are required')));
const morse = JSON.stringify({ '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..', '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', '-': '-....-', '/': '-..-.', '@': '.--.-.', '(': '-.--.', ')': '-.--.-' });
function toJs(json = morse) {
  return new Promise((resolve, reject) => {
    try { const object = JSON.parse(json); if (!object || typeof object !== 'object' || Array.isArray(object) || !Object.keys(object).length) throw new Error('Morse dictionary is empty or invalid'); resolve(object); } catch (error) { reject(error); }
  });
}
function toMorse(morseJS, text) {
  return new Promise((resolve, reject) => {
    if (text === undefined && typeof prompt !== 'undefined') text = prompt('Enter a word or sentence');
    if (typeof text !== 'string' || !text.trim()) { reject(new Error('Please enter a word or sentence')); return; }
    const translation = [];
    for (const char of text.toLowerCase()) {
      if (/\s/u.test(char)) translation.push('/');
      else if (Object.hasOwn(morseJS, char)) translation.push(morseJS[char]);
      else { reject(new Error(`Unsupported character: ${char}`)); return; }
    }
    resolve(translation);
  });
}
function joinWords(translation) {
  const text = translation.join('\n');
  if (typeof document !== 'undefined') document.querySelector('#morse-result').textContent = text;
  return text;
}
if (typeof document !== 'undefined') {
  document.querySelector('#words-form').onsubmit = event => {
    event.preventDefault();
    makeAllCaps(document.querySelector('#words').value.split(',').map(word => word.trim()))
      .then(sortWords).then(words => { document.querySelector('#word-result').textContent = JSON.stringify(words); })
      .catch(error => { document.querySelector('#word-result').textContent = error.message; });
  };
  document.querySelector('#morse-button').onclick = () => toJs().then(dictionary => toMorse(dictionary)).then(joinWords).catch(error => { document.querySelector('#morse-result').textContent = error.message; });
}
if (typeof module !== 'undefined') module.exports = { makeAllCaps, sortWords, toJs, toMorse, joinWords, morse };
if (typeof require !== 'undefined' && require.main === module) {
  for (const sample of [[1, 'pear', 'banana'], ['apple', 'pear', 'banana'], ['apple', 'pear', 'banana', 'melon', 'kiwi']]) makeAllCaps(sample).then(sortWords).then(console.log).catch(error => console.log(error.message));
  toJs().then(dictionary => toMorse(dictionary, 'Hello')).then(joinWords).then(console.log).catch(console.error);
}
