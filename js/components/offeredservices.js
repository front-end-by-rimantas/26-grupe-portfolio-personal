function offeredservices( data ) {
    const DOM = document.querySelector('#services_offer');

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="col-12 col-md-6 col-lg-4">
                    <a href="#" class="${data[i].icon} ico"></a>
                    <a href="#" class="serviceName">
                    <h3 class="serviceName">${data[i].title}</h3></a>
                    <p class="serviceText">${data[i].text}</p>
                    </div>`;
    }

    DOM.innerHTML = HTML;
}

export { offeredservices }