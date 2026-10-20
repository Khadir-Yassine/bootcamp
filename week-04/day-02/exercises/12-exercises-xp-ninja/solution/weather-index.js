require('./dashboard')().catch(e=>{console.error(e.message);process.exitCode=1;});
