'use strict';

const startTimer = (event) => {
    let minutesUser = document.querySelector("#minutes").value;

    let secondsUser = document.querySelector("#seconds").value;

    let finalMinutes = parseInt(minutesUser) * 60;

    let finalSeconds = parseInt(secondsUser);

    let finalTime = finalMinutes + finalSeconds;

    if(finalMinutes > 0 && finalSeconds > 0) {
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
    } else if (finalMinutes > 0 && finalSeconds !== "undefined") {
        const timerCount = setInterval(() => {
            document.querySelector('.timer').innerHTML = finalMinutes--;
            if (finalMinutes === -1) {
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
    } else if (finalMinutes !== "undefined" && finalSeconds > 0) {
        const timerCount = setInterval(() => {
            document.querySelector('.timer').innerHTML = finalSeconds--;
            if (finalSeconds === -1) {
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
    
}


document.querySelector('.goTime').addEventListener('click', startTimer);




