'use strict';
async function allPromises(milliseconds = 3000) {
  const promise1 = Promise.resolve(3), promise2 = 42;
  const promise3 = new Promise(resolve => setTimeout(resolve, milliseconds, 'foo'));
  try {
    // Wait for every input; plain values are wrapped. Results retain input order
    // regardless of completion order. One rejection rejects the aggregate.
    return await Promise.all([promise1, promise2, promise3]);
  } catch (error) { console.error('A promise failed:', error); throw error; }
}
const timesTwoAsync = x => new Promise(resolve => resolve(x * 2));
const doubleAll = array => Promise.all(array.map(timesTwoAsync));
if (require.main === module) {
  allPromises().then(console.log).catch(console.error); // [3,42,'foo'] after about 3 seconds.
  doubleAll([1, 2, 3]).then(console.log); // [2,4,6], appears first because it has no timer.
  Promise.all([Promise.resolve(1), Promise.reject(new Error('Example rejection'))]).catch(error => console.log('Caught:', error.message));
}
module.exports = { allPromises, timesTwoAsync, doubleAll };
