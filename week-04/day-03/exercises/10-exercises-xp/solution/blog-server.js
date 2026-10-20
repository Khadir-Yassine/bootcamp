const {createApp}=require('./crud');createApp({base:'/posts',seed:[{id:1,title:'Welcome',content:'First post'}]}).listen(process.env.PORT||3000);
