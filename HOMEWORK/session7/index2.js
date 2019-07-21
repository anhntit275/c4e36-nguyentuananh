// 2. Write a JavaScript program to remove selected item from a dropdown list when clicking on the button.

// Answer:
let dropdownlistColor = document.getElementById('dropdownlist-color');
let btnRemove = document.getElementById('btn-remove');
btnRemove.addEventListener('click', () => {
    for (let i = 0; i < dropdownlistColor.options.length; i++) {
        if (dropdownlistColor.options[i].selected) {
            dropdownlistColor.remove(i);
        }
        }
})