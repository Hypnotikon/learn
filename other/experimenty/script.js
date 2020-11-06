/* var x= ["alice", "palice", "monika", "trolika"] */

/* var odpoved = x.map((item) => {
    return item.toUpperCase()
})

console.log(odpoved);
 */

/*  for(let i = 0; i<x.length; i++){
 x[i] = x[i].charAt(0).toUpperCase() +x[i].substring(1)
 }

 console.log(x); */


/*  var x = ["alice", "palice", "monika", "dominik"]
 var y = new Array(...x)

 for(let i =0; i<y.length; i++){
     y[i] = y[i].charAt(0).toUpperCase() + y[i].substr(1);
 }

 console.log(y); */

/* var x = ["alice", "palice", "monika", "dominik"]
for(let i =0; i<x.length;i++){
  x[i] = x[i].charAt(0).toUpperCase() +x[i].substring(1)
  for(let i =0; i<x.length;i++){
      aa = x[i].length
  x[i] = x[i].substring(0) + x[i].charAt(aa).toUpperCase()
  }
}

console.log(x); */

/* var x = ["alice", "palice", "1slon", "monika", "dominik"]

for (let i = 0; i < x.length; i++) {
    var pattern = /\d/gi;
    var z = pattern.test(x[i].charAt(0));
    if (z == true) {
        x[i] = x[i].charAt(0)
    }
    else {

        aa = x[i].length
        x[i] = x[i].charAt(0).toUpperCase() + x[i].substring(1)
        x[i] = x[i].substring(0, aa - 1) + x[i].charAt(aa - 1).toUpperCase()
    }

}
console.log(x); */



/* var x = "1sdfsdfsdf"
var pattern = /\d/gi
var z = pattern.test(x.charAt(0));



if (z == true) {
    console.log("čau")
} */


/* var hlavni = {
    name: "Dom",
    surname: "hrom",
    dohromady: function () { return this.name + this.surname }
}

console.log(hlavni.dohromady()) */

/* var vedlejsi = {
    Fullname: function (mesto, vesnice) { return this.name + this.surname + mesto + vesnice }
}

vedlejsi.pocet = 15
vedlejsi.pocet2 = 20
console.log(vedlejsi.pocet2)
console.log(vedlejsi.pocet)
delete vedlejsi.pocet2




var osoba = {
    name: "dominik",
    surname: "hrom"
}

var osoba2 = {
    name: "Vak",
    surname: "TOM"
}

var x = vedlejsi.Fullname.call(osoba, "Praha", "Žehu")
console.log(x);
var y = vedlejsi.Fullname.call(osoba2, "Kutna", "Brno")
console.log(y) */



/*
var person = new Object();
person.name = "Dominik";
person.age = 15;
person.full = function (mesto) { return this.name + " " + this.age + mesto }
console.log(person.full("Praha"))



var myarr = Object.values(person);
console.log(myarr) */


/* var person2 = new person
person2.name = "pavel";
console.log(person2.name)
console.log(person.name)

 */


/* var person2 = {
    name: "Honza",
    age: 15
}

console.log(person.full.call(person2)) */




/* function x(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age

}

x.prototype.nevim = 25;

var y = new x("dom", "hrom", 15)
console.log(y.nevim) */
/* console.log(x.nevim)
var y = new x("dom", "hrom", 15);
console.log(Object.values(y)); */




/* var person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    get lang() {
        return this.firstName.toUpperCase()
    }
}


console.log(person.lang); */


/* var person = {
    firstName: "John",
    lastName: "Doe",
    language: "what",
    get lang() {
        return this.firstName.toUpperCase()
    }
}
console.log(Object.values(person))
console.log(person.lang);
 */




/*
var obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});



console.log(Object.getOwnPropertyNames(obj)); */







/* var person = { name: "john", age: 15, surname: "hrom" }

console.log(Object.defineProperty */

/* var text = "";

for (x in person) {
    text += person[x] + " "
}

console.log(text); */




/*
var objekto = { counter: 5 }

Object.defineProperty(objekto, "reset",
    set: function () { this.counter++ })

console.log(objekto.reset)

 */



/* function xx() {
    x = 10
}
var x

console.log(x);

 */


/* function ad(num) {
    return ad()
}

console.log(ad(5)); */


