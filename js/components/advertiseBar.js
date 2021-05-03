function renderLogos(data) {
    const DOM = document.querySelector('#adsLogo');

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<img class= "logo" src="${data[i].img}" alt="">`

    }
    DOM.innerHTML = HTML;
}
export { renderLogos }