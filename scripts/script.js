// Get HTML elements and define as variables
var menuButton = document.querySelector("header section:first-of-type a");
var menuIcon = document.querySelector("header section:first-of-type a img");
var navMenu = document.querySelector("header nav ul");

var dopperLogo = document.querySelector("header section:first-of-type > img");
var headerSection = document.querySelector("header section:first-of-type");

// More variables?

menuButton.addEventListener("click", showMenu); 

function showMenu() { // Open and close nav menu
    navMenu.classList.toggle("showMenu");
    menuIcon.classList.toggle("exitMenu");
    menuIcon.src = "./images/cross.png"
    dopperLogo.src = "./images/dopperblauw.svg";
}

// Fixed positions for the header
// When the user scrolls down 10px from the top of the document, add class 'scrollHeader' and change logo
window.onscroll = function() { 
    scrollChangeMenu()
}

function scrollChangeMenu() {
    if (document.body.scrollTop = 0){
        return
    } else {
        headerSection.classList.add("scrollHeader");
        dopperLogo.src = "./images/dopperblauw.svg";
    }
  }


// Function for opening summary, change list type with class openSummary