/* 
class car {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
        this.age = age
    }
    full() {
        return this.name + this.surname
    }
    age(x) {
        return x - this.year
    }

}

var date = new Date()
var year = date.getFullYear()

var x = new car("dom", "hrom");
console.log(x.full());

 */


/* function x(name, surname) {
    this.name = name,
        this.surname = surname
}

x.prototype.lang = "eng"
var o = new x("dom", "hrom");
console.log(o) */


/* class clovek {
    constructor(name, cas) {
        this.name = name,
            this.cas = cas
    }
    age() {
        var dat = new Date();
        return dat.getFullYear() - this.cas
    }
}

var x = new clovek("ja", 155)
console.log(x.age(2)); */


/* class clovek {
    constructor(name, cas) {
        this.name = name,
            this.cas = cas
    }
    age(x) {
        return x - this.cas;
    }
}

var dat = new Date();
var x = dat.getFullYear();

var x = new clovek("ja", 155)
console.log(x.age(15)) */


/* var x= [1, 2, 3]

var[z,y,o] = x
console.log(z,y,o); */



/* function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  var [first, second, third, fourth, fifth, sixth] = fibs();
  console.log(first);

 */




/* var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };


var {name: name} = robotA;
var {name: name} = robotB

console.log(name, name2)
 */



/* 
var robot = {name: "Robocop", age:25}

var {name, age} = robot

console.log(name,age) */

/* 
var complicatedObj = {
    arrayProp: [
      "Zapp",
      { second: "Brannigan" }
    ]
  };


  var {arrayProp : [first, {second}]} = complicatedObj

  console.log(first)
  console.log(second) */




/*   var pole = [1, 2, 3]
  var[x,y,z,e=4] = pole;
  console.log(x,y,z)
  console.log(e) */



/*   function compare(a,b) {
    return a == b || (isNaN(a) && isNaN(b));
}

console.log(compare("c",5)) */

/* 
var fruits = ["banana","nanana"]
fruits.length = 10
console.log(Object.keys(fruits))
console.log(fruits.length)
console.log(fruits) */

/* 
var x = ["banana", "banana", "apple", "orange", "banana"]
var rex = /banana/ig
var y = rex.exec("sfbananasfd")
console.log(y)
 */



/*  var x = "smith--users-mail.com"
 var pattern = /^(\w+[\-|\.])+\w+/
 var o = x.match(pattern)
console.log(o)
 */


/* let str = '<h1>Hello, world!</h1>';
let pattern = /<(.+?)>(\w+)/i
console.log(str.match(pattern))

 */


/* 
 let x = "10000000";
 pettern = /10{4}$/
 console.log(x.match(pettern)) */

/* 
 var x= {name:"dom", age:25, surname:"karel"};

var x = (ahoj) => {
    var {jedna, dva, tri} = {ahoj}
    return jedna;
    return dva;
    return tri
}

console.log(x(10));

 */


/* 
const books = [
    {
        author : "Domingo Bingo",
        title : "I love you to the moon",
        img : "https://images-na.ssl-images-amazon.com/images/I/71SSf1AUtzL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg"
    }
    ,
    {
        author : "Monika Bingo",
        title : "I hate you to the sun",
        img : "https://m.media-amazon.com/images/I/51oGdx+yw3L.jpg"
    }
    ]

    const x = books.map((item)=> {
        return Object.getOwnPropertyNames(item)
    })

    console.log(x) */








/* var x = "dobrý den vítejte v práce a nashledanou všem"
var len = x.replace(/\s/g,"")
console.log(len.length);
 x = x.replace("práce", "hackaton")
 var z =x.indexOf("hackaton")
 x = x.substr(0,z) + x.substring(z).toUpperCase()

 console.log(x) */



/* 
 function greet(name){
    return (`Hello, ${name} how are you doing today?`)
  }

  console.log(greet("Ryans")); */
/* 

  const arr = [];


function o(x){

  for(let i =0;i<x;i++){
    arr.push(i);
  }
  return arr
}

console.log(o(5)); */



/* const arr = n => Array.from({length: n}, (_, i) => i);
 */


/*  const mapper = new Map([["a", "1"], ["b", "2"]])
 var x = Array.from(mapper.values())
 console.log(x); */



 /* function f() {
    return Array.from(arguments);
  }
  
 console.log(f(1, 2, 3));

 */



