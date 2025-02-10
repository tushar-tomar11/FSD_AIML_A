const fs = require('fs')

function writeFileCB(){
fs.writeFile("data.pdf","Hello Writing Pdf File dtaa",(err)=>{
    if(err)
    {
        console.log("error occurred"+err);

    }
    console.log("Data written successfully");

});
console.log("resource closed");
}


function dataReadCB()
{
    fs.readFile("data.pdf",{encoding: 'utf8'},(err,data)=>{
        if (err)
        {
            console.log("error occurred"+err);
        }
        console.log("dtaa read successfully");

});
}

const obj={
    write: writeFileCB,
    read: dataReadCB,
}
module.exports=obj;