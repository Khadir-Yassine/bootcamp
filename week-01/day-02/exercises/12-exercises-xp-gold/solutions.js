"use strict";
function divisibleByThree(numbers = [123, 8409, 100053, 333333333, 7]) {
  const results = [];
  for (const number of numbers) results.push(number % 3 === 0);
  return results;
}
function attendance(input) {
  const guestList = { randy: "Germany", karla: "France", wendy: "Japan", norman: "England", sam: "Argentina" };
  if (input === null) return "Hi! I'm a guest.";
  const name = input.trim().toLowerCase();
  if (Object.hasOwn(guestList, name)) return `Hi! I'm ${name}, and I'm from ${guestList[name]}.`;
  return "Hi! I'm a guest.";
}
function analyzeAges(age = [20, 5, 12, 43, 98, 55]) {
  if (age.length === 0) throw new RangeError("At least one age is required.");
  let sum = 0, highest = age[0];
  for (let i = 0; i < age.length; i++) {
    sum += age[i];
    if (age[i] > highest) highest = age[i];
  }
  return { sum, highest };
}
if (typeof module !== "undefined") module.exports = { divisibleByThree, attendance, analyzeAges };
if (typeof require !== "undefined" && require.main === module) {
  for (const result of divisibleByThree()) console.log(result);
  console.log(attendance("randy"));
  const { sum, highest } = analyzeAges(); console.log(sum); console.log(highest);
}