/*  var x = [1,2,3,4,5,6,7]

 function backer(){
    var x = arguments.length
    var vysledek = 1
    for(let i =0;i<x;i++){
        vysledek *=arguments[i]
    }
    return vysledek;
 }

 console.log(backer(...x)) */


/*  var x = n => Array.from({length:n}, (y,x) =>x)
 console.log(x(5)) */


/*  var x = n => Array.from({length:n}, (y,x)=>x+1)
console.log(x(5)); */
/* var z = [1,2,3]
var x = Array.from(z, (z)=>z+1)
var y = z.map((x)=> {return x +1})
console.log(x);
console.log(z); */



 /* function pole(start,konec,step){
    var x = []
    x.push(start)
    var naposled = x[x.length-1]
    var z=0;
    while(naposled<konec){
        x.push(naposled + step)
        naposled +=step
    }
    return x;
}

pááááááááááááni, jsi machr, Domísku

console.log(pole(1,15,2))  
 



//rest a spread

function xx(){
    return Array.from(arguments);
}


var x =1
var y =2
var z = 3

console.log(xx(x,y,z))
 */


/*  x = Array.from("ahoooj")
 console.log(x);

 y = new Set(["ahoj", "babko", "ahoj"])
 console.log(y); */

/*  const map = new Map([[1, 2], [2, 4], [4, 8]]);
 console.log(Array.from(map.keys())) */

/*  var x = "jak se vede"
 console.log(x.charAt(0), x.charCodeAt(0)) */
/* 
 var x= [1,2,3]
 var y = x.indexOf(4);{
     console.log(y)
 } */

/* var arr=[1,2,3,4,5]

 function index(pole, n){
    if(pole.length<=n||n<0){
      return -1
    }
    else{
      return Math.pow(pole[n],n)
    }
  }

  console.log(index(arr,5));

 */


 /* var x =["sheep", "sheep","wolf", "sheep","sheep","sheep"]

function hledani(queu){
    queu.reverse()
    var delka = queu.length -1
    var vlk = queu.indexOf("wolf")
    if(vlk==delka){
        return "Pls go away and stop eating my sheep"
    }
    else{
        return ("Oi! Sheep number " + (parseInt(vlk)) +" You are about to be eaten by a wolf!")
    }
}

console.log(hledani(x)); */


/* var x= [1,3,4,5,6,8,10,15,37,24,12,35]
console.log(y); */


/* var x= "SDAJ DASJKF SDAKF JASDKF JKADS"
x = x.toLocaleLowerCase */


/* var items = ['réservé',"zito","é", 'premier',"žio",
'communiqué', 'cafe', 'adieu', 'eclair'];
items.sort()


console.log(items);
 */



/* const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value)
 */

/* var dynamicArray = ["2007", "2008", "2009", "2010"];
var obj={}
for(x of dynamicArray){
    obj[x] = "";
}

obj[2007] = "tady"
console.log(obj[2007]) */


/* 


const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array,) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

console.log(average);





 var arObj = [
    { 'name': 'Jon', 'age': 24 },
    { 'name': 'Mark', 'age': 32 },
    { 'name': 'Kacy', 'age': 22 }
];

var str = arObj.reduce((a, b)=> {
   return a + b.name + ' is ' + b.age + '. ';
}, '' ); // pass empty string as initial value

console.log(str); // Jon is 24. Mark is 32. Kacy is 22. 


var ar = [ [1, 2, 3], ['one', 'two', 'three'], ['a', 'b', 'c'] ];

var str = ar.reduce( function (a, b) {
    return a + b.join(', ') + ', ';
}, '' ); // pass empty string as initial value

str = str.slice(0, -2); // use slice to remove trailing comma and space
console.log( str ); 
*/





 

/* var ar = [1,2,3];

var str = ar.reduce( function (a, b) {
    return a + b;
}, '' ); // pass empty string as initial value

console.log(str); */




/* const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] =  fruit;
  return tally;
} , {})
console.log(count); */


/* const euros = [29.76, 41.85, 46.5];

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

console.log(doubled); */


/* 
var x =[1,2,3]

function xx(...pole){
   var x= pole.reduce((total,number)=>{
        return total + number
    })
    return x;
}

console.log(xx(1,2,3,4,5,6)) */


/* const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  
  const [,, { name }] = props;
  
  console.log(name); // "FizzBuzz" */



/*   let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
console.log(self);
console.log(prot); */


