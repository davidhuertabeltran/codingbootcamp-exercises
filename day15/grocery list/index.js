let groceryList = [
    {
        name: "apples",
        amount: 4
    },
    {
        name: "carrots",
        amount: 10
    },
    {
        name: "milk",
        amount: 3
    },
    {
        name: "coffee",
        amount: 2
    },
    {
        name: "wine",
        amount: 5
    },
    {
        name: "pasta",
        amount: 4
    },
    {
        name: "toilet paper",
        amount: 8
    },
    {
        name: "juice",
        amount: 7
    }
];


for (let item in groceryList) { // we create a new variable called item which will be every object inside groceryList array
    document.querySelector('.list').innerHTML += '<div class="item">' + groceryList[item].name + ": " + groceryList[item].amount + '</div>'; // in order to access to each of the objects and values we need to use arrayname[item].name_of_the_object
}

let newItem = document.querySelector('.newProducts');
let newNumber = document.querySelector('.newAmount');

document.querySelector('.addItem').addEventListener('click', () => {

    let newElement = document.createElement("div");
    newElement.innerHTML = newItem.value + ": " + newNumber.value;

    document.querySelector('.list').appendChild(newElement);

    document.querySelector('.newProducts').value = "";
    document.querySelector('.newAmount').value = null;

    // document.querySelector('.test').innerHTML = newItem.value;
});

// groceryList.forEach((element, index) => { //element is each of the items in groceryList array, index will be 0, 1 ,etc
//     document.querySelector('.list').innerHTML += '<div class="item">' + element + '</div>'; // this will show each of the elements in the HTML code inside the div class list
// })