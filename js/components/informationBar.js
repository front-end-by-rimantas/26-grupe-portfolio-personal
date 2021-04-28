function renderAchievements(data) {
    const DOM = document.querySelector('#achievements_block');

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `<div class="achievement">
                    <div class="number" data-target = ${data[i].number}>0</div>
                    <div class="subtitle">${data[i].title}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

function animateNumbers() {
    const counters = document.querySelectorAll('.number');
    const speed = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        }

        updateCount();
    })
}

export { animateNumbers, renderAchievements }