/* var x = document.getElementById("class")
var z = document.getElementById("tady")
var pole = [""];


var nova = document.createElement("p")
var note = document.createTextNode("here you go and I go to bed NOW!")
nova.appendChild(note)

var kont = document.getElementById("kont")
kont.appendChild(nova);


x.addEventListener('keydown', function(value) {
    var key = value.key;
    pole.push(key) 
    z.innerHTML += key;
    if(pole.length>10){
        z.innerHTML ="";
        pole.splice(0,pole.length)
    }
}); */

/* const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`); */


/* var one = 1, two = 2;
console.log(one + two)
 */

/* 
 function prime(numm){
     var x;
     for(let i =2;i<numm;i++){
         if(numm%i==0){
            x="not prime";
           break;  
        }
        else{
            x="is prime"
        }
     }
     return x
 }


 console.log(prime(141411254941439)); */


/*  function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0){return false}
      return num > 1;
  }

  console.log(isPrime(15)); */


/*   let yourName;
  while (!yourName){
yourName = prompt("Who are you?");
} 
console.log(yourName); */

/* 
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
    console.log(current);
    break;
    }
    }
    // → 21 */

/* 
for(let i =0;i<100;i++){
    if(i%5==0&&i%3==0){
        console.log("fuzzbuzz")
    }
    else if(i%3==0){
        console.log("fuzz")
    }
    else if(i%5==0){
        console.log("buzz")
    }
    else{console.log(i)}
} */

/* 
var x = 5
var y = 5
var odpoved = ""
for(i=0;i<y;i++){
    if(i%2==0){
    odpoved += "# ".repeat(x) + "\n "
}
else{
    odpoved += "# ".repeat(x) + "\n"
}
}
console.log(odpoved); */





/* 
function wrap(n){
    return n;
}

var first = wrap(1)
var second = wrap(2)

console.log(first);
console.log(second); */

/* 
function x(factor){
    return number => number * factor
}


var fiv = x(5);
console.log(fiv(2)); */

/* function findSolution(target) {
    function find(current, history) {
    if (current == target) {
    return history;
    } else if (current > target) {
    return null;
    } else {
    return find(current + 5, `(${history} + 5)`) ||
    find(current * 3, `(${history} * 3)`);
    }
    }
    return find(1, "1");
    }
    console.log(findSolution(96)); */


/*     function farmat(x,y){
        var cows = String(x)
        while(cows.length<3){
            cows = "0" + cows
        }
        var chick = String(y)
        while(chick.length<3){
            chick = "0" + chick
        }
        return `${cows}, ${chick}`
    }

    console.log(farmat(10,1)); */




    /* function farma(arg,widh){
        var str = String(arg)
        while(str.length<widh){
            str = "0" + str
        }
        return str
    }

    function animals(){
        console.log(`${farma(16,3), "cows" }`)
        console.log(`${farma(55,5),"pigs"}`)
        console.log(`${farma(7,3), "zebras"}`)
    }

    animals(7,5,6) */




/* 
    function farma(arg){
        console.log(arg.length);
        var pole = [];
        for(let i =0;i<arg.length;i++){
            var str = String(arg[i])
            while(str.length<3){
                str = "0" + str
            }
            pole.push(str)
        }
        console.log(pole);

    }

    var x = [55,1,333,6,5,777,55]
    farma(x) */


/* var x = "jak se máš ty B ty B jáá B jsdf lB BB"

function xx(arg){
    var pattern = /b/gi
    var result = arg.match(pattern)
    console.log(result.length)
}

xx(x); */



/* var obs = {left:"2", right:"3"};
var y = Object.assign(obs, {mid:"5"});
console.log(Object.keys(obs))
console.log(y) */


/* var obs = {event:["run", "swim", "walk"], action:["eat", "drink", "sleep"]}

console.log(obs.event[2]); */


/* var obs = {action:"run", event:"sleep"}
var obn = {action:"run",event:"sleep"}

function comp(obs,obn){
    var result =false;
    var x = Object.values(obs)
    var y = Object.values(obn)
    for(let i =0;i<x.length;i++){
        result = false
        for(let k=0;k<y.length;k++){
            if(x[i]==y[k]){
            result = true
            }
        }
        if(result ==false){
            break
        }
    }
    console.log(result);
}

comp(obs,obn) */








