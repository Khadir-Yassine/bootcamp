const blog=db.getSiblingDB('bootcamp_devblog');blog.posts.deleteMany({});blog.users.deleteMany({});
const author=blog.users.insertOne({username:'LinaDev',bio:'Backend learner',socialLinks:{github:'https://github.com/example'}}).insertedId;
blog.posts.insertOne({title:'Why I Love MongoDB',body:'Schema flexibility is a game changer...',authorId:author,tags:['NoSQL','Database','Tech'],comments:[{username:'CodeMaster',text:'Great article! Very clear.',timestamp:new Date()}]});
blog.posts.createIndex({authorId:1});
printjson(blog.posts.aggregate([{$lookup:{from:'users',localField:'authorId',foreignField:'_id',as:'author'}}]).toArray());
