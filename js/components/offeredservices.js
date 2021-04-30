function offeredservices( data ) {
    const DOM = document.querySelector('#services_offer');

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="col-12 col-md-6 col-lg-4 h">
                    <div>
                        <i class="${data[i].icon} ico"></i>
                        <a href="#" class="textField">
                            <h3 class="offerTitle">${data[i].title}</h3>
                        </a>
                    </div>
                    <div>
                        <p class="offerText">${data[i].text}</p>
                    </div>
                </div>`
    }

    DOM.innerHTML = HTML;
}

export { offeredservices }