/* function prim(n){
    var result;
    for(let i =2;i<n;i++){
        if(n%i==0){
            result = false;
            break;
        }
        else{
            result = true;
        }
        
    }
    return result;
}

console.log(prim(15)) */



/* 
function xx(...numbers){
    var result = -Infinity
    for(let x of numbers){
        if(x>result){
            result = x
        }
    }
    return result

}

console.log(xx(1,5,7,8,4,15)) */






/* var x = [1,2,3,4,8,7,1,5,7]
var y = x.sort((a,b) => a-b)
console.log(y) */

/* 
let horseShoe = "🐴👟";
console.log(horseShoe.length);

console.log(horseShoe.charCodeAt(0))
console.log(horseShoe.length())
console.log(horseShoe.codePointAt(0)) */






/* function procenta(...pole){
    var malo =[] ;
    var stredne = [];
    var hodne = [];
    pole.forEach((x)=>{ if(x<10){
    malo.push(x)
    }
    else if(x<100){
        stredne.push(x)
    }
   else { hodne.push(x)
   }
})

    
    if(((malo.length/pole.length) * 100)%1<0.5){
       malo = Math.floor((malo.length/pole.length) * 100)
    }
    else{malo = Math.ceil((malo.length/pole.length) * 100)}

    if(((stredne.length/pole.length) * 100)%1<0.5){
       stredne = Math.floor((stredne.length/pole.length) * 100)
    }
    else{stredne = Math.ceil((stredne.length/pole.length) * 100)}

    if(((hodne.length/pole.length) * 100)%1<0.5){
        hodne = Math.floor((hodne.length/pole.length) * 100)
    }
    else{hodne = Math.ceil((hodne.length/pole.length) * 100)} 
    var pole = [malo,stredne,hodne]
    pole = pole.
    while(malo+stredne+hodne>100){
        var z= Math.max(malo,stredne,hodne)

    }

    return(`malých čísel je ${malo}%, středních je ${stredne}% a velkých je ${hodne}%`)
}

console.log(procenta(1,2,3,55,77,125,157,8,5524,1,577,885))  

 */


/* 
x = 15
y = 77
z = 77


var pole = [x,y,z]
var pole2 = pole.toString(pole)
console.log(pole2)
pole = pole.sort((a,b) => a - b)
var obj = {}
var jmeno = 0
for(let x of pole){
    obj[pole2[jmeno]] = x
    jmeno++
}
console.log(obj) */


/* 
x = 15
y = 77
z = 77
var array = [x,y,z]

var obj = {}
var i = 0
for(let x of array){
obj[i] = x
i++
}

console.log(obj) */


/* class Duck{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    shock(){
        return "ahoj jak se máš"
    }
    static hello(){
        return "co tu děláš"
    }

}

class Pig extends Duck{
    constructor(name,age,x){
        super(name,age)
        this.x = x
    }
    shocker(xxx){
        return this.shock() + "ahoj" + "je ti" + xxx
    }
}

var test = new Duck("dom",25)
var x = new Duck("dom", 25)
var y = new Duck("hon", 33)
var o = new Pig("tron",55,"x")
var p = new Pig("tron",45,"x")
console.log(Duck.hello()) */


/* 

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show(); */



/* var person = {
firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang(){
      return this.firstName + this.language
  }
}

console.log(person.lang) */


/* var obj = {counter : 5}

Object.defineProperty(obj, "reset",{
    get : function() {this.counter = 0}
})

Object.defineProperty(obj, "add", {
    set : function(value){this.counter -=value}
})

Object.defineProperty(obj, "min", {
    set : function(value){this.counter -=value}
})
obj.add = 6
console.log(obj)

var x = {
    name:"dom",
    age:25,
    get both(){return this.name + this.age}
}

console.log(x.both) */




/* var x ={name:"dom"}


Object.defineProperty(x,"age", {xx: function(){"hello there"}})

console.log(x.xx()) */




/* var player = {
    name:"dom",
    age:25,
    sex:"male",
    level:3,
    get health(){return 10 + player.level * 15}
}

console.log(player.health) */


/* Object.defineProperty(player, "health", {
    get: function () {
        return 10 + ( player.level * 15 );
    }
}) */



/* var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!'); */

/* expr = "Bananas";

switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?"); */


/* 
  function reve(x){
    
    let delka = x.length
    let z = x[delka-1]
    return +z +1
 }

z = "ahoj magore1"

console.log(reve(z)) */









