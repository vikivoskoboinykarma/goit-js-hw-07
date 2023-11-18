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
  image.setAttribute('data-source', original);

  link.appendChild(image);
  listItem.appendChild(link);
  return listItem;
}

function renderGallery() {
  const galleryItemsMarkup = galleryItems.map(createGalleryItem);
  galleryList.append(...galleryItemsMarkup);
}

renderGallery();

function handleGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImageURL = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImageURL}" width="800" height="600">
  `);

  instance.show();

window.addEventListener('keydown', handleKeyPress);


function handleKeyPress(event) {
  if (event.key === 'Escape') {
    instance.close();
    
      window.removeEventListener('keydown', handleKeyPress);
  }
}
}


gallery.addEventListener('click', handleGalleryItemClick);

const galleryMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryMarkup);