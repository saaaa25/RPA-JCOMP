function clickon() {
    window.location.href = 'index.html';
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  // var name = ;
}

// function getName() {
  var name = sessionStorage.getItem("NameP");
  document.getElementById('getname').innerHTML = "Hello, " + name;
// }

  