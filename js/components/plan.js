function planCards(data) {
    const DOM = document.querySelector('#plans-block');

    let HTML = '';
    for (let {number, title, description, p1, p2, p3, price} of data) {
        HTML += `<div class="col-3">
                    <p>${number}</p>
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <p>${p1}</p>
                    <p>${p2}</p>
                    <p>${p3}</p>
                    <h2>${price}</h2>
                </div>`
    }
    DOM.innerHTML += HTML;
}

export { planCards };