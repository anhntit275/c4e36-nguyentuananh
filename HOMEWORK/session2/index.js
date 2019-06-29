// Study

// Answer the following questions:

// 1.
// 1.1. What is Boolean?

// Answer:
// Boolean is a datatype that returns either of two values i.e. true or false.
// In JavaScript, boolean is used as a function to get the value of a variable, object, conditions, expressions etc. in terms of true or false.

// 1.2. Write down 3 different expression that results a Boolean type (i.e. 5 == 6)

// Answer:
console.log(typeof(9.0 >= "tuan anh"));
// Expected screen output: boolean (false)
console.log(typeof(true === false));
// Expected screen output: boolean (false)
console.log(typeof(undefined != ""));
// Expected screen output: boolean (false)

// Bonus:
// Operator maybe is: "<", "<=", ">", ">=", "==", "===", "!=", "!==".
// Both sides maybe are variable's type: "string", "number", "object", "function", "boolean", "undefined" (only typeof(undefined)).

// 2.
// 2.1. What is a flow chart?

// Answer:
// A flowchart is a visual representation of a process in which each step in the process is represented by a different shape and contains a short description of the process step.

// 2.2. Draw flow chart for the following code snippet: (you can draw on a paper, take a picture of it)

// Answer:
// File "Flowchart.PNG".

// 3.
// 3.1. What is nested conditionals?

// Answer:
// One conditional can also be nested within another.
// The outer conditional contains two branches.
// The second branch (the else from the outer) contains another if statement, which has two branches of its own.
// Those two branches could contain conditional statements as well.

// 3.2. Write a piece of code that uses nested conditionals

// Answer:
let x = Number(prompt("Enter number x"));
if (x<0){
    console.log("x is negative number")
} else
    if (x>0){
        console.log("x is positive number")
    } else console.log("x = 0");

// Turtle exercises

// Using turtle to draw the following shapes:
// 1.

// Answer:
clear();
color("red");
lt(30);
for(i=0;i<4;i++){
fd(100);
rt(60);
fd(100);
rt(120);
fd(100);
rt(60);
fd(100);
lt(150);
};

// 2.

// Answer:
clear();
color("red");
lt(30);
for(i=0;i<6;i++){
fd(100);
rt(60);
};
rt(30);
for(i=0;i<4;i++){
fd(100);
rt(90)
};
color("blue");
lt(18);
for(i=0;i<4;i++){
fd(100);
rt(72);
};
rt(60);
fd(100);
lt(120);
fd(100);
lt(120);

// Serious exercises

// 1. Write a program that asks user their height (cm) and weight (kg), and then calculate their BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m) )
// Note: you must do the conversion from cm to m before calculation

// Then based on the BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30


// Answer:
let h = Number(prompt("Enter your height (cm)")/100);
let m = Number(prompt("Enter your weight (kg)"));
let BMI = m/(h*h);
console.log(`Your BMI is ${BMI}`);
if(BMI<16){
    console.log("You are severely underweight")
} else if(BMI<=18.5){
    console.log("You are underweight")
} else if(BMI<25){
    console.log("You are normal")
} else if(BMI<30){
    console.log("You are overweight")
} else {
    console.log("You are obese")
};

// 2. Write a program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)

// Answer:
let x = Number(prompt("Enter natural number x"));
let a = 1;
for(i=0;i<x;i++){
    a=a*(x-i);
};
console.log(`${x}! = ${a}`);