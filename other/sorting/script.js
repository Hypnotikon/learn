/* var pole = [3000, 10, 3, 4,5];
var pole2 = pole.sort()
var x2 = Math.max(...pole);
console.log(x2)
var x = Math.max.apply(Math, pole)
console.log(x); */
/* var pole3 = pole.sort(function x (a, b){return a-b})
console.log(pole3[0]) */


/* console.log(pole2)

var pole3 = pole.sort(function(a,b){return a - b})
var pole4 = pole.sort(function(a,b){
    b = Math.random()
    a = 0.5
    return 0.5 - b })
console.log(pole3)
console.log(pole4)

var pole4 = pole.sort(function(){
    return 0.5 - Math.random()})

    console.log(pole4) */


   /*  var pole = [1, 5, 7, 8, 15, 22, 35, 88, 25, 10, 5]
    pole = pole.filter((item)=>{
        return item == 5
    })
    console.log(pole); */


   /*  var x = "I like red and blue and yellow. But red is the best"
    var y = x.replace("red", "horse");
    var z = x.replace(/red/gi, "horse");
    console.log(y)
    console.log(z) */


 /*    var str = "RAIN RAIN RAIN BRAIN RAIN RAIN"
    var pattern = /brain/i
    var rest = str.match(pattern);
    console.log(str.lastIndexOf("RAIN"));
  */


/*   var x = "Hello there"
  var y = x.slice(2,-1)
  var o = x.slice(0)
  console.log(o)
  console.log(y); */

/*   var x = "how are you doing";
  var y = x.replace(/\s/g, "");
  console.log(y); */


/* var x = "ahoj jak se máš"
var y = x.toLocaleUpperCase()
console.log(y) */


/*   
var x = "    AHOJ JAK SE MÁŠ   "
x = x.toLocaleLowerCase()
x = x.trim()
console.log(x); */

/* var x = +"1"
var o = x.valueOf()
console.log(typeof(o))
console.log(x.valueOf())

var xx = new Date()
console.log(xx.valueOf())
 */


/* var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "\n"; 
  continue list;
  text += cars[1] + "\n"; 
  text += cars[2] + "\n"; 
  break list;
  text += cars[3] + " "; 
}

console.log(text); */


/* labelmark:   
for(x=0; x<6; x++)
{  
var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("The value of x is : " +x);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1); 
  
if(x==3)
{  
break labelmark;  
}  
}  
var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("The last value of x is : " +x);
newParagraph1.appendChild(newText1);
document.body.appendChild(newParagraph1); */


/* var x = ""
label:
{for (let i =0; i<5;i++){
    
    label2:
    for(let o = 0; o<10;o++){
         x += "ahoj"
         if(o==3){
             break label
         }
        }
 x += i
}}

console.log(x); */


/* 
function x(){
    console.log(ahoj)
}

console.log(x instanceof Object); */


/* var body = "return Math.PI * radius * radius";
var circle = new Function("radius", body);
console.log((circle(5)));    */


/* var circle = {
    radius : "10",
    area : function() { 
       return Math.PI * this.radius * this.radius; 
    }
};
console.log((circle.area()));                // => 314.15..
 */

/*  var x = 10 * 5
 debugger;
console.log(x);
 */


/*  var x = [1, 5, 7, 8, 9, 10, 15, 20]

var xx = 0
 for(z in x){
    xx = (xx + z)
 }

 console.log(xx); */


/*  var x;

 if(!x){
     console.log("čau");
 } */

/* 
 var x = parseInt(11/2, 10);
 console.log(x); */




/*  var oo = new Function("x",original);
 console.log(oo(5)) 
 */


/*  const x = new Function("a", "b", "return a + b")
 console.log(x(5,5)) */



/* var x= {dom:"hrom", name:"hlupak"}
var y = {...x}
var e = JSON.parse(JSON.stringify(x))
console.log(e);
var o = Object.assign({}, x)
console.log(o);
 */





/* class Article{
    constructor(title,datum){
        this.title = title,
        this.datum = datum
    }
    static sortovani(a,b){
        return a.datum - b.datum
    }
}

function sorr(a,b) {
    return a.datum - b.datum
}


var articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2017, 11, 1))
  ]

articles.sort(sorr);
console.log(articles[0].title);



 */



 /* class Identita{
     constructor(jmeno,prijmeni){
     this.jmeno = jmeno,
     this.prijmeni = prijmeni,
     set full(value){
        [this.jmeno, this.prijmeni] = value.split(" ");
     }
    }
    /* get full(){
        return this.jmeno + this.prijmeni
    } */
/*  }
identita.full = "Domingo kdo"
 console.log(identita.jmeno) */
 


/* function x(jmeno,prijmeni){
this.jmeno = jmeno,
this.prijmeni = prijmeni,
set full(value){
   [this.jmeno, this.prijmeni] = value.split(" ");
}

x.full = "domingo bingo"
console.log(x.jmeno); */


/* var x = {
    name:"dom",
    age:25
}


Object.defineProperty(x,"full", {value:"42"});
console.log(Object.getOwnPropertyNames(x))
console.log(Object.values(x)) */

/* Object.defineProperty(x,"fullname", get(){
    return this.name + this.age
}) */

/* 
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true
});

console.log(Object.getOwnPropertyDescriptor(object1));
 */

/* var y = new Date().getTime()
console.log(y); */

/* 
var x = new Date().getFullYear()
var o = x.se
console.log(x); */


/* var arr = [ "John", "Peter", "Sally", "Jane" ];
var myJSON = JSON.stringify(arr);
console.log(typeof(myJSON));
 */


/* var obj = { name: "John", today: new Date(), city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON) */

/* 
var x = [];
x.length = 1;
x.push("ahoj", "ahoj")
console.log(x);
console.log(x.length) */


/* var x = new Array(5).fill("ahoj");
x.push("nazdar");
console.log(x);
 */


/* var arr = new Array(50).fill().map((d,i)=>++i)
console.log(arr) */

/* var x = new Array(50)

var z = x.map((value, index)=> value +1)
console.log(z); */

/* 
var numbers = new Array(50).fill(0);
var newarray = numbers.map((num,index)=>num=index+1)
console.log(newarray) */

/* 
var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

var x = persons.map((value)=>{return (value.firstname +" "+ value.lastname)});
x = x.join(" ")
console.log(x); */



/* var person = [1, 6, 6, 5, 0, 0]
person2 = person.reduce((value,index)=>{
return value+ index},0)
console.log(person2) */


/* var person2 =person.some((value,index)=>{
    index = 4;
    return value>5})
console.log(person2); */

var x = ("2 + 2")
console.log(eval(x));