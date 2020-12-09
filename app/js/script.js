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
}


function letterback() {
  document.getElementById("letter-changer").className += " last";
}

// Global function var for playing Christmas Sound
var check = "off";
var ssound = new Audio();
ssound.src = "app/js/Happy Christmas Background Music For Videos (128 kbps).mp3";


function toggle_sound() {
  if (check === "off"){
    check = "on";
    ssound.play();
  } else if (check === "on") {
    check = "off";
    ssound.pause();
  }
}