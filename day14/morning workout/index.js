'use strict';

let result = 0;

let equalResult = document.querySelector("#result");
equalResult.textContent = result;

let inputUser = document.querySelector("#userNumber");

const getResult = () => {
    
    // this function will replicate what the user types on the input box
    if(inputUser) {
        result = inputUser.value;
        equalResult.textContent = result;
    }

    inputUser.value = 0;
}