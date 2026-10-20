"use strict";
function createPerson(fullName, mass, height) {
  if (!Number.isFinite(mass) || !Number.isFinite(height) || mass <= 0 || height <= 0)
    throw new RangeError("Mass and height must be positive finite numbers.");
  return { fullName, mass, height, bmi() { return this.mass / (this.height * this.height); } };
}
function compareBMI(first, second) {
  const a = first.bmi(), b = second.bmi();
  if (a === b) return "Both people have the same BMI.";
  return `${a > b ? first.fullName : second.fullName} has the larger BMI.`;
}
function reportResult(average) {
  return average >= 65 ? "You passed." : "You failed and must repeat the course.";
}
function findAvg(gradesList, log = console.log) {
  if (!Array.isArray(gradesList) || gradesList.length === 0 || gradesList.some(n => !Number.isFinite(n)))
    throw new TypeError("Provide a non-empty array of finite numeric grades.");
  let sum = 0;
  for (const grade of gradesList) sum += grade;
  const average = sum / gradesList.length;
  const message = reportResult(average);
  log(`Average: ${average}`); log(message);
  return { average, message };
}
module.exports = { createPerson, compareBMI, reportResult, findAvg };
if (require.main === module) {
  console.log(compareBMI(createPerson("Alex Example", 80, 1.8), createPerson("Sam Example", 65, 1.7)));
  findAvg([80, 70, 90]);
}
