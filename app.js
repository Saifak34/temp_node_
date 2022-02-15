 const http = require('http');

 const server = http.createServer((req,res) =>{
  if(req.url === '/') {
     return res.end('Welcome to our Homepage')
  }
  if(req.url === '/about') {
    return res.end('Welcome to our about page')
} else{
  return res.end(`
  <h1>OOps!</h1>
  <p>We can not find page you are looking for</p>
  <a href="/">back home</a>
 `)}
  });


 server.listen(3000);