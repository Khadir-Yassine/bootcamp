'use strict';
function compareToTen(num) { return new Promise((resolve, reject) => num <= 10 ? resolve(`${num} is less than or equal to 10`) : reject(new Error(`${num} is greater than 10`))); }
const delayedSuccess = (milliseconds = 4000) => new Promise(resolve => setTimeout(resolve, milliseconds, 'success'));
async function demo() {
  for (const number of [15, 8]) { try { console.log(await compareToTen(number)); } catch (error) { console.log(error.message); } }
  console.log(await delayedSuccess()); // Resolves after four seconds.
  console.log(await Promise.resolve(3));
  try { await Promise.reject('Boo!'); } catch (error) { console.log(error); }
}
if (require.main === module) demo();
module.exports = { compareToTen, delayedSuccess, demo };
