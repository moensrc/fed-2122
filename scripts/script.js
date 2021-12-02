// Get HTML elements and define as variables
var menuButton = document.querySelector("header section:first-of-type a");
var navMenu = document.querySelector("header nav ul");

var dopperLogo = document.querySelector("header section:first-of-type > img");
var headerSection = document.querySelector("header section:first-of-type")

// More variables?


menuButton.addEventListener("click", showMenu); 

function showMenu() { // Open and close nav menu
    navMenu.classList.toggle("showMenu")
}

// When the user scrolls down 10px from the top of the document, add class 'scrollHeader' and change logo
window.onscroll = function() { 
    scrollChangeMenu()
}

function scrollChangeMenu() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        headerSection.classList.toggle("scrollHeader");
        dopperLogo.src = "./images/dopperblauw.svg";
    } else {
        console.log("what's happening?")
    }
  }


// Fixed positions for the header
