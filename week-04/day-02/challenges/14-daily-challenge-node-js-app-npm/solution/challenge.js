const {greet}=require('./greeting');console.log(greet(process.argv[2]||'Yassine'));require('./colorful-message')();require('./read-file')();
