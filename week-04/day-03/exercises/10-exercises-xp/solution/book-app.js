const {createApp}=require('./crud');createApp({base:'/api/books',kind:'book',seed:[{id:1,title:'Clean Code',author:'Robert C. Martin',publishedYear:2008}]}).listen(process.env.PORT||5000);
