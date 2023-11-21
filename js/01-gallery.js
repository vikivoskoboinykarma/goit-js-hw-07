import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const container = document.querySelector(".gallery");
let instance = null;  

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>`
    ).join("");
};

function handleKeyPress(event) {
  if (event.code === 'Escape' && instance) {
    instance.close();
  }
}

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault()

  if (event.target === event.currentTarget) {
    return;
  }
  const modalImg = event.target.closest('.gallery__link').getAttribute('href');

  if (instance) {
    instance.close(); 
    instance = null; 
  }


  instance = basicLightbox.create(
    `
      <img class="gallery__image" src="${modalImg}" alt="${modalImg.description}">
    `,
    {
      onShow: () => {
        document.addEventListener('keydown', handleKeyPress);
      },
      onClose: () => {
        document.removeEventListener('keydown', handleKeyPress);
      },
    }
  );

  instance.show();
}