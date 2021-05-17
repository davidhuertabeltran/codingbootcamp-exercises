class Product {

    constructor(name, price , quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell() {
        return (this.quantity - 1);
    }

    store(count) {
        return (this.quantity + 1)
    }
}

const products = [
    new Product('Shoes', 120, 50),
    new Product('T-shirt', 50, 42),
    new Product('Jacket', 200, 30),
    new Product('Headphones', 140, 48),
    new Product('Glasses', 50, 80),
    new Product('Backpack', 60, 10),
    new Product('Watch', 800, 15),
];

console.log(products);

products.forEach((Product) => {
    console.log(Product.sell());
});

products.forEach((Product) => {
    console.log(Product.store());
});

