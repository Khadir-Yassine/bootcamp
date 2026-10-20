const axios=require('axios');module.exports=async url=>console.log((await axios.get(url,{timeout:15000})).data);
