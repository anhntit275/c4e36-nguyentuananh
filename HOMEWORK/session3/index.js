// Study

// Answer the following questions:

// - What is nested list?

// Answer:
// A nested list is a list that appears as an element in another list.
// Exp: In this list, the element with index 3 is a nested list:
// nested = ["hello", 2.0, 5, [10, 20]]

// - Can a list store both integers and strings in it?

// Answer:
// The elements of a list don’t have to be the same type.
// The following list contains a string, a float, an integer, and (amazingly) another list.

// Exercise 3: Finish CRUD exercise in class, simulate a clothes shop

// Answer:
const clothes = ["T-Shirt", "Sweater"];
let answer = prompt("Welcome to our shop, what do you want (C, R, U, D)?").toUpperCase();
if (answer === "R"){
    console.log(clothes);
 } else if (answer === "C"){
        let newitem = prompt("Enter new item:");
        clothes.push(newitem);
        console.log(clothes);
    } if (answer === "U"){
        let clothes1 = ["T-Shirt", "Sweater", "Jeans"];
        let updateindex = prompt("Update position?");
        let newitemindex = prompt("New item?");
        clothes1[updateindex - 1] = newitemindex;
        console.log(clothes1);
    } else if (answer === "D"){
        let clothes2 = ["T-Shirt", "Skirt", "Jeans"];
        let deleteindex = prompt("Delete position?");
        clothes2.splice(deleteindex-1, 1);
        console.log(clothes2);
    }

// Exercise 4:

// 4.1.

// Answer:
const flock = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello, my name is Tuan Anh and these are my sheep sizes: [${flock.join(', ')}]`);
function sold(){
 let max = flock[0];
for(i = 0; i < flock.length; i++){
    if (max < flock[i]){
        max = flock[i];
    }
} console.log(`Now my biggest sheep has size ${max} and let's shear it`);
flock[flock.indexOf(max)] = 8;
console.log(`After shearing, here are my flock [${flock.join(', ')}]`);
}
sold();
for(month = 1; month < 4; month++){
for(i = 0; i < flock.length; i++){
    flock[i] = flock[i] + 50;
}
console.log(`Month ${month}: One month has passed, now here is my flock \n [${flock.join(', ')}]`);
if (month === 3){
    continue;};
sold();
}
let total = flock[0];
for (i = 1; i < flock.length; i++) {
    total = total + flock[i];
}
console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total} * 2$ = ${total * 2}$`);