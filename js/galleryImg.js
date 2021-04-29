function galleryImg(data) {
    const DOM = document.querySelector('#images');

    let HTML = '';
    for (let {img, name, description} of data) {
        HTML += `<div class="col-12 col-md-4 img">
                    <img src="${img}" alt="">
                    <h4>${name}</h4>
                    <p>${description}</p>
                </div>`
    }
    DOM.innerHTML += HTML;
}

export {galleryImg};