
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

for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", () => {
        faqAnswers[i].classList.toggle("hidden");

        faqIcons[i].classList.toggle("rotate");
    });
};


// image viewer modal (not in use atm)*

// click on image, change src of modal image, change styles of modal,
// const galleryImages = document.querySelectorAll("#gallery .image-container img");
// const modalImage = document.querySelector(".image-viewer .current-image img");
// const imageViewer = document.querySelector(".image-viewer");
// const closeViewerButton = document.querySelector(".image-viewer .close-viewer");

// // populate array on page load
// const imageSrcArray = [];

// const populateArray = () => {
//     galleryImages.forEach(image => {
//         imageSrcArray.push(image.src);
//     });
// };

// populateArray();

// let current_index;

// galleryImages.forEach(image => {
//     image.addEventListener("click", (e) => {
//         // find index of image in array
//         current_index = imageSrcArray.indexOf(image.src);

//         // change modal image src
//         modalImage.src = imageSrcArray[current_index];

//         // change modal styles
//         imageViewer.classList.add("show-viewer");
//     });
// });

// fix button clicking (its clicking on image)*

// change image with left and right buttons
// imageViewer.addEventListener("click", (e) => {
//     // left
//     if (e.target.matches(".image-viewer .arrow-left")) {
//         // update current index
//         current_index === 0 ? current_index = imageSrcArray.length - 1 : current_index--;
//         modalImage.src = imageSrcArray[current_index];
//     };

//     // right
//     if (e.target.matches(".image-viewer .arrow-right")) {
//         // update current index
//         current_index === imageSrcArray.length - 1 ? current_index = 0 : current_index++;
//         modalImage.src = imageSrcArray[current_index];
//     };

//     // close
//     if (e.target.matches(".image-viewer .close-viewer")) {

//         imageViewer.classList.remove("show-viewer");
//     };
// });


