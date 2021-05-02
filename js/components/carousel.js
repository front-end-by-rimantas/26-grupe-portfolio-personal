function carousel(data) {

let img = document.getElementsByClassName('testi');
let button = document.getElementsByClassName('btn');


let currentSlide = 1;

let manualNav = function(manual){
    for(let i = 0; i < img.length; i++) {
        img[i].classList.remove('active');

    for(let i = 0; i < button.length; i++) {
            button[i].classList.remove('active');
        };
    };

    img[manual].classList.add('active');
    button[manual].classList.add('active');
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
};
}

export { carousel }