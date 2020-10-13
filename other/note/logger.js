/*  function x(argument) {
    console.log(argument);
} 


module.exports = x
 */


/* var url = "http://mylogger.io/log";

function fuck (message) {
    console.log(message);

}

module.exports.bjorg = fuck;
 */


/* 
var x= [10, 15, 30, 45, 50, 66, 75]

var sum = x.reduce((item, iterator) => {
    return item + iterator
}, 0)

console.log(sum); */


/* function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

console.log(fibonacci(7));
 */


/* 
 function pow(x, y){
     if(y== 1){
         return x;
     }
     else{
 return x * pow(x, y-1)
}
}
console.log(pow(2, 3));


 */

/* 
function sumOfDigits(num) {
    if (num == 0) {
        return num;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(100)); */




/* var y = require("./script.js");

console.log(y(1, 2))  */





/* export function x(){
    return "ahoj";
} */


/* 
function x(){
    return "ahoj";
}
module.exports = x; */



/* function x(){
    return "ahoj";
}
module.exports.toto = x; */

var x = require("os");
function pamety(){
    console.log(x.freemem());
}
var pamet = pamety()

module.exports.toto = pamet