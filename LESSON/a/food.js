let btnAdd = document.getElementById('btn-add');
let foodInput = document.getElementById('food-input');
let menu = document.getElementById('menu');
let btnDelete = document.getElementById('btn-delete');
let btnDeleteSelect = document.getElementById('btn-delete-select');

btnAdd.addEventListener('click', () => {
    //console.log(foodInput.value);
    let newFood = `<li>${foodInput.value}<li/>`
    menu.innerHTML += newFood;
})

btnDelete.addEventListener('click', () => {
    //console.dir(menu);
    menu.lastElementChild.remove();
})

btnDeleteSelect.addEventListener('click', () => {
    // for(let i = 0; i < menu.children.length; i++) {
    //     let eachFood = menu.children[i];
    //     //.log(eachFood);
    //     if (eachFood.textContent === foodInput.value) {
    //         eachFood.remove();
    //     }
    // }

    let menuFood = [...menu.children];
    //console.log(menuFood); //spread
    let deleteFood = menuFood.filter(food => food.textContent === foodInput.value);
    //console.log(deleteFood)
    deleteFood[0].remove();
})