var pravda = true;
while(pravda){
    
const konstrukcniRychlost = 250;
var pattern = /\D/;

var maxPovolenaRychlost  = window.prompt("Maximální tychlost? ");
while(pattern.test(maxPovolenaRychlost) == true ){
 maxPovolenaRychlost = window.prompt("Maximální tychlost? ");
}

var x = window.prompt("Požadovaná rychlost? ");
while(pattern.test(x) == true){
x = window.prompt("Požadovaná rychlost? ");
}

  if(konstrukcniRychlost <= maxPovolenaRychlost && konstrukcniRychlost <= x){
      window.alert(konstrukcniRychlost);
  }
  else if(x <= konstrukcniRychlost && x <= maxPovolenaRychlost){
      window.alert(x);
  }
  else if(maxPovolenaRychlost <= konstrukcniRychlost && konstrukcniRychlost <= x){
      window.alert(maxPovolenaRychlost);
  }
  else {
      window.alert(maxPovolenaRychlost);
  }
 
}

/*   else if(maxPovolenaRychlost <= konstrukcniRychlost && x >= konstrukcniRychlost){
    return maxPovolenaRychlost;
} */


