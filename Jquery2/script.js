$(document).ready(function(){
    $("p:nth-child(2)").click(function(){
        $(this).hide()
    })
})



h1 = document.getElementById("bloky").attributes[0].value
if(h1=="animal"){
console.log("hello")
}


$("button").click(function(){
    $("p").toggle("ease")
})


$("#slider").click(function(){
    $("#slide").slideDown(1000)
})