const {test}=require('node:test'),assert=require('node:assert/strict'),path=require('node:path');
const {pathToFileURL}=require('node:url');
const date=require('./day-02/challenges/13-more-node-js-challenges/solution/date');
const regex=require('./day-02/exercises/11-exercises-xp-gold/solution/regex');
test('dates handle year rollover, minute precision and invalid birthdates',()=>{
 assert.equal(date.untilJanuary(new Date(2026,11,31,23,59,59)),'0 days and 00:00:01 hours');
 assert.equal(date.minutesLived('2000-01-01T00:00:00Z',new Date('2000-01-01T01:00:00Z')),60);
 assert.throws(()=>date.minutesLived('bad'));assert.throws(()=>date.minutesLived('2099-01-01'));
});
test('regex extracts digits and validates exactly two capitalized names',()=>{
 assert.equal(regex.returnNumbers('k5k3q2g5z6x9bn'),'532569');assert.equal(regex.returnNumbers('none'),'');
 assert(regex.validFullName('John Doe'));assert(regex.validFullName('Émile Durand'));
 for(const name of ['john Doe','John  Doe','John Doe Smith','John2 Doe','John-Doe'])assert(!regex.validFullName(name));
});
test('ES module TodoList keeps task state private and rejects missing tasks',async()=>{
 const {TodoList}=await import(pathToFileURL(path.join(__dirname,'day-02/exercises/10-exercises-xp/solution/04-todo/todo.js')).href);
 const list=new TodoList(),one=list.addTask('Study');list.addTask('Practice');list.completeTask(one.id);
 assert.equal(list.listTasks()[0].completed,true);const copy=list.listTasks();copy[0].title='Tampered';assert.equal(list.listTasks()[0].title,'Study');assert.throws(()=>list.addTask(' '));assert.throws(()=>list.completeTask(999));
});
