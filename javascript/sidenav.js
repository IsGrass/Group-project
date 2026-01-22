//Javascript for Side Nav
const sidebar = document.querySelector('.sidenav');
const website = document.querySelector('.website');


//menu active is used to determine wether the menu is active or not
let menuActive = false;

// if we are on a smaller screen then we can run the below script you will need to refresh the page for testing purpose
if (window.screen.width < 992) {

const menu = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger-line');
//when the website recives a click it runs the code below 

website.addEventListener('click', (event) => { 
    if (!menuActive) { // Check if Menu is not active
        // Check if target of the user's click is the hamburger menu or if event target is a child of hamberger menu as sometimes the click function wouldint register because of the spans
        if (event.target == menu || menu.contains(event.target)) { 
            //opens side bar and applies styling for the website and sticky header
            website.classList.add('menu-is-active');
            menuActive = true;

        //if close menu is clicked then close the menu
        const closeMenu = document.querySelector('.close-menu');

        closeMenu.addEventListener('click', () => {
            website.classList.remove('menu-is-active');
            menuActive = false;
            });
        }
    }
});
}