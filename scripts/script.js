// Get HTML elements and define as variables
var menuButton = document.querySelector("header section:first-of-type button");
var menuIcon = document.querySelector("header section:first-of-type button img");
var navMenu = document.querySelector("header nav ul");

var dopperLogo = document.querySelector("header section:first-of-type a img");
var headerSection = document.querySelector("header section:first-of-type");

var scrollPosition = window.scrollY; // sets scroll position from the top of the page

// listens to event "click" on menuButton
menuButton.addEventListener("click", showMenu); 

// checks and updates if/when window is being scrolled in
window.addEventListener("scroll", updateScrollPosition)

function updateScrollPosition() {
    scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        headerSection.classList.remove("scrollHeader");
        menuIcon.classList.remove("scrollHeader");
        menuIcon.src = "./images/menu.png";
        dopperLogo.src = "./images/dopperwit.svg";
        navMenu.classList.remove("blueText");

    } else {
        headerSection.classList.add("scrollHeader");
        menuIcon.classList.add("scrollHeader");
        menuIcon.src = "./images/menu-white.png";
        dopperLogo.src = "./images/dopperblauw.svg";
        navMenu.classList.add("blueText");

    }
}

function showMenu() { // open and close nav menu
    scrollPosition = window.scrollY;
    navMenu.classList.toggle("showMenu"); // uses translateX to move nav into screen

    // conditional statement checks if navMenu contains class .showMenu
    if (navMenu.classList.contains("showMenu")) { 
        menuIcon.src = "./images/cross.png"; // changes icon to a cross
        dopperLogo.src = "./images/dopperblauw.svg"; // changes dopper logo into blue variation
        menuIcon.classList.add("exitMenu"); // gives blue background to icon
    } else {
        menuIcon.classList.remove("exitMenu"); // deletes blue background

        if (scrollPosition < 100) {
            dopperLogo.src = "./images/dopperwit.svg"; // changes dopper logo into blue variation
            menuIcon.src = "./images/menu.png"; // changes icon back to menu blue
        } else {
            dopperLogo.src = "./images/dopperblauw.svg"; // changes dopper logo into blue variation
            menuIcon.src = "./images/menu-white.png"; // changes icon back to menu white
        }

    }
};

