


/* function x(a, b, c){
    return a + b + c
}

var pole = [1, 5, 7] */
/* console.log(x(...pole)); */
/* console.log(x.apply(null, pole)); */


/* function many(a,b,c,d,e,f){
    return a + b + c +d +e +f
}

var pole = [2, 5];
var louka = [4,9];
var hlina = [3, 15];

console.log(many(5,...louka,...hlina,...[7])) */

// pole = [10,15]



/* function rekurze(...pole){
     var x = pole[0] * ()
}

console.log(rekurze(10,15,17,18,50,25)) */

/*  
/* var pole = [1, 2, 3, 4, 5];
console.log(pole.indexOf(5))
console.log(pole.length); */


/* function pole(x,y,z){
z.push(y)
z.length < x ? pole(x,++y,z):z; 
return z;
}

console.log(pole(10,1,[])) */


/* var x;
var foo = x || 'default string';
console.log(foo); */




/* function xx(x,y,z){
  
    var pole = []
    if((x==1&&y==0)||(y==1&&x==0)){  
        pole.push(1);
    }
    for(let i =0;i<z;i++){
        var o = x
        pole.push(x+y)
        x = y
        y = (o+y)
    }
    return pole;
}
console.log(xx(7,2,8)); */

/* 
function countDownFrom(number) {
	if (number === 0) {
		return;
	}

    console.log(number);    
    countDownFrom(number - 1);
}

countDownFrom(5); */

/* 
console.log("ahoj")
console.log("ahoj")
console.log("ahoj")
console.log("ahoj")


function count(x){
    if(x===0){
        return 10
    }

    console.log(x);
    count(x-1);
}

count(5); */



/* function x(par){
    while(par>5){
        console.log(par--)
    }
}

x(10);6 */


/* var x =[8,1,0,1,2,3,4,5,6,];
console.log(Math.max(x[1], x[2]));
 */
/* var foo;
 foo(function(x){
     console.log(x)
 })

 foo("ahoj") */


 function costr(){
     Constr
     this.name = name,
     this.age = age
 }


var x = {
    name:"DOM",
    age:25
}

array = ["dom", 25]

var z = new Object(Costr("DOM", 25))
console.log(z.name);

