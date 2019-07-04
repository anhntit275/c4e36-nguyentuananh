// Exercise 1

// Answer
    
const inventory = {
    gold: 500,
    pouch: ["flint", "twine", "gemstone"],
    backpack: ["xylophone", "dagger", "bedroll", "bread loaf"]
};
console.log(inventory);
inventory.pocket = ["seashell", "strange berry", "lint"];
console.log(inventory);
inventory.backpack.splice(1, 1);
console.log(inventory);
inventory.gold = [500];
inventory.gold.push(50);
console.log(inventory);

// Exercise 2:

// Answer

const price = {
    banana: 4,
    apple: 2,
    orange: 1.5,
    pear: 3
};
const stock = {
    banana: 6,
    apple: 0,
    orange: 32,
    pear: 15
};
const value = ["banana", "apple", "orange", "pear"];
value.forEach((food, index) => {
    console.log(`${food}:
    price: ${price[food]}
    stock: ${stock[food]}`);
})
let total = 0;
value.forEach((food, index) => {
    i = price[food] * stock[food];
    console.log(`Value of ${food} = ${i}`);
    total += i;
})
console.log(`Total = ${total}`)