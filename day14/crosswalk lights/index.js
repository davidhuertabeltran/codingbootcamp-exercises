'use strict'

const changeLights = (event) => {

    let stopOnImage = document.getElementById("stopOn").src;
    
    //from Red to Green
    if(stopOnImage.includes("img/stop-on.svg")) {
        setTimeout( 
            () => {
                
                document.getElementById("stopOn").src = "img/stop-off.svg";
                document.getElementById("walkOff").src = "img/walk-on.svg";
                startWalkCounter();
                setTimeout( //start counter from green to red
                    () => {
                        document.getElementById("stopOn").src = "img/stop-on.svg";
                        document.getElementById("walkOff").src = "img/walk-off.svg";
                    },
                    5000
                )
            },
            3000
        )       

        
    } else { //from Green to Red
        document.getElementById("stopOn").src = "img/stop-on.svg";
        document.getElementById("walkOff").src = "img/walk-off.svg";
    }

    
}

//counter from red to green
const startStopCounter = (event) => {
    let stopTime = Number(3);
    const timerStopCount = setInterval(() => {
        document.querySelector('.stopTimer').innerHTML = stopTime--;
        if (stopTime === -1) {
            clearInterval(timerStopCount);
        }
    }, 1000)
}

//counter from green to red
const startWalkCounter = (event) => {
    let walkTime = Number(5);
    const timerWalkCount = setInterval(() => {
        document.querySelector('.walkTimer').innerHTML = walkTime--;
        if (walkTime === -1) {
            clearInterval(timerWalkCount);
        }
    }, 1000)
}

document.querySelector('.buttonLights').addEventListener('click', startStopCounter);
document.querySelector('.buttonLights').addEventListener('click', changeLights);



