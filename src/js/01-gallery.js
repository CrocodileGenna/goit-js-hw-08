// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

console.log(galleryItems);

const imgConteiner = document.querySelector(".gallery");

const creatItem = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>`;
    })
    .join(" ");
};

imgConteiner.insertAdjacentHTML("beforeend", creatItem(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});