// Lisab aknale "kuulaja", mis jälgib scrollimist

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

var Teenused = document.getElementById("Teenused");
var minust = document.getElementById("minust");
var teenused = document.getElementById("teenused");


// Funktsioon esimene osa annab võimaluse navigatsiooniriba muuta alla kerides stickyks ehk see jääb püsima sinna.
// Funktsiooni teine osa vaatab, kui kaugele ma olen scrollinud ülaäärest ja vastavalt sellele muudab aktiivseks kas "Minust" või "Teenused" nupu.

function myFunction() {
  if (window.scrollY + 2 > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
// Kontrollib scrollimiskaugust
  if (window.scrollY < Teenused.offsetTop*0.9){
    minust.classList.add("active");
    teenused.classList.remove("active");
  }
  else{
    minust.classList.remove("active");
    teenused.classList.add("active");
  } 
}

// allikas: https://www.w3schools.com/howto/howto_js_sticky_header.asp
//allikas: https://www.w3schools.com/jsref/prop_element_offsettop.asp





// Funktsioon tagab selle, et nupule vajutades liigub sektsiooni "target" 

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  var targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 80) return;
      c.scrollTop = a + (b - a) / 80 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 1);
  }
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

// allikas: https://jsfiddle.net/rjSfP/

