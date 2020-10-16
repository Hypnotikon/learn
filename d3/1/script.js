/* console.log("ahoj");
console.error("error")
console.warn("fdsfsd") */


/* function x(arg){
    try{
        if(arg >10) throw "moc";
        if(isNaN(arg)) throw "nic"
        if(arg <5) throw "malo"
    }
    catch(ouch){
        console.log(ouch)
    }
    
    finally{
        console.log("asi jo")
    }
}

x(11) */


/* void function test() {
    console.log('boo!');
    // expected output: "boo!"
  };
  
  try {
    test();
  } catch (e) {
    console.log(e);
    // expected output: ReferenceError: test is not defined
  }
   */


/*    (function x(){
       console.log("ahoj")

   }()) */
/* 
   function moje(arg1, arg2){
       this.name = arg1
       this.age = arg2
   }
 
   var x = new moje("john", 25);
   console.log(x.name);
   console.log(x.age); */


 /*   var x = {
       name: "Dom",
       age : 25,
       agone : function() {
           return (this.age + this.name);
       }
   }

   console.log(x.agone()) */


 /*   (function (x) {
       console.log(x)
   }(10)) */


   /* function* x(y){
      while(y < 3){
          yield y
          y++
      }
       
   } 
   
   var odpoved = x(1);

   console.log(odpoved.next().value)
   console.log(odpoved.next().value) */


  /*  function* countAppleSales () {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
      yield saleList[i];
    }
  }
    var sale =countAppleSales()
    console.log(sale.next())
    console.log(sale.next())
    console.log(sale.next())
 */

 /* function* opa(){
     yield* [1, 2, 5];
 }

 var x = opa();

 console.log(x.next().value);
 console.log(x.next().value);
 console.log(x.next().value); */


/*  function* x(i=0){
     var array = [1, 5, 7, 8]
    while(i<array.length){
        yield array[i]
        i++
    }
 }

 const generator = x()
 console.log(generator.next().value)
 console.log(generator.next())
 console.log(generator.next())
 console.log(generator.next())
 console.log(generator.next()) */

/* var x = 5
let y = 10
 {
     var x = 10
     let y = 10
 }

 console.log(x)
 console.log(y)
 
 */


 /* let x = 5
 for(let x = 0; x<10; x++){

 }
 console.log(x); */

/* var x = 10
var x = 5;
console.log(x) */

{
carname = "vok"
console.log(carname)
let carname
}