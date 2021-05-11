function handleClick () {
    const buttonProduct = document.querySelector('#buy-button');
    const quantityProduct = document.querySelector('#quantity');
    const quantity = Number(quantityProduct.value);
    buttonProduct.textContent = quantity + " pieces in cart";
    buttonProduct.className = 'btn-final';
}