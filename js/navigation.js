const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {
    mobileMenu.classList.add("is-open");
    menuButton.classList.add("is-open");

    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    mobileMenu.classList.remove("is-open");
    menuButton.classList.remove("is-open");

    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {

    if (mobileMenu.classList.contains("is-open")) {
        closeMenu();
    } else {
        openMenu();
    }

});

mobileMenuLinks.forEach(link => {

    link.addEventListener("click", () => {
        closeMenu();
    });

});