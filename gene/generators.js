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


 

/*   function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(isPrime(53)); */


/* function foo() {
    while(true){
    console.log('I');
    continue
    console.log('cannot');
    break
    console.log('pause');
    
}
}

foo() */



/* 
for(let i =0; i<5;i++){
    if(i==2){break}
    console.log("hello")

} 
 */


/* function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}


var x = generate() */


/* for(let i of x){
    console.log(i)
} */



/* function* gono(){
    var i = 0
    while(true){
        yield i++
    }
    
}

var x= gono()

console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
 */


/* var para = document.getElementById("para") */




/*  function* gono(){
    var x = yield* [1,2,3,4,5]
    para.innerHTML= "hej"
 }
 */


/* 
 var x = gono()

 console.log(x.next())
 */




/* const iterable1 = {}
iterable1[Symbol.iterator] = function*(){
    yield 1
    yield 2
    yield 3
}
console.log([...iterable1]) */


/* class Foo{
    *[Symbol.iterator](){
        yield 1
        yield 2
        yield 3
    }
}

var x = new Foo()
console.log([...x]) */

/* 
var ob = {}

ob[Symbol.iterator] = function*(){
    yield 1
    yield 2 
    yield 3
}

console.log([...ob]) */


/* class Num{
    constructor(start,end,step){
        this.start = start
        this.end = end
        this.step = step
    }
    *[Symbol.iterator](){
        for(let i = this.start;i<this.end; i +=this.step){
            yield i
        }
    }

}

var x = new Num(1,25,3)

console.log([...x])

 */



/*  class Num{
     constructor(start,end,step){
         this.start = start;
         this.end = end;
         this.step = step;
     }
     *[Symbol.iterator](){
         for(let i = this.start;i<this.end; i+=this.step){
             yield i;
     }
 }
}
 var x = new Num(1,22,5)
 console.log([...x])  */









/* 
function foo(a, b="some default value") {
   
    if (typeof(a)==='string')
        this._constructInSomeWay(a, b);
    else if (a instanceof MyType)
        this._constructInSomeOtherWay(a, b);
}

this._co */



/*  var x = []

x[Symbol.iterator] = function*(){
    i = 0
    while(i<10){
    yield i++
}
}

x = [...x]

console.log(x)
 */



/* 
class Itering{
    constructor(start,end){
        this.start = start
        this.end = end
    }
    *[Symbol.iterator](){
        for(let i=this.start;i<this.end; i++)
        yield i
    }
}


var x = new Itering(1,10)
console.log([...x]) */




/*  function* gene(){
     i = 0;
     while(i<10)
     yield i++
 }


var x = []
x[Symbol.iterator] = gene
console.log([...x]) 
 */







/* function X(name){
    if(!new.target){
        console.log("now it doesn work")
    }
    else{
    this.name = name
}
}

X("joe") */


/* class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); 
let lily = new Employee('Lily Bush', 'Programmer');  */

/* 
var x = ("2+2*2")
console.log(eval(x)) */


/* function upper(x){
    if(typeof x!=="string"){
throw TypeError("Nezadal si String")
    }
    return x.toUpperCase()
}

console.log(upper(5)) */



/* function* generate() {
    yield 33;
    yield 99;
  }
  
  const go = generate();
  const firstStep = go.next().value; // 33
  go.throw(Error("Tired of iterating!"));

 */

/* 
function* generate() {
    yield 33;
    yield 99;
    throw Error("Tired of iterating!");
  }


  
  try {
    for (const value of generate()) {
      console.log(value);
    }
  } catch (error) {
    console.error(error.message);
  }
   */



 /*  function failAfterOneSecond() {
    setTimeout(() => {
      throw Error("Something went wrong!");
    }, 1000);
  }
  
  try {
    failAfterOneSecond();
  } catch (error) {
    console.error(error.message);
  }
 */

/* 
function toUppercase(string) {
    if (typeof string !== "string") {
      return Promise.reject(TypeError("Wrong type given, expected a string"));
    }
  
    const result = string.toUpperCase();
  
    return Promise.resolve(result);
  }


  toUppercase("hej")
  .then(result => result)
  .catch(error => console.error(error.message)); */





/*   function nasobek(x){
      if(!x){
          throw Error("tohle asi nepůjde kámo")
      }
      return x * x

  }


  try{
    nasobek()
  }

  catch(err){
      console.log(err.message)
  }

  finally{
      console.log("půjde")
  } */


/* function num(x){
    if(x<10){
    Promise.reject("to asi ne káámo")
    }
    var result = x
    return Promise.resolve(result)
}


console.log(num(5)).then((result) => {result
    
}).catch((err) => {console.log(err.message)
    
});

 */




/* const input = document.querySelector("input");
const div = document.querySelector("div");
input.onkeydown = function klik(eve){
    if(eve.key==="f"){
       oo()
    }
    console.log(eve.key)
}


function oo(){
   var x = document.createElement("p")
   var y = document.createTextNode("hmm")
   x.appendChild(y)
   div.appendChild(x)
}
 */


