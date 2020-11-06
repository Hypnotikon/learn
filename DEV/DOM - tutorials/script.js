/* const chan = document.querySelector(".text");
const colour = document.querySelector(".colour"); */
const listr = document.querySelector(".name-list");
const addbutton = document.querySelector(".addbutton");
const listInput = document.querySelector(".listInput");
const clock = document.querySelector(".clock");

clock.classList.add("clock");

/* for(user of listr){
    user.addEventListener("click", function(){
        console.log(this);
    }) */
/*  */

/* addbutton.addEventListener("click", function(){
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    listr.appendChild(newLi);
    clock.innerHTML = new Date();

}) */

addbutton.addEventListener("click", function(){
    const content = document.createTextNode(listInput.value);
    const newli = document.createElement("LI");
    newli.appendChild(content);
    listr.appendChild(newli);
})




/* colour.addEventListener("click", function(){
    chan.classList.toggle("change");                  // chan.classList.remove/add/toggle
}) */




/* chan.classList.add("change"); */
/* 
changer.classlist.add("change"); */