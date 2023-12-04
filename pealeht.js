// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  if (document.body.scrollTop < 10){
    document.getElementById("minust").classList.add("active");
    document.getElementById("teenused").classList.remove("active");
  }
  else{
    document.getElementById("minust").classList.remove("active");
    document.getElementById("teenused").classList.add("active");
  }
}

//allikas: https://www.w3schools.com/howto/howto_js_sticky_header.asp


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 80) return;
      c.scrollTop = a + (b - a) / 80 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 1);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

//allikas: https://jsfiddle.net/rjSfP/

