var x = document.getElementById("myDIV");

function myFunction() {
    x.style.animation= "mymove 5s";   
       // Standard syntax
  }

x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}
