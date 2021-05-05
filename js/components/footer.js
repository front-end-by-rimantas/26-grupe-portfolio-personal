function footer( data ) {
    const DOM = document.querySelector('#footer');

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
              <a href="${data[i].url}" class="${data[i].logo}"></a>
            </div>`
    }

    DOM.innerHTML = HTML;
}

export { footer }