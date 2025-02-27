const http = require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(`hello node js from http://localhost:${port}`)
})
server.listen(port,()=>{
    console.log(`Sever id now listening to port ${port}`);
    
})