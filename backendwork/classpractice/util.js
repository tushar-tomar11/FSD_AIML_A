function average(num1,num2,num3) {
    return (num1+num2+num3)/3;
    
}
var a = average(10,20,30);
const averageSquare=(a)=>{
    return Math.sqrt(a);
}

const obj = {
    av:average,
    avSquare:averageSquare    

};

module.exports= obj;