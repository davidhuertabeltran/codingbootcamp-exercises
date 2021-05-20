'use strict'

const parent = document.querySelector(".rating");

const firstStar = new StarsRating(3);
firstStar.mount(parent);

const secondStar = new StarsRating(2);
secondStar.mount(parent);

const thirdStar = new StarsRating(4);
thirdStar.mount(parent);