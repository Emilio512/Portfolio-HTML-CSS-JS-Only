/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  // Select the button
const aboutBtn = document.querySelector('.aboutBtn');
const projectsBtn = document .querySelector('.projectsBtn')
const clientsBtn = document .querySelector('.clientsBtn')
const contactsBtn = document .querySelector('.contactBtn')


// Select the slideout pane
const sideNav = document.querySelector('.sideNav');


// Buttons clicked
aboutBtn.onclick = function() {
    console.log('clicked!');
  }

  projectsBtn.onclick = function() {
    console.log('clicked!');
  }

  clientsBtn.onclick = function() {
    console.log('clicked!');
  }

  contactsBtn.onclick = function() {
    console.log('clicked!');
  }

 