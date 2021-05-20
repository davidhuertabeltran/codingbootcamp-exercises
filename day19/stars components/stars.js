'use strict'

class StarsRating {
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    render() {
        let starContainer = document.createElement('div');
        starContainer.className = "star-container";
        starContainer.innerHTML = `
        <div class="rating__value">${this.currentValue}</div>
        <div class="rating__stars">
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
            <div class="rating__star"></div>
        </div>
        `;

        const stars = starContainer.querySelectorAll(".rating__star");

        for(let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('click', () => {
                this.handleClick(i);
            })
        }

        return starContainer;

    }

    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        this.update();
    }

    update() {
        const stars = this.element.querySelectorAll(".rating__star");
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            if (i < this.currentValue) {
                star.classList.add('rating__star--on');
            } else {
                star.classList.remove('rating__star--on');
            }
        }
    }

    handleClick (i) { //this is from the loop in line 24
        const counter = this.element.querySelector(".rating__value");
        this.currentValue = i + 1;
        this.update();

        counter.textContent = this.currentValue;
        
    }

}

