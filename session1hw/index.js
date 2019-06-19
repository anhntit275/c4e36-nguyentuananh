// Session 1: Assignments

// 1. Search and Answer the following question:

// 1.1.
// - How to check a variable's type?

// Answer:
// The best way is to use the typeof keyword.
// The typeof operator maps an operand to one of six values: "string", "number", "object", "function", "undefined" and "boolean".

// For example:
console.log(typeof "hello");
// Expected screen output: string
console.log(typeof 9);
// Expected screen output: number
console.log(typeof true);
// Expected screen output: boolean

// Using variable's type (quote from stackoverflow.com):
// Numbers
typeof 37                === 'number';
typeof 3.14              === 'number';
typeof Math.LN2          === 'number';
typeof Infinity          === 'number';
typeof NaN               === 'number'; // Despite being "Not-A-Number"
typeof Number(1)         === 'number'; // but never use this form!

// Strings
typeof ""                === 'string';
typeof "bla"             === 'string';
typeof (typeof 1)        === 'string'; // typeof always return a string
typeof String("abc")     === 'string'; // but never use this form!

// Booleans
typeof true              === 'boolean';
typeof false             === 'boolean';
typeof Boolean(true)     === 'boolean'; // but never use this form!

// Undefined
typeof undefined         === 'undefined';
typeof blabla            === 'undefined'; // an undefined variable

// Objects
typeof {a:1}             === 'object';
typeof [1, 2, 4]         === 'object'; // use Array.isArray or Object.prototype.toString.call to differentiate regular objects from arrays
typeof new Date()        === 'object';
typeof new Boolean(true) === 'object'; // this is confusing. Don't use!
typeof new Number(1)     === 'object'; // this is confusing. Don't use!
typeof new String("abc") === 'object';  // this is confusing. Don't use!

// Functions
typeof function(){}      === 'function';
typeof Math.sin          === 'function';

// 1.2.
// - In what cases, you will get SyntaxError from the compiler telling you that some of your variables have invalid names?

// Answer:
// Except in the following cases:
// Can start a variable with any letter, $, or _ character.
// As long as it doesn't start with a number, you can include numbers as well.
// Start: [a-z], $, _
// Contain: [a-z], [0-9], $, _

// Can you give 3 different examples of invalid names?

// Answer:
let nam.e = prompt ("Enter your name");
let 0name = prompt ("Enter your name");
let .name = prompt ("Enter your name");

// Special cases (quote from stackoverflow.com):
// console.log(isValidVarName('name'));
// console.log(isValidVarName('$name'));
// console.log(isValidVarName('not a name'));
// console.log(isValidVarName('a:2,b'));
// console.log(isValidVarName('"a string"'));

// console.log(isValidVarName('xss = alert("I\'m in your vars executin mah scrip\'s");;;;;'));
// console.log(isValidVarName('_;;;'));
// console.log(isValidVarName('_=location="#!?"'));

// console.log(isValidVarName('ᾩ'));
// console.log(isValidVarName('ĦĔĽĻŎ'));
// console.log(isValidVarName('〱〱〱〱'));
// console.log(isValidVarName('जावास्क्रिप्ट'));
// console.log(isValidVarName('KingGeorgeⅦ'));
// console.log(isValidVarName('}; }); alert("I\'m in your vars executin\' mah scripts"); true; // yeah, super valid'));
// console.log(isValidVarName('if'));

// 2. Write a program that calculates the area of a circle. The circle radius is entered by users

// Answer:
let r = prompt ('Radius?');
console.log ('Area = ' +r*r*3.14+'.0');

// 3. Write a program that converts Celsius (°C) into Fahrenheit (°F)

// Answer:
let t = prompt('Enter the temperature in Celsius?');
console.log(t+' (C) = '+((t*9/5)+32)+'.0 (F)');

// 4. Turtle exercise
// Use Python Turtle to draw the following shapes (without colors)

// Answer:
// 4.1. A square:
clear();
fd(200);
lt(90);
fd(200);
lt(90);
fd(200);
lt(90);
fd(200);

// 4.2. An equilateral triangle:
clear();
lt(30);
fd(200);
lt(120);
fd(200);
lt(120);
fd(200);

// 4.3. A circle:
clear();
for(i=0;i<360;i++){
fd(2);
lt(1);
};

// 4.4. Multi-circles:
clear();
for(x=0;x<360;x++){
  for(y=0;y<360;y++){
    fd(2);
    lt(1);
  }
  lt(10);
}

// End.