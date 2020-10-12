/* var x = document.getElementsByTagName("button")[0].attributes.length
var y = document.getElementsByClassName("trouba")[0].attributes[0].nodeName
var z = document.getElementsByTagName("p")[0].nodeName;

console.log(x, y, z) */

/* var x = document.getElementsByTagName("h1")[0]

var klasa = document.createAttribute("class");
klasa.value = "super"
x.attributes.setNamedItem(klasa) */

/* var x = document.getElementById("jojo")

x.addEventListener("click", magor)

function magor(){
    document.getElementById("jojojo").innerHTML = "čauves";
} */


/* function* foo(index){
    while(index < 10){
        yield index;
        index++
    }
}

var foot = foo(0);
var x = 0;
do {
  console.log(foot.next().value);
   x++
    
}
while(x < 10) */


/* function* counter(value) {
    let step;
   
    while (true) {
      step = yield ++value;
   
      if (step) {
        value += step;
      }
    }
   }
   
   const generatorFunc = counter(0);
   console.log(generatorFunc.next().value);
   console.log(generatorFunc.next().value);
   console.log(generatorFunc.next().value);
 */


/* function* baz() {
    let arr = [yield, yield];
    console.log(arr);
}

var z = baz();

console.log(z.next());  
 */

function* generate() {
    yield 1;
    console.log(`result is ${result}`);
}

let g = generate();
console.log(g.next().value); 


