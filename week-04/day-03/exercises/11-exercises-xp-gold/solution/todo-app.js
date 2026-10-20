const {createApp}=require('./crud');createApp({base:'/api/todos',kind:'todo'}).listen(process.env.PORT||5000);
