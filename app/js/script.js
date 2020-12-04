function mailupmenu(){
  var x = document.getElementById("changer");
  document.getElementById("letter-changer").className = "mail";
  if (x.className === "mail-container"){
    x.className += " first";
    document.getElementById("mail-letter").className = "letter";
  }else{
    x.className = "mail-container";
    document.getElementById("letter-changer").className = "mail";
  }
}

function mailupmenulast() {
  var x = document.getElementById("changer");
  document.getElementById("letter-changer").className = "mail";
  if (x.className === "mail-container first"){
    x.className += " last";
  }
  //else{
  //   x.className = "mail-container first";
  //   document.getElementById("mail-letter").className += " lela";
  // }
}

function letterback() {
  document.getElementById("letter-changer").className += " last";
}