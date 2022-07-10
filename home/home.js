let ham = document.getElementById("v-hamburger");
let hham = document.getElementById("h-hamburger");
let logo = document.getElementById("v-main-logo-holder");
let bottomfooter = document.getElementById("foot");
let nav = document.getElementById("topnav");
let close = document.getElementById("ham_icon");
let gallery = document.getElementById("slider");
let intro = document.getElementById("section-2");
let summary = document.getElementById("section-3");
let imgs = document.getElementById("image-gallery");

// let slider = document.getElementById("gallery_slider");

// image fade
let slideIndex = 0;


document.addEventListener("DOMContentLoaded", function(){
  ham.style.display = "none";
  // logo.style.display = "block";
  intro.style.display = "block";
  // gallery.style.display = "block";
  imgs.style.display = "block";
  summary.style.display = "block";
  bottomfooter.style.display = "block";
  nav.style.backgroundColor = "transparent";
  close.style.backgroundImage = "url('../assets/hamburger.png')";
  close.style.backgroundSize = "60%";
  close.style.backgroundRepeat = "no-repeat";
  close.style.margin = "6%";
  close.style.marginRight = "-2%";
  gallery.style.display = "block";
});



function hamburgerToggle() {
    
    if (ham.style.display === "block") {
        ham.style.display = "none";
        logo.style.display = "block";
        intro.style.display = "block";
        // gallery.style.display = "block";
        imgs.style.display = "block";
        summary.style.display = "block";
        bottomfooter.style.display = "block";
        nav.style.backgroundColor = "transparent";
        close.style.backgroundImage = "url('../assets/hamburger.png')";
        close.style.backgroundSize = "60%";
        close.style.backgroundRepeat = "no-repeat";
        close.style.margin = "6%";
        close.style.marginRight = "-2%";
        gallery.style.display = "block";

    } else {
        ham.style.display = "block";
        logo.style.display = "none";
        intro.style.display = "none";
        // gallery.style.display = "none";
        imgs.style.display = "none";
        summary.style.display = "none";
        bottomfooter.style.display = "none";
        nav.style.backgroundColor = "#FEFBF4";
        close.style.backgroundImage = "url('../assets/close.png')";
        close.style.backgroundSize = "cover";
        close.style.backgroundSize = "100%";
        close.style.backgroundRepeat = "no-repeat";
        close.style.margin = "16%";
        close.style.marginRight = "10%";
        gallery.style.display = "none";

    }
}



// showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  console.log("testing");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

