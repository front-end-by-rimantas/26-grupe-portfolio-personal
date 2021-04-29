function feedback(selector, feedbackData) {

    const DOM = document.querySelector(selector);

    let HTML = '';
    for (let {photo} of feedbackData) {
        HTML += `<div class="col-12 feedbackPhoto">
                        <img src="${photo}" alt="">
                </div>`
    }
    DOM.innerHTML += HTML;

}
    
export { feedback }
