window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "10%";
    document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    document.getElementById("header").style.fontSize = "80%";
  }

  else {
    document.getElementById("header").style.height = "15%";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.fontSize = "100%";
  }
}