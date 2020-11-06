$("p:nth-child(1)").click(function(){
    $("p:nth-child(n+2)").slideToggle()
})

var x = $("p:nth-child(n+2)")
$("p:nth-child(n+2)").click(function(){
    $("p:nth-child(1)").text($(this).text())
    x.slideUp()
    var result = $("p:nth-child(1)").text()
    $("body").css("background-color", result)
    
})

$(".gradient").css("backround-color", gradient)









