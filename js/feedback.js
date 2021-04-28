function feedback(selector, feedbackData) {

    const DOM = document.querySelector(selector);

    let photo1 = document.createElement("img");
    photo1.src = "./img/testimonials_1.png";
    DOM.appendChild(photo1);

    let photo2 = document.createElement("img");
    photo2.src = "./img/testimonials_2.png";
    DOM.appendChild(photo2);}


export { feedback }