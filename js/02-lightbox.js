import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </li>`
  ).join("");
}

function renderGallery() {
    const galleryItemsMarkup = createMarkup(galleryItems);
    galleryList.innerHTML = galleryItemsMarkup;
  }
  
  renderGallery();
  
  // SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });