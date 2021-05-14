const padlock = document.querySelector(".padlockImage");

//SOLUTION 1 for show and hide message


// padlock.addEventListener('mouseenter', () => {
//     document.querySelector('.text').style.display = "block";
// })

// padlock.addEventListener('mouseleave', () => {
//     document.querySelector('.text').style.display = "none";
// })

//SOLUTION 2 for show and hide message
// padlock.addEventListener('mouseenter', () => {
//     document.querySelector('.text').classList.add('visible');
// })

// padlock.addEventListener('mouseleave', () => {
//     document.querySelector('.text').classList.remove('visible');
// })

//SOLUTION 3 for show and hide message and keep message

padlock.addEventListener('mouseenter', () => {
    document.querySelector('.text').classList.add('visible');
})

padlock.addEventListener('mouseleave', () => {
    document.querySelector('.text').classList.remove('visible');
})
padlock.addEventListener('click', () => {
    document.querySelector('.main').classList.toggle('unlocked');
})

//SOLUTION 4 for show and hide message and keep message by stopping events

// const makeTextVisible = () => {
//     document.querySelector('.text').classList.add('visible');
// }
// const makeTextInvisible = () => {
//     document.querySelector('.text').classList.remove('visible');
// }

// let unlocked = false;

// const lock = () => {

//     padlock.addEventListener('mouseenter', makeTextVisible);
//     padlock.addEventListener('mouseleave', makeTextInvisible);
//     unlocked = false;
// }

// const unlocking = () => {
//     padlock.removeEventListener('mouseenter', makeTextVisible);
//     padlock.removeEventListener('mouseleave', makeTextInvisible);
//     unlocked = true;
// }

// lock();

// padlock.addEventListener('click', () => {
//     if (unlocked) {
//         lock();
//     } else {
//         unlocking();
//     }
// })





