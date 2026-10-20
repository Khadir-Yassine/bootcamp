'use strict';
const colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];
colors.forEach((color, i) => console.log(`${i + 1}# choice is ${color}.`));
console.log(colors.some(color => color === 'Violet') ? 'Yeah' : 'No...');
const ordinal = ['th', 'st', 'nd', 'rd'];
const suffix = n => n % 100 >= 11 && n % 100 <= 13 ? ordinal[0] : (ordinal[n % 10] || ordinal[0]);
colors.forEach((color, i) => console.log(`${i + 1}${suffix(i + 1)} choice is ${color}.`));
// Spread inserts each iterable item; sparse holes become explicit undefined entries.
console.log(['bread', ...['carrot', 'potato'], 'chicken', ...['apple', 'orange']]);
console.log([...'USA'], [...[,,]]);
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
const welcomeStudents = users.map(({ firstName }) => `Hello ${firstName}`);
const residents = users.filter(({ role }) => role === 'Full Stack Resident');
const residentLastNames = users.filter(({ role }) => role === 'Full Stack Resident').map(({ lastName }) => lastName);
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const story = epic.reduce((sentence, word) => sentence ? `${sentence} ${word}` : word, '');
const students = [{ name: 'Ray', course: 'Computer Science', isPassed: true }, { name: 'Liam', course: 'Computer Science', isPassed: false }, { name: 'Jenner', course: 'Information Technology', isPassed: true }, { name: 'Marco', course: 'Robotics', isPassed: true }, { name: 'Kimberly', course: 'Artificial Intelligence', isPassed: false }, { name: 'Jamie', course: 'Big Data', isPassed: false }];
const passed = students.filter(student => student.isPassed);
students.filter(student => student.isPassed).forEach(({ name, course }) => console.log(`Good job ${name}, you passed the course in ${course}`));
console.log({ welcomeStudents, residents, residentLastNames, story, passed });
module.exports = { colors, suffix, users, welcomeStudents, residents, residentLastNames, story, passed };
