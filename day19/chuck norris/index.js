'use strict'

let joke = document.querySelector(".joke");

const getJoke = () => {
fetch(`https://api.chucknorris.io/jokes/random`)
.then((resp) => resp.json())
.then((json) => {
    joke.textContent = json.value;
    const image = document.querySelector(".image");
    image.src = json.icon_url;
  });

}

document.querySelector('.generate').addEventListener('click', getJoke);