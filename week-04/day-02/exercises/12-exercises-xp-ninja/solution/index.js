const {Command}=require('commander');const program=new Command();
program.command('greet <name>').action(require('./commands/greet'));
program.command('fetch <url>').action(require('./commands/fetch'));
program.command('read <file>').action(require('./commands/read'));
program.parseAsync().catch(e=>{console.error(e.message);process.exitCode=1;});
