function feedback(selector, feedbackData) {

    const DOM = document.querySelector(selector);

    let HTML = '';
    for (let {photo} of feedbackData) {
        HTML += `<div class="col-12 col-md-6 feedbackPhoto testi">
                        <img src="${photo}" alt="">
                </div>`
    }
    DOM.innerHTML += HTML;

}
    
export { feedback }
