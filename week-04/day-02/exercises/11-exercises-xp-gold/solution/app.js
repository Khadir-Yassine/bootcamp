const action=process.argv[2]||'files';
if(action==='files')require('./file-info')();
else if(action==='posts')require('./fetch-data')().catch(e=>{console.error(e.message);process.exitCode=1;});
else if(action==='dates')require('./date-operations')();
else if(action==='users'){require('./faker-users').addUser();console.log(require('./faker-users').users);}
else if(action==='regex'){const r=require('./regex');console.log(r.returnNumbers('k5k3q2g5z6x9bn'),r.validFullName('John Doe'));}
else throw new Error('Choose files, posts, dates, users or regex');
