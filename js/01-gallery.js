import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const container = document.querySelector(".gallery");

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>`
    ).join("");
};


function handleClick(event) {
    event.preventDefault()

    if (event.target === event.currentTarget) {
        return;
    }



    const modalImg = event.target.closest(".gallery__link").getAttribute("href");
    
    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${modalImg}" alt="${modalImg.description}">
    `);
    // console.log(modalImg)
    instance.show()



    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            return instance.close();
        }
        return;
    })
}