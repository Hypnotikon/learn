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



  let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
console.log(self);
console.log(prot);