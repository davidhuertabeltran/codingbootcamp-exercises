'use strict'

const plus = () => {
    let valueToDisplay = document.querySelector(".calc__input").value;
    valueToDisplay = parseInt(valueToDisplay);
    
    let preResult = document.querySelector(".calc__result").textContent;
    preResult = parseInt(preResult);

    let finalResult = valueToDisplay + preResult;

    document.querySelector(".calc__result").textContent = finalResult;
}

document.querySelector('#btn-divide').addEventListener('click', plus);

