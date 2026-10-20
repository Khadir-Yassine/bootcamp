const {faker}=require('@faker-js/faker');
const users=[];
function addUser(user={name:faker.person.fullName(),street:faker.location.streetAddress(),country:faker.location.country()}){users.push(user);return user;}
module.exports={users,addUser};
if(require.main===module){addUser();addUser();console.log(users);}
