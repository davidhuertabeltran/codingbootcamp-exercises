'use strict'

const convertNumber = () => {
    let number = document.querySelector("#numberToTransform").value;
    number = parseInt(number);
    console.log(number);
    let one = "I";
    let two = "II";
    let three = "III";
    let four = "IV";
    let five = "V";
    let six = "VI";
    let seven = "VII";
    let eight = "VIII";
    let nine = "IX";
    let ten = "X";
    
    if(number < 0 || number > 4000) {
        alert("Error, please provide numbers only between 0 and 4000");
    }

    //numbers 1 to 10
    if(number === 1) {
        document.querySelector(".result").innerHTML = one;
    }
    if(number === 2) {
        document.querySelector(".result").innerHTML = two;
    }
    if(number === 3) {
        document.querySelector(".result").innerHTML = three;
    }
    if(number === 4) {
        document.querySelector(".result").innerHTML = four;
    }
    if(number === 5) {
        document.querySelector(".result").innerHTML = five;
    }
    if(number === 6) {
        document.querySelector(".result").innerHTML = six;
    }
    if(number === 7) {
        document.querySelector(".result").innerHTML = seven;
    }
    if(number === 8) {
        document.querySelector(".result").innerHTML = eight;
    }
    if(number === 9) {
        document.querySelector(".result").innerHTML = nine;
    }
    if(number === 10) {
        document.querySelector(".result").innerHTML = ten;
    }

    //numbers 11 to 39

    if(number >= 11 && number <=39) {
        number = number % 10;
        console.log(number);
    }        
}

