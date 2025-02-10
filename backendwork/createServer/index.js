const http = require('http');
const PORT = 2500;
const server=http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');

})
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})