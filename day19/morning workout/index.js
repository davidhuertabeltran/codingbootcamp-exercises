'use strict'

// let starsAll = document.querySelectorAll('.rating__star');

// let rating = document.querySelector('.rating__value');

// for(let i = 0; i< starsAll.length; i++) {

//     starsAll[i].addEventListener('click', (event) => {
//         for(let j = 0; j < starsAll.length; j++) {
//             starsAll[j].setAttribute("id", j);
//             console.log(starsAll[j]);
//         }
//        let currentId = event.target.id;
//         for(let j = 0; j < starsAll.length; j++) {
//             if (starsAll[j].getAttribute("id") < currentId) {
//                 starsAll[j].classList.add('rating__star--on');
//             } else {
//                 starsAll[j].classList.remove('rating__star--on');
//             }
//         }
//     })
// }

let currentValue = 3;

const counter = document.querySelector(".rating__value");
const stars = document.querySelectorAll(".rating__star");

// This is forEach loop
// stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//         handleClick(index);
//     })
// })

for(let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
        handleClick(i);
    })

}


const handleClick = (index) => {
    currentValue = index + 1;

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (i < currentValue) {
            star.classList.add('rating__star--on');
        } else {
            star.classList.remove('rating__star--on');
        }
    }

    //This is forEach loop
    // stars.forEach((star, index) => {
    //     if (index < currentValue) {
    //         star.classList.add('rating__star--on');
    //     } else {
    //         star.classList.remove('rating__star--on');
    //     }
    // })

    counter.textContent = currentValue;
}





