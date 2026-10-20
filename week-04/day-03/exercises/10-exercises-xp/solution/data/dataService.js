const axios=require('axios');exports.fetchPosts=async()=>{const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts',{timeout:15000});return data;};
