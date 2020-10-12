/* (function () {
    console.log("my favorite")
})() */


/*  (x = function (num = 3) {
    console.log("my favorite " + num);
})()

 */


 function x(...arr){
    return arr.reduce((x, y) =>{
        return x + y
    }, 0)
 }

 console.log(x(1,2,3,4,5))