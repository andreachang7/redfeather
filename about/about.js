let ham = document.getElementById("v-hamburger");
let s1 = document.getElementById("section-1");
let s2 = document.getElementById("section-2");
let s3 = document.getElementById("section-3");
let bottomfooter = document.getElementById("foot");
let nav = document.getElementById("topnav");
let close = document.getElementById("ham_icon");
let vrf = document.getElementById("v-rf-icon");
let hrf = document.getElementById("h-rf-icon");


document.addEventListener("DOMContentLoaded", function(){
    console.log("laoded");
    ham.style.display = "none";
    s1.style.display = "flex";
    s2.style.display = "flex";
    s3.style.display = "flex";
    
    vrf.style.display = "flex";
    vrf.style.backgroundImage = "url('../assets/secondary-logo-stroke.png')";
    vrf.style.backgroundSize = "cover";
    vrf.style.backgroundRepeat = "no-repeat";
    vrf.style.backgroundSize = "90%";


    close.style.backgroundImage = "url('../assets/red-hamburger.png')";
    close.style.backgroundSize = "cover";
    close.style.backgroundSize = "60%";
    close.style.backgroundRepeat = "no-repeat";
    close.style.margin = "6%";
    close.style.marginRight = "-2%";
});


function hamburgerToggle() {
    
    if (ham.style.display === "block") {
        ham.style.display = "none";
        vrf.style.display = "flex";
        vrf.style.backgroundImage = "url('../assets/secondary-logo-stroke.png')";
        vrf.style.backgroundSize = "cover";
        vrf.style.backgroundRepeat = "no-repeat";
        vrf.style.backgroundSize = "90%";
        s1.style.display = "flex";
        s2.style.display = "flex";
        s3.style.display = "flex";
        bottomfooter.style.display = "block";
        nav.style.backgroundColor = "transparent";
        close.style.backgroundImage = "url('../assets/red-hamburger.png')";
        close.style.backgroundSize = "cover";
        close.style.backgroundSize = "60%";
        close.style.backgroundRepeat = "no-repeat";
        close.style.margin = "6%";
        close.style.marginRight = "-2%";

    } else {
        ham.style.display = "block";
        vrf.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "none";
        bottomfooter.style.display = "none";
        nav.style.backgroundColor = "#FEFBF4";
        close.style.backgroundImage = "url('../assets/close.png')";
        close.style.backgroundSize = "cover";
        close.style.backgroundSize = "100%";
        close.style.backgroundRepeat = "no-repeat";
        close.style.margin = "16%";
        close.style.marginRight = "10%";

    }
}