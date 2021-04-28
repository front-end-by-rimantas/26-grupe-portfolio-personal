function galleryImg(selector, data) {
    const DOM = document.querySelector(selector);

    let HTML = '';
    for (let {img, name, description} of data) {
        HTML += `<div class="col-4 img">
                    <img src="${img}" alt="">
                    <h3>${name}</h3>
                    <p>${description}</p>
                </div>`
    }
    DOM.innerHTML += HTML;
}

export {galleryImg};