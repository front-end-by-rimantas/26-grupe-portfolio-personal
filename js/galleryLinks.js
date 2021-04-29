function galleryLinks() {
    const DOM = document.querySelector('#links');

    DOM.innerHTML += `<a href="#">ALL</a>
    <a href="#">VECTOR</a>
    <a href="#">RASTER</a>
    <a href="#">UI/UX</a>
    <a href="#">PRINTING</a>`
}

export {galleryLinks};