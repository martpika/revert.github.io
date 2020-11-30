function mailupmenu(){
  var x = document.getElementById("changer");
  if (x.className === "mail-container"){
    x.className += " first";
  }else{
  x.className = "mail-container";
}
}

function mailupmenulast() {
  var x = document.getElementById("changer");
  if (x.className === "mail-container first"){
    x.className += " last";
  }else{
    x.className = "mail-container first";
  }
}

