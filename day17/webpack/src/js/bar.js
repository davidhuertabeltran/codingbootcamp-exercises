'use strict';

let redBar = document.querySelector('.knob'); //This is the red bar in the CSS file
let newWidth = 40; // inital width on the CSS file
let counter = document.querySelector('#counter'); // initial number in the HTML file

const changeBar = (newWidth) => {
    redBar.style.width = newWidth + "%";
    counter.innerHTML = (newWidth / 10);
}

export const increaseBar = () => {
    if(newWidth < 100) {
        newWidth = (newWidth + 10);
        changeBar(newWidth);
    }  
}

export const decreaseBar = () => {
    if(newWidth > 0) {
        newWidth = (newWidth - 10);
        changeBar(newWidth);
    }
}