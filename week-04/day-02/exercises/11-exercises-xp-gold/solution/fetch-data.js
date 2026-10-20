const axios=require('axios');module.exports=async()=>{const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts',{timeout:15000});data.forEach(post=>console.log(post.title));};
