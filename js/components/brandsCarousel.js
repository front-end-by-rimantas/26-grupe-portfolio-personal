class brandsCarousel {

    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.itemCount = this.data.list.length;
        this.breakPoints = [300, 600, 800, 1200];
        this.slideWidth = 187;
        this.isPressDown = false;
        this.cursorXSpace;

        this.init();
    }

    init() {
        this.DOM = document.querySelector(this.selector);
        this.DOM.classList.add('brands');
        this.brands = document.querySelector('.brands');

        this.updateData();
        this.render();

        this.brandList = document.querySelector('.brandList');

        this.animate();
        this.addEvent();
        this.resizeBrandsContainer();
    }

    updateData() {
        this.itemCount = this.data.list.length;
        this.data.list = [...this.data.list, ...this.data.list, ...this.data.list];
    }

    generateBrandList() {
        let HTML = '';
        for (const brand of this.data.list) {
            const fullPath = this.data.imgPath + brand.img;

            HTML += `<div class="brand" style="width: ${this.slideWidth}px;">
                <img src="${fullPath}" alt="${brand.name}">
            </div>`;
        }
        return HTML;
    }

    render() {
        this.currentElement = this.itemCount;
        this.offset = this.itemCount * (this.slideWidth * -1);
        this.containerWidth = this.slideWidth * this.data.list.length;
        let HTML = `<div class="brandList" style="width: ${this.containerWidth}px; transform: translateX(${this.offset}px);">
        ${this.generateBrandList()}
        </div>`;

        this.DOM.innerHTML = HTML;
    }

    animate() {
        this.interval = setInterval(() => {
            if (this.currentElement >= this.itemCount * 2) {
                this.brandList.style.transition = 'none';
                this.currentElement = this.itemCount;
                this.offset = this.itemCount * (this.slideWidth * -1);
                this.brandList.style.transform = `translateX(${this.offset}px)`;
                return;
            }

            this.offset -= this.slideWidth;
            this.brandList.style.transition = 'all 0.5s';
            this.brandList.style.transform = `translateX(${this.offset}px)`;
            this.currentElement++;
        }, 3000);
    }

    addEvent() {
        addEventListener('resize', () => {
            this.resizeBrandsContainer();
        });
        // this.brandList.addEventListener("mousedown", (e) => {
        //     e.preventDefault();
        //     clearInterval(this.interval);
        //     this.isPressDown = true;
        //     this.cursorXSpace = e.offsetX - this.offset;
        // });
        // addEventListener("mouseup", () => {
        //     this.isPressDown = false;
        // });

        // this.brandList.addEventListener("mousemove", (e) => {
        //     if (!this.isPressDown) return;
        //     e.preventDefault();
        //     this.brandList.style.transform = `translateX(${e.offsetX - this.cursorXSpace}px)`;
        //     console.log();

        // });
    }

    resizeBrandsContainer() {
        let itemsPerView = 1;
        for (let width of this.breakPoints) {
            if (width < innerWidth) {
                itemsPerView++
            }
        }

        this.brands.style.width = `${this.slideWidth * itemsPerView}px`;
    }
}

export { brandsCarousel }