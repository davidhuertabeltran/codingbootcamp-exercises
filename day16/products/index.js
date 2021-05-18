class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell() {

        this.quantity -= 1
    }

    store(count) {
        this.quantity += count;

    }
}

const products = [
    new Product('Shoes', 120, 5),
    new Product('T-shirt', 50, 42),
    new Product('Jacket', 200, 30),
    new Product('Headphones', 140, 48),
    new Product('Glasses', 50, 80),
    new Product('Backpack', 60, 10),
    new Product('Watch', 800, 15),
];

for(let i = 0; i < products.length; i++) {

    let main = document.querySelector(".main");
    let container = document.createElement("div");
    container.classList.add("item-store");

    let productName = document.createElement("div");
    productName.classList.add("product-name");
    let productPrice = document.createElement("div");
    productPrice.classList.add("product-price");
    let productQuantity = document.createElement("div");
    productQuantity.classList.add("product-quantity");
    let button = document.createElement("button");
    button.classList.add("button-buy");

    productName.innerHTML = products[i].name;
    productPrice.innerHTML = "$" + products[i].price;
    productQuantity.innerHTML = products[i].quantity + " products left";
    button.innerHTML = "Buy Now";


    container.appendChild(productName);
    container.appendChild(productPrice);
    container.appendChild(productQuantity);
    container.appendChild(button);
    main.appendChild(container);

    button.addEventListener('click', () => {
        if(products[i].quantity == 0) {
            alert("item out of stock");
            return;
        }
        products[i].sell(); // Here i call the class method sell defined inside my class Product
        productQuantity.innerHTML = products[i].quantity + " products left";

    });
}










