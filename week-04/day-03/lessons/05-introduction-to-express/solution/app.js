const {createApp}=require('./crud');const app=createApp({seed:require('./data')});if(require.main===module)app.listen(process.env.PORT||3000);module.exports=app;
