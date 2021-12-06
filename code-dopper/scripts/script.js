// Get HTML elements and define as variables
var menuButton = document.querySelector("header section:first-of-type a");
var menuIcon = document.querySelector("header section:first-of-type a img");
var navMenu = document.querySelector("header nav ul");

var dopperLogo = document.querySelector("header section:first-of-type > img");
var headerSection = document.querySelector("header section:first-of-type");

// listens to event "click" on menuButton
menuButton.addEventListener("click", showMenu); 

function showMenu() { // Open and close nav menu
    navMenu.classList.toggle("showMenu"); // uses translateX to move nav into screen
    menuIcon.src = "./images/cross.png"; // changes icon to a cross
    menuIcon.classList.add("exitMenu"); // gives blue background to cross
    dopperLogo.src = "./images/dopperblauw.svg"; // changes dopper logo into bliue variation
}

// Fixed positions for the header
// When the user scrolls down > 0px from the top of the document, add class 'scrollHeader' and change logo
window.onscroll = function() { 
    scrollChangeMenu()
}

function scrollChangeMenu() {
    if (document.body.scrollTop = 0){
        // headerSection.classList.remove("scrollHeader");
        return
    } else {
        headerSection.classList.add("scrollHeader"); // gives white background and border-bottom
        menuIcon.classList.add("scrollHeader"); // gives icon blue background
        menuIcon.src = "./images/menu-white.png"; // changes icon into white variation
        dopperLogo.src = "./images/dopperblauw.svg"; // changes dopper logo into bliue variation
    }
  }

