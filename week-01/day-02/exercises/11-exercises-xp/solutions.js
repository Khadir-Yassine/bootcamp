"use strict";

function peopleExercise(myName = "Yassine") {
  const people = ["Greg", "Mary", "Devon", "James"];
  people.shift();
  people[people.indexOf("James")] = "Jason";
  people.push(myName);
  const maryIndex = people.indexOf("Mary");
  const copy = people.slice(1, -1);
  const fooIndex = people.indexOf("Foo");
  const last = people[people.length - 1];
  const allPeople = [];
  for (const person of people) allPeople.push(person);
  const throughDevon = [];
  for (const person of people) {
    throughDevon.push(person);
    if (person === "Devon") break;
  }
  return { people, maryIndex, copy, fooIndex, last, allPeople, throughDevon };
}

function ordinal(n) {
  const lastTwo = n % 100;
  const suffixes = ["th", "st", "nd", "rd"];
  const suffix = lastTwo >= 11 && lastTwo <= 13 ? "th" : suffixes[n % 10] || "th";
  return `${n}${suffix}`;
}

function favoriteColors(colors = ["blue", "red", "green", "purple", "orange"]) {
  const ordinary = [], bonus = [];
  for (let i = 0; i < colors.length; i++) {
    ordinary.push(`My #${i + 1} choice is ${colors[i]}`);
    bonus.push(`My ${ordinal(i + 1)} choice is ${colors[i]}`);
  }
  return { ordinary, bonus };
}

function askNumberAtLeastTen(ask, log = () => {}) {
  let number;
  do {
    const answer = ask("Enter a number greater than or equal to 10:");
    log(`prompt() returned ${typeof answer}`);
    if (answer === null) return null;
    number = answer.trim() === "" ? NaN : Number(answer);
  } while (!Number.isFinite(number) || number < 10);
  return number;
}

function buildingExercise() {
  const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: { firstFloor: 3, secondFloor: 4, thirdFloor: 9, fourthFloor: 2 },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: { sarah: [3, 990], dan: [4, 1000], david: [1, 500] }
  };
  const floors = building.numberOfFloors;
  const apartments = [building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor];
  const secondTenant = building.nameOfTenants[1];
  const rooms = building.numberOfRoomsAndRent.dan[0];
  const rents = building.numberOfRoomsAndRent;
  if (rents.sarah[1] + rents.david[1] > rents.dan[1]) rents.dan[1] = 1200;
  return { building, floors, apartments, secondTenant, rooms };
}

function familyExercise(family = { parent: "Alex", sibling: "Sam", city: "Casablanca" }) {
  const keys = [], values = [];
  for (const key in family) if (Object.hasOwn(family, key)) keys.push(key);
  for (const key in family) if (Object.hasOwn(family, key)) values.push(family[key]);
  return { keys, values };
}

function rudolfExercise() {
  const details = { my: "name", is: "Rudolf", the: "reindeer" };
  const words = [];
  for (const key in details) words.push(key, details[key]);
  return words.join(" ");
}

function secretGroup(names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]) {
  return names.map(name => name[0]).sort().join("");
}

const api = { peopleExercise, ordinal, favoriteColors, askNumberAtLeastTen, buildingExercise,
  familyExercise, rudolfExercise, secretGroup };
if (typeof module !== "undefined") module.exports = api;
if (typeof require !== "undefined" && require.main === module) {
  console.log("Exercise 1:", peopleExercise());
  const colors = favoriteColors();
  colors.ordinary.forEach(line => console.log(line));
  colors.bonus.forEach(line => console.log(line));
  const answers = ["2", "hello", "10"];
  console.log("Exercise 3:", askNumberAtLeastTen(() => answers.shift(), console.log));
  console.log("Exercise 4:", buildingExercise());
  console.log("Exercise 5:", familyExercise());
  console.log("Exercise 6:", rudolfExercise());
  console.log("Exercise 7:", secretGroup());
}
