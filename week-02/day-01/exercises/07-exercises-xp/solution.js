'use strict';
// Exercise 1: each independent snippet has its own lexical environment.
function scopePredictions() {
  // #1: 3. Reassigning a const here would throw TypeError.
  let local = 5; if (local > 1) local = 3;
  // #2: 0 then 5. A const global cannot be reassigned by funcTwo.
  let outer = 0; const before = outer; outer = 5;
  // #3: in a classic browser script without an existing lexical a,
  // window.a = 'hello' makes bare a resolve to 'hello'. If the earlier
  // top-level let a still exists, that binding shadows window.a instead.
  // #4: 'test'; #5: 5 inside, 2 outside. const preserves this shadowing.
  return { one: local, two: [before, outer], three: 'hello (isolated classic script)', four: 'test', five: [5, 2] };
}
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
const isString = value => typeof value === 'string';
const sum = (a, b) => a + b;
function kgToGramsDeclaration(kg) { return kg * 1000; }
// Declarations are hoisted with their function; expressions become usable after initialization.
const kgToGramsExpression = function (kg) { return kg * 1000; };
const kgToGramsArrow = kg => kg * 1000;
function makeJuicePartOne(size) {
  function addIngredients(first, second, third) {
    return `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
  }
  return addIngredients('apple', 'orange', 'ginger');
}
function makeJuice(size) {
  const ingredients = [];
  const addIngredients = (a, b, c) => ingredients.push(a, b, c);
  const displayJuice = () => `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
  addIngredients('apple', 'orange', 'ginger');
  addIngredients('mango', 'lemon', 'mint');
  return displayJuice();
}
if (typeof document !== 'undefined') {
  // Exercises 6 and 7 deliberately use self-invoking functions.
  (function (children, partner, location, job) {
    document.querySelector('#fortune').textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  })(2, 'Alex', 'Casablanca', 'developer');
  (function (name) {
    const profile = document.createElement('div');
    const avatar = document.createElement('img');
    avatar.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><rect width="60" height="60" rx="30" fill="#153e35"/><text x="30" y="41" text-anchor="middle" font-size="34" fill="white">J</text></svg>');
    avatar.alt = `${name}'s profile picture`; avatar.width = 44;
    profile.append(avatar, document.createTextNode(` Welcome, ${name}`));
    document.querySelector('nav').append(profile);
  })('John');
  document.querySelector('#juice-one').textContent = makeJuicePartOne('medium');
  document.querySelector('#juice-two').textContent = makeJuice('large');
}
if (typeof module !== 'undefined') module.exports = { scopePredictions, winBattle, experiencePoints, isString, sum, kgToGramsDeclaration, kgToGramsExpression, kgToGramsArrow, makeJuicePartOne, makeJuice };
console.log(scopePredictions(), experiencePoints, isString('hello'), isString([1, 2]), sum(2, 3));
console.log(kgToGramsDeclaration(2), kgToGramsExpression(3), kgToGramsArrow(4));
