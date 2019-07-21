// 1. Write a JavaScript code to get the value of the href specified link (<a></a>) and display it in the input field when clicking on the button.

// Answer:
let demoA = document.getElementById('demo-a');
let btnDemo = document.getElementById('btn-demo');
let demoInput = document.getElementById('demo-input');
btnDemo.addEventListener('click', () => {
    demoInput.value = demoA;
})