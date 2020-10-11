d3.select("p").style("color", "red")
d3.select("body").append("p").text("ahooj");
d3.selectAll("p").style("color", "blue")

var x = document.createElement("P");
x.innerHTML = "čau jak je";
document.body.appendChild(x);

var h = document.getElementsByTagName("h1")[0]
var x = h.attributes.getNamedItem("style").value
var y = h.attributes[0].name

var removes = document.getElementsByTagName("h2")[0]
removes.attributes.removeNamedItem("style");

d3.select("div").insert("p").text("this is second paragraph");
d3.select("p").html("<span> this is new spawn</span>");
d3.select("h3").attr("class", "odstavec")
var zkouska = document.getElementById("joj");
zkouska.addEventListener("mouseout", funkc)

function funkc(){
    window.alert("vypadni");
}


