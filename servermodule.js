const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>hello server</h1>');
    res.end();

})
server.listen(5000,()=>console.log("server started"));