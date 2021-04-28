function informationBar() {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {


        HTML += `<div class="information">
                <h3 class="number">${information.number}</h3>
                <p class="title">${information.title}</p>
            </div>`
    }
}
export { informationBar }
