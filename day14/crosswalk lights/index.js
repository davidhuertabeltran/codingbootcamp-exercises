'use strict'
let stopTime = Number(3);
let walkTime = Number(5);



const changeLights = (event) => {
    

    let stopOnImage = document.getElementById("stopOn").src;

    if(stopOnImage.indexOf('stop-on.svg')!=-1) {
        document.getElementById("stopOn").src = "img/stop-off.svg";
        document.getElementById("walkOff").src = "img/walk-on.svg";
        
    } else {
        document.getElementById("stopOn").src = "img/stop-on.svg";
        document.getElementById("walkOff").src = "img/walk-off.svg";
    }

    setTimeout(
        () => {
            document.getElementById("stopOn").src = "img/stop-on.svg";
            document.getElementById("walkOff").src = "img/walk-off.svg";
        },
        5000
    )
}

const startWalkCounter = (event) => {
    const timerWalkCount = setInterval(() => {
        document.querySelector('.walkTimer').innerHTML = walkTime--;
        if (walkTime === -1) {
            clearInterval(timerWalkCount);
        }
    }, 1000)
}

const startStopCounter = (event) => {
    const timerStopCount = setInterval(() => {
        document.querySelector('.stopTimer').innerHTML = stopTime--;
        if (stopTime === -1) {
            clearInterval(timerStopCount);
        }
    }, 1000)
}


document.querySelector('.buttonLights').addEventListener('click', startStopCounter);
document.querySelector('.buttonLights').addEventListener('click', changeLights);


