// function for the dropdown animation for the navigation bar
function dropdownmenu() {
  var x = document.getElementById("dropdownclick");
  if (x.className === "topnav") {
    x.className += " responsive" // add space for .dot placing
  }else{
    x.className = "topnav"
  }
}