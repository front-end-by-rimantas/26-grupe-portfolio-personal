function blogRender(data) {
    const DOM = document.querySelector('#blog');

    let HTML = '';

    for (let {img, small_img, name, date, likes, comments, article, text} of data) {

        HTML += `<div class="cont col-12 col-md-4">
        <div class="main-img">
        <img src="${img}" class="big" alt="Blog image">
    </div>
    <div class="mini-container">
<img src="${small_img}" class="small" alt="Small image">
<span class="name">${name}</span>
    <span class="date"> ${date}</span><span class="heart fa fa-heart"> ${likes}</span><span class="comment fa fa-comment"> ${comments}</span>
    </div>
    <div class="small-text">
    <h4 class="main-head">${article}</h4>
    <p class="main-phar">${text}</p>
</div>
</div>`
    }
    DOM.innerHTML += HTML;
}

export { blogRender };