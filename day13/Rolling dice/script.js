let amount = 100;
let displayAmount = document.querySelector("#amount");
displayAmount.textContent = amount;
let money = document.querySelector("#betAmount");
let moneyBet = 0;   

const makeBet = () => {
    moneyBet = money.value;
    amount = amount - moneyBet;
    displayAmount.textContent = amount;
}

const triple = () => {
    amount = amount + (moneyBet * 6);
    displayAmount.textContent = amount;
}

const roll = () => {
    let randomNumber = Math.floor(Math.random() * (7 - 1) + 1);
    let changeDice = document.querySelector("#dice");

    if(randomNumber === 1) {
        changeDice.className = "dice-1";
    }
    if(randomNumber === 2) {
        changeDice.className = "dice-2";
    }
    if(randomNumber === 3) {
        changeDice.className = "dice-3";
    }
    if(randomNumber === 4) {
        changeDice.className = "dice-4";
    }
    if(randomNumber === 5) {
        changeDice.className = "dice-5";
    }
    if(randomNumber === 6) {
        changeDice.className = "dice-6";
        triple();
    }   
}




