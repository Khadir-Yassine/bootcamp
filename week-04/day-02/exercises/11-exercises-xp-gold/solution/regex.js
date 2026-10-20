const returnNumbers=text=>(text.match(/\d/g)||[]).join('');
const validFullName=name=>/^\p{Lu}\p{L}* \p{Lu}\p{L}*$/u.test(name);
module.exports={returnNumbers,validFullName};
if(require.main===module){console.log(returnNumbers('k5k3q2g5z6x9bn'));console.log(validFullName(process.argv.slice(2).join(' ')||'John Doe'));}
