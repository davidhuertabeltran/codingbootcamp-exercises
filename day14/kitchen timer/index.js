'use strict';

const startTimer = (event) => {
    let minutesUser = document.querySelector("#minutes").value;
    
    console.log(typeof minutesUser);
    let secondsUser = document.querySelector("#seconds").value;
    console.log(typeof secondsUser);
    if(!minutesUser) {
        minutesUser = 0;
    }

    if(!secondsUser) {
        secondsUser = 0;
    }

    let finalMinutes = parseInt(minutesUser) * 60;

    let finalSeconds = parseInt(secondsUser);

    let finalTime = finalMinutes + finalSeconds;

    const timerCount = setInterval(() => {
        document.querySelector('.timer').innerHTML = finalTime--;
        if (finalTime === -1) {
            clearInterval(timerCount);
        }
    }, 1000)

    const stopTimer = () => {
        clearInterval(timerCount);
    }

    const stopButton = document.querySelector('.stopTime');

    stopButton.addEventListener('click', () => {
        stopTimer();
    })
}


document.querySelector('.goTime').addEventListener('click', startTimer);




