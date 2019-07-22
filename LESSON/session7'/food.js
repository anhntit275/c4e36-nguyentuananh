let btnAdd = document.getElementById('btn-add');
let foodInput = document.getElementById('food-input');
let menu = document.getElementById('menu');
let btnDelete = document.getElementById('btn-delete');

btnAdd.addEventListener('click', () => {
    //console.log(foodInput.value);
    let newFood = `<li>${foodInput.value}<li/>`
    menu.innerHTML += newFood;
})

btnDelete.addEventListener('click', () => {
    console.dir(menu);  
})