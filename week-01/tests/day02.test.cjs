const test = require('node:test');
const assert = require('node:assert/strict');
const xp = require('../day-02/exercises/11-exercises-xp/solutions.js');
const gold = require('../day-02/exercises/12-exercises-xp-gold/solutions.js');
const ninja = require('../day-02/exercises/13-exercises-xp-ninja/solutions.js');
const { improveSentence } = require('../day-02/challenges/14-daily-challenge-not-bad/solutions.js');
const stars = require('../day-02/challenges/15-daily-challenge-stars/solutions.js');
test('people mutations, slice, indices, last entry and break follow the brief',()=>{
  const r=xp.peopleExercise('Yassine');
  assert.deepEqual(r.people,['Mary','Devon','Jason','Yassine']);
  assert.deepEqual(r.copy,['Devon','Jason']);assert.equal(r.maryIndex,0);assert.equal(r.fooIndex,-1);
  assert.equal(r.last,'Yassine');assert.deepEqual(r.allPeople,r.people);assert.deepEqual(r.throughDevon,['Mary','Devon']);
});
test('rankings and ordinal exceptions',()=>{
  assert.equal(xp.favoriteColors().ordinary[0],'My #1 choice is blue');
  assert.equal(xp.favoriteColors().bonus[2],'My 3rd choice is green');
  assert.deepEqual([1,2,3,4,11,12,13,21].map(xp.ordinal),['1st','2nd','3rd','4th','11th','12th','13th','21st']);
});
test('prompt loop rejects low, blank, invalid and infinite input; supports cancellation',()=>{
  const answers=['2','','hello','Infinity','10'];const types=[];
  assert.equal(xp.askNumberAtLeastTen(()=>answers.shift(),x=>types.push(x)),10);assert.equal(types.length,5);
  assert.equal(xp.askNumberAtLeastTen(()=>null),null);
});
test('building rent update and object/string exercises',()=>{
  const r=xp.buildingExercise();assert.equal(r.floors,4);assert.deepEqual(r.apartments,[3,9]);
  assert.equal(r.secondTenant,'Dan');assert.equal(r.rooms,4);assert.equal(r.building.numberOfRoomsAndRent.dan[1],1200);
  assert.deepEqual(xp.familyExercise({a:1,b:2}),{keys:['a','b'],values:[1,2]});
  assert.equal(xp.rudolfExercise(),'my name is Rudolf the reindeer');assert.equal(xp.secretGroup(),'ABJKPS');
});
test('Gold exercises include unknown names and negative-only maximum',()=>{
  assert.deepEqual(gold.divisibleByThree(),[true,true,true,true,false]);
  assert.equal(gold.attendance(' Randy '),"Hi! I'm randy, and I'm from Germany.");
  assert.equal(gold.attendance('toString'),"Hi! I'm a guest.");assert.equal(gold.attendance(null),"Hi! I'm a guest.");
  assert.deepEqual(gold.analyzeAges(),{sum:233,highest:98});assert.deepEqual(gold.analyzeAges([-3,-8]),{sum:-11,highest:-3});
  assert.throws(()=>gold.analyzeAges([]),RangeError);
});
test('Ninja methods use each person, handle ties and grade threshold',()=>{
  const a=ninja.createPerson('A',80,2),b=ninja.createPerson('B',50,2);
  assert.equal(a.bmi(),20);assert.equal(ninja.compareBMI(a,b),'A has the larger BMI.');
  assert.equal(ninja.compareBMI(a,ninja.createPerson('C',80,2)),'Both people have the same BMI.');
  assert.throws(()=>ninja.createPerson('A',80,0),RangeError);
  assert.deepEqual(ninja.findAvg([60,70],()=>{}),{average:65,message:'You passed.'});
  assert.equal(ninja.findAvg([60,64],()=>{}).message,'You failed and must repeat the course.');
  assert.throws(()=>ninja.findAvg([],()=>{}),TypeError);
});
test('Not Bad preserves prefix/suffix and handles missing or reversed words',()=>{
  assert.equal(improveSentence('The movie is not that bad, I like it'),'The movie is good, I like it');
  for(const text of ['bad before not','not here','bad only','plain text'])assert.equal(improveSentence(text),text);
  assert.equal(improveSentence('not bad bad'),'good bad');
});
test('both star implementations exactly match the six-row requirement',()=>{
  const expected='*\n* *\n* * *\n* * * *\n* * * * *\n* * * * * *';
  assert.equal(stars.singleLoop(),expected);assert.equal(stars.nestedLoops(),expected);
  assert.equal(stars.singleLoop(0),'');assert.equal(stars.nestedLoops(1),'*');
});
