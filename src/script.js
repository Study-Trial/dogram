const detailedImage = document.querySelector(".detailed_image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const gallery = document.querySelectorAll(".gallery--item_image");

function setDetails(galleryItem) {
  detailedImage.src = galleryItem.getAttribute("src");
  detailedTitle.innerHTML = galleryItem.getAttribute("data-detailed-text");
}
function animationOff() {
    detailedImage.classList.remove("animate__backInRight");
}

function animationOn() {
    detailedImage.classList.add("animate__backInRight");
}

for(let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener("click", function () {
        setDetails(gallery[i]);
        animationOn();
  });     
}