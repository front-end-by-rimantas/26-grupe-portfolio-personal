function feedback(selector, feedbackData) {

    const DOM = document.querySelector(selector);

    let HTML = '';
    for (let {photo, text, author, position} of feedbackData) {
        HTML += `<div class="col-12 col-md-6 feedbackPhoto testi row">
                        <img class="box-img" src="${photo}" alt="">
                        <div class="box">
                            <p class="box-text">${text}</p>
                            <h4 class="box-author">${author}</h4>
                            <p class="box-name">${position}</p>
                        </div>
                </div>`
    }
    DOM.innerHTML += HTML;

}
    
export { feedback }
