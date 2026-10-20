const pool=require('./db'),model=require('./models/menuModel'),{createApp}=require('./app');
async function main(){await pool.query('SELECT 1');const server=createApp(model).listen(process.env.PORT||3000,()=>console.log('Restaurant API on',server.address().port));for(const signal of ['SIGINT','SIGTERM'])process.once(signal,()=>server.close(()=>pool.end()));}
main().catch(e=>{console.error(e.message);pool.end();process.exitCode=1;});
