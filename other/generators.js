 //fire and forget
 //arrow generator functions are not permitted.
//The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.
// typedArrays are for raw binary data
// typedArrays přijímají od 8bitINT do 64bitFloat



//typed array


/* const buffer = new ArrayBuffer(64)
const view  = new Int32Array(buffer).map((item, index)=>{
     return item + index
     index++
})
console.log(view);
/* if(buffer.byteLength==62){
    console.log("ahoj"); 
}


function x(item){
    return item + item
}

 
 var x = "Hellllo how are you doing"
 var i = 0
for(var z of x){
    i++
    var o = z + i;
    console.log(o) 
 } */





/*  var x = new Set([1,2,3,4,5,6])
 console.log(x.has(5));
 x.add(7);
 console.log(x);

 var y = new Array(1,2,3,4,5)
 console.log(y); */

/* var x= new Map() */

/* x["name"] = "dom";
x["age"] = "age"
console.log(x.has("name")); */


/* function xx(x,y){
if (x === y) { 
    return x !== 0 || 1 / x === 1 
}
}

console.log(xx(5,9))

 */
/* arr = "affsd"
console.log(Array.isArray(arr));

if(!Array.isArray(arr)){
    console.log(typeof(arr));
} */

/* var x = "123456789"
var y = Array.from(x)
var z = Array.from(y,y => y * y);
console.log(z); */


/* const arr = [1,2,3,4,[[[[[5]]]]]]
var flot = arr.flat(5)
console.log(flot);


Enumerator

 */

/* var z = "ahoj"
var x = Symbol();
var y = new Object;
y["name"] = "name";
y[z] = "joo"
console.log(z in y);
console.log(Object.keys(y));
 */


/* 
var obj = {
    name: "aitpon"
}

obj.age = 23;

for(x in obj){
    console.log(obj[x]);
} */





/* class Vehicles {
    constructor(car){
        this.car = car
    }
}

class NextVegicles extends Vehicles{
    constructor(car,moto){
        super(car)
        this.moto = moto
    }
    static show(){
        return "this is" + this.car + "and this is" + this.moto
    }
}

var x = new NextVegicles("volvo", "yamaha");
var z = new NextVegicles("HOLVO", "dolvo");
console.log(x.show());
console.log(z.show()); 
 */



/*  class Vendor {
    static desk = "ahoj jak se máš";
    static nasobeni(n=1){
        return n * 3;
    }
 }

 class Next extends Vendor {
static triple(n){
    return super.nasobeni(n) * super.nasobeni(n)
}
 }

var x = new Next
console.log(x.desk) */


/*  console.log(Vendor.desk)
 console.log(Vendor.nasobeni())
 console.log(Next.triple()); */



 /* class Test{
     static x = "ahooj";
     static o(){
         return this.x + "ahooj"
     }
     static oo(){
         return this.o() + "ahojjoj"
     }
 }

    console.log(Test.oo()); */

/* 
    function xxx(celkem){
        console.log(celkem)
    }

    function sume(x,y){
        var z = x + y;
        xxx(z);
    }

    sume(1,5); */


/*     function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
      }
      
      function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
      }
      
      myCalculator(5, 5, myDisplayer); */


 

  function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(isPrime(53));