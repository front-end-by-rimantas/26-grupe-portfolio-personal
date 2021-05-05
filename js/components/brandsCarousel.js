class brandsCarousel {

    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.itemCount = this.data.list.length;

        this.init();
    }

    init() {
        this.DOM = document.querySelector(this.selector);
        this.DOM.classList.add('brands');

        this.updateData();
        this.render();
        this.animate();
        this.addEvent();
    }

    updateData() {
        this.itemCount = this.data.list.length;
        this.data.list = [...this.data.list, ...this.data.list, ...this.data.list];
    }

    generateBrandList() {
        let HTML = '';
        for (const brand of this.data.list) {
            const fullPath = this.data.imgPath + brand.img;

            HTML += `<div class="brand" style="width: 187px;">
                <img src="${fullPath}" alt="${brand.name}">
            </div>`
        }
        return HTML;
    }

    render() {
        this.currentElement = this.itemCount;
        this.offset = this.itemCount * -187;
        this.containerWidth = 187 * this.data.list.length;
        let HTML = `<div class="brandList" style="width: ${this.containerWidth}px; transform: translateX(${this.offset}px);">
        ${this.generateBrandList()}
        </div>`;

        this.DOM.innerHTML = HTML;
    }

    animate() {
        setInterval(() => {
            this.currentElement++;
            this.offset = this.offset - 187;
            const brandList = document.querySelector('.brandList');
            brandList.style.transform = `translateX(${this.offset}px)`;
            brandList.style.transition = 'all 0.5s';
        }, 3000);
    }

    addEvent() {
        const brandList = document.querySelector('.brandList');
        brandList.addEventListener('transitionend', () => {
            if (this.currentElement - this.itemCount === this.itemCount) {
                this.currentElement = this.itemCount;
                this.offset = this.itemCount * -187;
                brandList.style.transition = 'none';
                brandList.style.transform = `translateX(${this.offset}px)`;
            }
        });
    }
}

export { brandsCarousel }