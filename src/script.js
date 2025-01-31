const detailedImage = document.querySelector(".detailed_image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const gallery = document.querySelectorAll(".gallery--item");

function setDetails(galleryItem) {
  detailedImage.src = galleryItem.querySelector("img").src;
  detailedTitle.innerHTML = galleryItem.querySelector("img").getAttribute("data-detailed-text");
}
function animationOff() {
    detailedImage.classList.remove("animate__backInRight");
}

function animationOn() {
    detailedImage.classList.add("animate__backInRight");
}

for(let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener("click", function () {
        if(gallery[i].querySelector("img").src == detailedImage.src) {
        } else {
            setDetails(gallery[i]);
            animationOn();
        }
  });     
}