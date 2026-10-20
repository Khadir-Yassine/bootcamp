'use strict';
const marioGame = { detail: 'An amazing game!', characters: {
  mario: { description: 'Small and jumpy. Likes princesses.', height: 10, weight: 3, speed: 12 },
  bowser: { description: 'Big and green, Hates princesses.', height: 16, weight: 6, speed: 4 },
  princessPeach: { description: 'Beautiful princess.', height: 12, weight: 2, speed: 2 }
} };
// JSON is text, not another kind of object. Nested objects are serialized recursively.
const compact = JSON.stringify(marioGame);
const pretty = JSON.stringify(marioGame, null, 2);
console.log(compact, pretty);
if (typeof document !== 'undefined') {
  document.querySelector('#query').textContent = JSON.stringify(Object.fromEntries(new URLSearchParams(location.search)), null, 2);
  document.querySelector('#mario').textContent = pretty;
  document.querySelector('#debug').addEventListener('click', () => { debugger; console.log(marioGame, compact, pretty); });
}
if (typeof module !== 'undefined') module.exports = { marioGame, compact, pretty };
