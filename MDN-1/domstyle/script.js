/* var x = document.getElementsByTagName("button")[1];
x.innerHTML = "čau" */


 /*  var x = document.getElementsByTagName("button")[0];
  var a =  x.attributes.getNamedItem("onclick").value
  x.innerHTML = a; */

/* var a = document.getElementsByTagName("BUTTON")[0];
var x = a.attributes[0].name;  
document.getElementsByTagName("p")[0].innerHTML = x;
 */


/* 
var a = document.getElementsByTagName("BUTTON")[0];
var x = a.attributes.name;
document.getElementsByTagName("p")[0].innerHTML = x; */

/* var x = document.getElementsByTagName("H1")[0];
var a = x.attributes.removeNamedItem("style");
 */

/* var x = document.getElementsByTagName("H2")[0];
var type = document.createAttribute("class");
type.value = "democlass";
x.attributes.setNamedItem(type);
 */

/* var x = document.getElementsByTagName("h1")[0].attributes[0].specified;
console.log(x) */

/* function x(){
var x = document.activeElement.tagName;
document.getElementsByTagName("H1")[0].innerHTML = x;
} */


/* document.addEventListener("click", you);
document.addEventListener("mouseover", you2);
document.addEventListener("mouseout", you3);
document.addEventListener("mousemove", rans);

function rans(){
    document.getElementById("test").innerHTML = Math.random()
}

function you(){
    document.getElementById("test").innerHTML += "click <br>" 
}
function you2(){
    document.getElementById("test").innerHTML += "mouseover <br>"
}
function you3(){
    document.getElementById("test").innerHTML += "mouseout <br>"
} */


/* window.addEventListener("load", resizers)

function resizers(){
    console.log("page is loaded");
}  */

/* function resizer() {
document.getElementById("test").innerHTML = Math.random();
} */

/* window.addEventListener("resize", (resizer)=> {
    document.getElementById("test").innerHTML = Math.random();
}) */

/* var x = document.baseURI;
document.getElementById("test").innerHTML = x;
 */

/*  function čau(){
     var x = document.createElement("P");
     var o = document.createTextNode("this is a paragrah");
     x.appendChild(o)
     document.body.appendChild(x);
 } */
/* 





var x = document.getElementsByTagName("progress")[0];
var procento = document.getElementsByTagName("p")[0];

var upDown = "up"
 window.setInterval(bar, 10000) */


 /* function bar(){


     if(upDown === "up"){
    var zacatek = x.attributes.getNamedItem("value").value;
    zacatek++
    zacatek = x.setAttribute("value", zacatek)}
    if(x.attributes.getNamedItem("value").value == "100"){
        upDown = "down"}
    if(upDown === "down"){
    zacatek = x.attributes.getNamedItem("value").value;
    zacatek--
    zacatek = x.setAttribute("value", zacatek)
    if(x.attributes.getNamedItem("value").value == "0"){
        upDown = "up";
    }
    }  
    procento.innerHTML = x.attributes.getNamedItem("value").value 
     } */

/* document.getElementById("myAnachor").focus()
document.getElementById("myAnachor").blur() */
