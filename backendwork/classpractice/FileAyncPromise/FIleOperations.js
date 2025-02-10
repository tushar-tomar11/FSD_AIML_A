const fs = require('fs').promises;
const promise =fs.writeFile("data.txt","Hello,writing data through Fs repromise module",{encoding:'utf-8'})

promise.then(()=>
{
    console.log("data is written");
}).catch(err=>{
    console.log(err);
}).finally(msg=>{console.log("finally done")})


const prom =fs.readFile("data.txt",{encoding:'utf-8'})

prom.then((data)=>
{
    console.log("data read");
    console.log(data)
}).catch(err=>{
    console.log(err);
}).finally(()=>
{
    console.log("finally done");
})


