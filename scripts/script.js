// Get HTML elements and define as variables
var menuButton = document.querySelector("header section:first-of-type button");
var menuIcon = document.querySelector("header section:first-of-type button img");
var navMenu = document.querySelector("header nav ul");

var dopperLogo = document.querySelector("header section:first-of-type > img");
var headerSection = document.querySelector("header section:first-of-type");

var scrollPosition = window.scrollY; // sets scroll position from the top of the page

// listens to event "click" on menuButton
menuButton.addEventListener("click", showMenu); 

function showMenu() { // Open and close nav menu
    navMenu.classList.toggle("showMenu"); // uses translateX to move nav into screen

    // conditional statement checks if navMenu contains class .showMenu
    if (navMenu.classList.contains("showMenu")) { 
        menuIcon.src = "./images/cross.png"; // changes icon to a cross
        menuIcon.classList.add("exitMenu"); // gives blue background to cross icon
    } else {
        menuIcon.src = "./images/menu-white.png"; // changes icon back to menu 
        menuIcon.classList.remove("exitMenu"); // deletes blue background
    }
};

// When the user scrolls down from the top of the document, add class 'scrollHeader' and change logo
// window.addEventListener("scroll", scrollChangeMenu);

// function scrollChangeMenu() {
//     if (scrollPosition <= 0) {
//         headerSection.classList.add("scrollHeader"); // gives transparent background and border-bottom white
//         menuIcon.classList.add("scrollHeader"); // gives icon white background
//         menuIcon.src = "./images/menu.png"; // changes icon into blue variation
//         dopperLogo.src = "./images/dopperwit.svg"; // changes dopper logo into white variation

//     } else {
//         headerSection.classList.remove("scrollHeader");
//         menuIcon.classList.remove("scrollHeader");
//         menuIcon.src = "./images/menu-white.png";
//         dopperLogo.src = "./images/dopperblauw.svg";

//     }

//     console.log(scrollPosition); // always logs 0?
// };

