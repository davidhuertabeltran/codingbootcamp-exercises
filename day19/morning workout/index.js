'use strict'

let starsAll = document.querySelector('.rating__stars');
let starOn = document.querySelector('.rating__star--on');
let starOff = starOn.classList.remove('.rating__star--on');

const changeStars = () => {
    for(let i = 0; i < starsAll.length; i++) {
        console.log(starOff);
        return starOff;

    }
}

// document.querySelector('.rating__stars').addEventListener('click', changeStars);
