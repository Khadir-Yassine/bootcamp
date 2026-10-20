const http=require('node:http');
const server=http.createServer((req,res)=>{
 if(req.url==='/menu'){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({menu:{firstCourse:'Vegetable Soup',mainCourse:'Hamburger',dessert:'Fruit salad'}}));}
 if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});return res.end('<!doctype html><html lang="en"><title>My server</title><h1>Welcome to My Server</h1><p>Hello, this is your server!</p><a href="/menu">Menu JSON</a></html>');}
 res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');
});
server.listen(Number(process.env.PORT)||3000,()=>console.log('Server listening on',server.address().port));
