const detailedImage = document.querySelector(".detailed_image");
const detailedTitle = document.querySelector(".detailedContainer--title");
const gallery = document.querySelectorAll(".gallery--item .gallery--item_container .gallery--item_image");
let detailedImageAnimate = document.querySelector("#id_detailed_image");

function setDetails(galleryItem) {
  detailedImage.src = galleryItem.getAttribute("src");
  detailedTitle.innerHTML = galleryItem.getAttribute("data-detailed-text");
}
function animate() {
    detailedImageAnimate.classList.remove("animate__backInRight");
    void detailedImageAnimate.offsetWidth;
    detailedImageAnimate.classList.add("animate__backInRight");
}

for(let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener("click", function () {
        setDetails(gallery[i]);
        animate();
  });
}
    
