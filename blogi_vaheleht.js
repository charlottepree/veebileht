// Lisab aknale "kuulaja", mis jälgib scrollimist

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

// Funktsioon annab võimaluse navigatsiooniriba muuta alla kerides stickyks ehk see jääb püsima sinna. See eemaldab sticky, kui tagasi üles kerida.

function myFunction() {
  if (window.scrollY + 2 > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//allikas: https://www.w3schools.com/howto/howto_js_sticky_header.asp





// myFunction1-3 annab blogipostitusel võimaluse nupuvajutusega avada tekst täismahus ja siis soovi korral vähendada tagasi algkujule.
// If osa funktsioonidel laseb nupule vajutades vahetada "vähem" ja "rohkem" näitamise vahel.

function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rohkem";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Vähem";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rohkem";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Vähem";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rohkem";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Vähem";
    moreText.style.display = "inline";
  }
}


//allikas: https://www.w3schools.com/howto/howto_js_read_more.asp

