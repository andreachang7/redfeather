function hamburgerToggle() {
    let ham = document.getElementById("hamburger");
    let logo = document.getElementById("main_logo_holder");
    let bottomfooter = document.getElementById("foot");
    let top = document.getElementById("topnav");
    let close = document.getElementById("ham_icon");
    if (ham.style.display === "block") {
        ham.style.display = "none";
        logo.style.display = "block";
        bottomfooter.style.display = "block";
        top.style.backgroundColor = "transparent";
        close.style.backgroundImage = "url('../assets/hamburger.png')";
    } else {
        ham.style.display = "block";
        logo.style.display = "none";
        bottomfooter.style.display = "none";
        top.style.backgroundColor = "#FEFBF4";
        close.style.backgroundImage = "url('../assets/close.png')";

    }
  }