/* function toUppercase(string) {
    if (typeof string !== "string") {
      throw TypeError("Wrong type given, expected a string");
    }
  
    return string.toUpperCase();
  }
  
function consumer() {
    try {
      toUppercase(98);
    } catch (error) {
      console.error(error.message);
    } finally {
      console.log("Always runs!");
    }
  }
  
  consumer(); // Returning Promise ignored */

/* 
var y = [1,2,3,4,5]
var x = new Set(y)
x.add(7).add(5).add(9)
console.log(x.size)
console.log(x instanceof Set)


for (let [keyy, valuee] of x.entries()) {
    console.log(keyy, valuee);
} */

/* 
let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
    console.log('We have a server');
} */



/* var obj = {
    aa:"auto",
    "aa":"motorka",
    aa:"letadlo",
    2:"motokára"
}
/* console.log(obj.aa) */


/* var x = new Map()
x.set("aa", "aa")
x.set(1, "aa")
x.set("1", "1")

for(let[key,value] of x ){
 
}
console.log(o) */ 




/* 
var pole = []
do{
    var x =((window.prompt("zadej číslo")))
    if(isNaN(x)){
        window.alert("to není číslo")
    }
    else if(!x){
        break
    }
    else{
        pole.push(parseInt(x))
    }
}
while(x)

if(pole.length==0){
    console.log("prázdné pole")
}
else{
pole = pole.filter((item)=>item<1000)
var x = pole.length
pole = pole.reduce((int, value)=>{
    return int + value
})
pole = pole/x
console.log(pole)  
} */

/* var x = 1

switch(x){
    case 1: console.log("ahoj");
    case 2: console.log("ahoj");
    continue;
    case 3: console.log("nazdar");
    case 4: console.log("ahoj");
}


 */






/* var z = []
 var x = "fsdfsd"
z.push(parseInt(z))
console.log(z); */


/* 
function create(name,age){
    return {
        jméno:name,
        věk:age
    }
}

var x = new create("dom", 25);
console.log(x); */




/* function x(){
    var x = Array.from(arguments)
    return x;
}

console.log(x("jablko", "pomeranč", "hruška")) */


/* var x= [1,2,3,4,1,2,3,4,6,7]
x = x.sort((a,b)=>a-b)
console.log(x); */

/* var x = [1,2,3,4]
var y = [3,4,5,6]


function summ(x,y){
    x = [...x,...y]
    x = x.reduce((it,ite)=>{
        return it + ite
    })
    return x
}

console.log(summ(x,y))


 */



/* function findSolution(target) {
    function find(current, history) {
    if (current == target) {
    return history;
    } else if (current > target) {
    return null;
    } else {
    return find(current * 3, `(${history} * 3)`) ||
    find(current + 5, `(${history} + 5)`);
    }
    }
    return find(1, "1");
    }
    console.log(findSolution(11)); */


/*     var dog = {
        noise: "arf",
        speak: function () {
        console.log (this.noise)
        }
        };
        var cat = {
        noise: "meow”"
        };

        cat.speak = dog.speak;


        setTimeout((cat.speak.bind(cat)), 1000) */


/* var gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

console.log(gcd(25, 11));  */

/* 
var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9)); */



/*  var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0]
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));  */
 




/* function factorial(n){
if(n==1){
    return n
}
return n * factorial(n-1)

}

console.log(factorial(5));
 */



 /*   var exponent = function(a, n) 
{
   if (n === 0) 
   {
    return n;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));  */




/* class Num{
    constructor(start,end,step){
        this.start = start;
        this.end = end;
        this.step = step;
    }
    *[Symbol.iterator](){
        for(let i = this.start;i<this.end; i+=this.step){
            yield i;
    }
}
}
var x = new Num(1,22,5)
console.log([...x])  */






/* var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));  */

/* var y = []

y[Symbol.iterator] = function* x(){
    i = 0
    while(i<300){
        yield i++
    }
}

y = [...y]

console.log(y)
 */




/* var generator = x()

console.log(generator)
console.log(generator) */



/* 
var x = Array(500).fill(1)
x = x.map((item,i)=>item + i)
console.log(x); */


/* var x = [1,2,3]
/* var o = Array.from(x.map((item)=> item * 2)) */
/* var o = new Array((x.map((item)=> item * 2))).flat()

console.log(o) */

/* var pole = [1,2,3,4,5] */



/* var pole = {
    jedna:"jžebra",
    dva:"dsdfsdf"
}
var x = (Object.keys(pole))
console.log(x)

 */


/* console.log("foo"+true)

a = 7
console.log(a&=2)
//0000000000011
//0000000000010
//0000000000010 */











//00000000011
//00000000010

//00000000010
//00000000011
//00000000001


/* console.log(Boolean(0)) */


/* var x =[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],]

for(var i =0,j=8;j>=0;i++,j--){
    console.log(x[i][j])
} */




/* var x, y, z;

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); 

 */


/* function myFunc() {
    var x = 0;
  
    return (x+=1,x-=1, x+=2)
  }

  console.log(myFunc()) */

/*  
  a = (b=5)
  console.log(a) */

/*   function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("right", 2)); */


