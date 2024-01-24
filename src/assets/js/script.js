
// mobile nav toggle
const navigation = document.querySelector(".navigation");
const openNavButton = document.querySelector(".open-nav-button");
const closeNavButton = document.querySelector(".close-nav-button");

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