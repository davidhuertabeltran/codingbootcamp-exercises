document.querySelector('.headline').innerHTML = 'Hello';

const sayHelloWorld = () => {
    document.querySelector('.headline').innerHTML = 'Hello, world';
}

setTimeout(
    sayHelloWorld,
    2000
)

setTimeout(
    () => {
        document.querySelector('.headline').innerHTML += "!!"
    },
    5000
)

const interval_id = setInterval(() => {
    document.querySelector('.headline').innerHTML += "!!"
}, 500);

const stopExclamation = () => {
    clearInterval(interval_id);
}

let time = 1;

const timer_interval_id = setInterval(() => {
    document.querySelector('.timer').innerHTML = time++;
}, 1000)

const stopTimer = () => {
    clearInterval(timer_interval_id);
}

const stop_button = document.querySelector('.stop_button');

stop_button.addEventListener('click', () => {
    stopExclamation();
    stopTimer();
})