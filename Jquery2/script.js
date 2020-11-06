/* $(document).ready(function(){
    $("p:nth-child(2)").click(function(){
        $(this).hide()
    })
})



h1 = document.getElementById("bloky").attributes[0].value
if(h1=="animal"){
console.log("hello")
}


/* $("button").click(function(){
    $("p").toggle("ease")
}) */

/* const { isEmptyObject } = require("jquery") */


/* $("#slider").click(function(){
    $("#slide").slideDown(3000, )
})

$("#stop").click(function(){
    $("#slide").stop()
})



$(">h1:nth-child(1)").slideUp(1000).slideDown(1000)

console.log($("h1:nth-child(1)").text())


if(10>9){
    document.getElementById("tlacidlo").setAttribute("disabled", "disabled")
}

$("a").click(function(){
    alert($(this).attr("href"))
})


$("#1").click(function(){
    $(".1").text("hej you")
})

$("#2").click(function(){
    $(".2").html("<sub>hej you</sub>")
})

$("#3").click(function(){
    $("input").text("hej you")
}) */
 

/* 
$(document).ready(function(){
    $(".button").click(function(){
        $(".old").text(function(i, string){
         return "old text is " + string + " new text " + i
        })
    })
})

    $(".btn").click(function(){
        $(".new").text(function(){
            return $(".old").text()
        })
    }) */



/* $(document).ready(function(){
    $("#btn1").click(function(){
      $("#test1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
      });
    }); */


  /*   $("a").addClass("test")

    $( document ).ready(function() {
 
        $( "a" ).click(function( event ) {
     
            alert( "Thanks for visiting!" );
            event.preventDefault();
            event.
            $(this).hide("slow")
     
        });
     
    });
 */

/* var para = document.getElementsByTagName("p")[1]

var x = document.getElementById("intr")
x.addEventListener("keypress",function(ev){
   var charCode = ev.charCode
    if(charCode !=0){
        if(charCode < 97 || charCode > 122){
            ev.preventDefault();
            alert("dont press uppercase letters")
           
        }
    }

}) */





/* var x = new Array(100).fill(0,2,10) */


/* x[Symbol.iterator] = function*(){
    var i = 0
    while(i< x.length){
        yield i
        i++
    }
}
x = [...x] */




 /*  
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
   */


/*   new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
}); */


/* new Promise((resolve) => {
    resolve(setTimeout(()=>{
        console.log("hej")
    }, 2000))
    
})
.then(console.log("hm")) */

/* .then(x)


function x(){
    try{
       if(10 > 5) throw new err("hej");
    }
    catch(err){
        console.log(err)
    }
} */



/* function x(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("hej")
        },1500)
    })
}
  

async function z(){
    console.log("hello")
    var o = await x()
    console.log(o);
}

z()


new Promise(resolve,reject){
    resolve()
} */

/* 
var p2 = new Promise((resolve, reject)=> {
    resolve(xx);
    reject("nope");
  });

p2.catch((err)=>{
    console.log(err.message)
})
  
p2.then((value)=>{
    console.log(value)
    return value + 1
}).then((valuee)=>{
    console.log(valuee)
})


p2.then((value)=>{
    console.log(value)
}) */


/* 
function resolved(result) {
    console.log('Resolved');
  }
  
  function rejected(result) {
    console.error(result);
  }
  
  Promise.reject(new Error('fail')).then(resolved, rejected);
  // expected output: Error: fail
   */


/* var x = 11

   try{
       if(x>10) throw new isEmptyObject("too big")
   }
   catch(er){
       console.log(er)
   }
   finally{
       setTimeout(()=>console.log("konec"),2000)
   } */
   
/* 
$("p").click(function(){
    $(this).animate({
        opacity:0.5
    })
})

 */


$( "li.third-item" ).nextAll().addBack().css( "background-color", "red" );

$("div.inner").after("<p>whats up</p>")