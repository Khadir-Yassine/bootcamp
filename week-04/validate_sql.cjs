// Run: NODE_PATH=<validation node_modules> node validate_sql.cjs
// Uses PostgreSQL compiled to WASM; no external database connection is made.
let PGlite;
try{({PGlite}=require('@electric-sql/pglite'));}
catch{({PGlite}=require('./.validation/node_modules/@electric-sql/pglite'));}
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
function walk(folder){return fs.readdirSync(folder,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()&&!entry.name.startsWith('.')?walk(path.join(folder,entry.name)):entry.isFile()?[path.join(folder,entry.name)]:[]);}
async function main(){
 const db=new PGlite();await db.exec(fs.readFileSync(path.join(__dirname,'sql-fixture.sql'),'utf8'));
 const paths=['week-05','week-06'].flatMap(week=>walk(path.join(root,week))).filter(p=>p.endsWith('.sql')&&p.includes(path.sep+'solution'+path.sep));
 const results=[];
 for(const file of paths){try{
   const sql=fs.readFileSync(file,'utf8');
   const wrapped=/^BEGIN;/m.test(sql)?sql:'BEGIN;\n'+sql+'\nROLLBACK;';
   const output=await db.exec(wrapped);
   results.push({file:path.relative(root,file),passed:true,statements:output.length,rowCounts:output.map(r=>r.rows?.length||0)});
 }catch(error){await db.exec('ROLLBACK').catch(()=>{});results.push({file:path.relative(root,file),passed:false,message:error.message});}}
 await db.close();fs.writeFileSync(path.join(__dirname,'sql-validation-results.json'),JSON.stringify(results,null,2)+'\n');
 console.log('SQL scripts:',results.filter(r=>r.passed).length,'/',results.length);
 for(const result of results.filter(r=>!r.passed))console.error(result);
 if(results.some(r=>!r.passed))process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1;});
