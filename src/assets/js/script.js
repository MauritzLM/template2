
// mobile nav toggle
let navigation = document.querySelector(".navigation");
let openNavButton = document.querySelector(".open-nav-button");
let closeNavButton = document.querySelector(".close-nav-button");

// open menu
openNavButton.addEventListener("click", () => {
    navigation.classList.toggle("show-menu");
    navigation.setAttribute("aria-expanded", "true");
});


// close menu
closeNavButton.addEventListener("click", () => {
    navigation.classList.toggle("show-menu");
    navigation.setAttribute("aria-expanded", "false");
});

// FAQ functionality