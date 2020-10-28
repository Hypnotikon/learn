
/* 
$("button").click(function(){
    $("h1").hide(1000)
})


 $("h1").dblclick(function(){
    $(this).hide();
})

$("input").focus(function(){
    $(this).css("background-color", "blue")
})

$("h2").mouseenter(function(){
    console.log("you entered p1")
})

$("input").blur(function(){
    $(this).css("background-color", "green");
  });

  */


//mouseup
//mousedown
//mouseleave
//mousecenter



/* 
var h  = document.getElementById("hh")
var button = document.getElementsByTagName("button")[0]
var p = document.getElementById("pp")

button.addEventListener("click", fun)

function fun(){
    if(h.style.color=="red"){
        h.style.setProperty("color", "blue")
    }
    else{
    h.style.setProperty("color","red")
}
}
 */


/* $(document).ready(function(){
    $("#btn").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    })
})
 */

/* $(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);   
    })
})
 */


/* 
$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  }); */

/*   $("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });


  $("#momo").click(function(){
      $("#mega").slideToggle(1000)
  })

  $(document).ready(function(){
  $("button").click(function(){
      $("#testiv").animate({left: "250px"})
  })
})
 */

/*  $(document).ready(function(){
     $("button").click(function(){
         $("div").animate({left: "+=250px", width: "+=100px"})
     })
 }) */

 $(document).ready(function(){
     $("#button").click(function(){
         var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
     })
 })

 $("#btn").click(function(){
     $("#slider").slideDown(4000,z)
 })

$("#stp").click(function(){
    $("#slider").stop()
})


function z(){
    alert("a je to")
}


/* $("#para").click(function(){
    var x = $("p");
    x.slideUp(1000,()=> x.text("whats up"))
    x.slideDown(1000)
})
 */

/* $("#txt").click(function(){
    alert("text is" + $("#pes").text().toUpperCase())
}) */
var o =$("p").text()
function reve(){
    var x = $("p").text()
     if(!x){
         o++
        $("p").text(1)
    } 
    else{
        o++
        $("p").append(o)
        
    }

}

$("#para").click(function(){
    $("a").attr("href","https://www.youtube.com/watch?v=12vh55_1ul8&list=RDRjzujFoWxY8&index=10")
})

$("#adding").click(function(){
    $("p").append(reve())
})

