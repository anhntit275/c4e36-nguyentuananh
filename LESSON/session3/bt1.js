// BT: array chu de tuy chon
// hoi nguoi dung co muon them moi ko?
// nhap y/Y, hoi tiep mon an la mon gi
// nhap n/N, "Good bye"

// const file = ["photo", "video", "document"];
// console.log(file);
// let x = prompt("Bạn có muốn thêm mới loại file khác không?").toLowerCase();
// if (x === "y"){
//     let a = prompt("Đó là loại file gì?");
//     file.push(a);
//     for (let i = 0; i < file.length; i++){
//     let b = file[i];
//     console.log(`${i+1}. ${b}`);
//     }
// } else if (x === "n"){
//     console.log("Good bye");
// }

// Chua:
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];

// menu.forEach((food, index) => {                 //(vong lap for gon hon)
//     console.log(`${index+1}. ${food}`);
// })

// const answer = prompt("Add food? (y/n)").toLowerCase();

// if (answer === 'n'){
//     console.log("Bye!")
// } else if (answer === 'y'){
//     const newFood = prompt("Food name?");
//     menu.push(newFood);
//     menu.forEach(food, index) => {
//     console.log(`${index+1}. ${food}`);
// })
// }

// BT: Ban co muon xoa ko?
// n/N Goodbye
// y/Y Index or Value? (index: prompt index (-1) -> xoa)/(value: prompt value -> xoa)

// const file = ["photo", "video", "document"];
// console.log(file);
// let x = prompt("Do you want delete anyone?").toLowerCase();
// if (x === "n"){
//     console.log("Goodbye");
// } else if (x === "y"){
//     let a = prompt("Index or Value?").toLowerCase();
//     if (a === "index"){
//         let b = prompt("Which is Index?");
//         file.splice(b-1, 1);
//         console.log(file);
//     } else if (a === "value"){
//         let c = prompt("Which is Value?");
//         const d = file.indexOf(c);
//         file.splice(d, 1);
//         console.log(file);
//     }
//     }

// Chua:
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];

// menu.forEach((food, index) => {
//     console.log(`${index+1}. ${food}`);
// })

// const yesOrNo = prompt("delete food? (y/n)");
// if (yesOrNo === 'n'){
//     alert("Good bye!")
// } else if (yesOrNo === "y"){
//     const iOrV = prompt("Delete by index or value? (i/v");
//     if (iOrV === "i"){
//         const deleteIndex = prompt("Position?");
//         menu.splice(deleteIndex-1, 1);
//         menu.forEach((food, index) => {
//             console.log(`${index+1}. ${food}`);
//     })
//  } else if (iOrV === "v"){
//         const deleteValue = prompt("Value?");
//         const indexOffood = menu.indexOf(deleteValue);
//         menu.splice(indexOffood, 1);
//         menu.forEach((food, index) => {
//             console.log(`${index+1}. ${food}`);
//     })
// }
// }

// BT: update mon an
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// menu.forEach((food, index) => {
//     console.log(`${index+1}. ${food}`);
// })

// const yesOrNo = prompt("update food? (y/n)");
// if (yesOrNo === 'n'){
//     alert("Good bye!")
// } else if (yesOrNo === "y"){
//     const iOrV = prompt("update by index or value? (i/v");
//     if (iOrV === "i"){
//         const updateIndex = prompt("Position?");
//         const newFoodIndex = prompt("new food?");
//         menu[updateIndex-1] = newFoodIndex;
//         menu.forEach((food, index) => {
//             console.log(`${index+1}. ${food}`);
//     })
//  } else if (iOrV === "v"){
//         const oldFood = prompt("old food?");
//         const newFoodValue = prompt("new food?");
//         const indexOffood = menu.indexOf(oldFood);
//         menu[indexOffood] = newFoodValue;
//         menu.forEach((food, index) => {
//             console.log(`${index+1}. ${food}`);
//     })
// }
// }

// BT1: Array so tu nhien [-7,3,5,-6,2]
// Nhap so bat ky
// In ra: so nhap vao co trong array ko?/ Co thi so n o vi tri x/Ko thi Not found

// BT2: Array nhu trn
// In ra so lon nhat

// BT1: (linear search)
// const number = [-7,3,5,-6,3];
// console.log(number);
// const x = Number(prompt("Enter x"));
// for (i=0;i<number.length;i++){
//     if (x === number[i]){
//         console.log(`${x} có trong array`);
//         console.log(`${x} ở vị trí thứ ${i+1}`);
//     }}

// Chua:
const numbArr = [-7, 3, 5, -6, 3];

const n = Number(prompt("Enter number?"));
let foundIndex = -1;                    // 1 so la, ko co trong array

numbArr.forEach((numb, i) => {
    if (numb === n){
        foundIndex = i;
    }
})

if (foundIndex === -1){
    alert("Not found!")
} else {
    console.log(`Number ${n} at ${foundIndex} position`);
}
// BVN: 2 so giong nhau trong day