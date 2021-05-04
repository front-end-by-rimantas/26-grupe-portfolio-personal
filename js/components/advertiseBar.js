function renderLogos(data) {
    const DOM = document.querySelector('#adsLogo');

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="soloBrand">
                    <img src="${data[i].img}" alt="${data[i].name}">
                </div>`

    }
    DOM.innerHTML = HTML;
}
export { renderLogos }