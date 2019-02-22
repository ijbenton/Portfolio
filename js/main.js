//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
var htmlCloseIcon = document.createElement("div");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //menuBtn.classList.add("close");
    //Empty resultsList and attribute list
    while (menuBtn.firstChild) {
      menuBtn.removeChild(menuBtn.firstChild);
    }
    htmlCloseIcon.innerHTML = '  <i class="fas fa-times fa-2x"></i>';

    menuBtn.appendChild(htmlCloseIcon);
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    while (menuBtn.firstChild) {
      menuBtn.removeChild(menuBtn.firstChild);
    }
    htmlCloseIcon.innerHTML = ' <i class="fas fa-bars fa-2x"></i>';

    menuBtn.appendChild(htmlCloseIcon);
    //menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}
