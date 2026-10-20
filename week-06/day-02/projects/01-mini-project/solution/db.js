const {Pool}=require('pg');
module.exports=new Pool({connectionString:process.env.DATABASE_URL||'postgresql://postgres:postgres@localhost:5432/restaurant_db',connectionTimeoutMillis:5000});
