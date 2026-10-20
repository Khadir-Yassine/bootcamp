'use strict';
const person = { name: 'John Doe', age: 25, location: { country: 'Canada', city: 'Vancouver', coordinates: [49.2827, -123.1207] } };
const { name, location: { country, city, coordinates: [lat, lng] } } = person;
const location = `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`;
function displayStudentInfo(objUser) { const { first, last } = objUser; return `Your full name is ${first} ${last}`; }
const users = { user1: 18273, user2: 92833, user3: 90315 };
const entries = Object.entries(users);
const doubledIds = entries.map(([user, id]) => [user, id * 2]);
class Person { constructor(name) { this.name = name; } }
console.log(typeof new Person('John')); // object: an instance is still an object.
class Dog { constructor(name) { this.name = name; } }
// Option 2 is correct: super(name) initializes this before this.size is assigned.
// 1 and 4 access this before super; 3 uses an undeclared name (or an unrelated global).
class Labrador extends Dog { constructor(name, size) { super(name); this.size = size; } }
console.log([2] === [2], {} === {}); // false, false: distinct object identities.
const object1 = { number: 5 }, object2 = object1, object3 = object2, object4 = { number: 5 };
object1.number = 4;
console.log(object2.number, object3.number, object4.number); // 4, 4, 5.
class Animal { constructor(name, type, color) { Object.assign(this, { name, type, color }); } }
class Mammal extends Animal {
  sound(noise) { return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`; }
}
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(location, displayStudentInfo({ first: 'Elie', last: 'Schoppik' }), entries, doubledIds, new Labrador('Max', 'large'), farmerCow.sound('Moooo'));
module.exports = { location, displayStudentInfo, entries, doubledIds, Person, Dog, Labrador, Animal, Mammal, farmerCow };
