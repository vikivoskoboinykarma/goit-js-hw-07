import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;
  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

function renderGallery() {
  const galleryItemsMarkup = galleryItems.map(createGalleryItem);
  galleryList.append(...galleryItemsMarkup);
}

renderGallery();

//  SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  