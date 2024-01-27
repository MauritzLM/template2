
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
// select faq-items, answers and images
const faqItems = document.querySelectorAll(".faq-container .faq-item");
const faqAnswers = document.querySelectorAll(".faq-item p");
const faqIcons = document.querySelectorAll(".faq-item img");

for(let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", () => {
        faqAnswers[i].classList.toggle("hidden");

        faqIcons[i].classList.toggle("rotate");
    });
};
