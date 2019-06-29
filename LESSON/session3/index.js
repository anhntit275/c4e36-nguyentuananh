// // Array
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// // C R U D (creat, read, update, delete)

// // 1. READ
// // 1.1 Read one

// // index of element (bat dau tu 0,1,2)
// // console.log(menu[0]);

// // // length of array (do dai cua mang)
// // console.log(menu.length)
// // // last element
// // console.log(menu[menu.length-1])

// // 1.2 Read many (doc nhieu)
// for(let i = 0; i < menu.length; i++){
//     let food = menu[i];
//     console.log(food);
// }

// // BT: 1. Com
// // 2. Chao
// // 3. Rau
// // 4. Thit
// // 5. Ca

// for(let i = 0; i < menu.length; i++){
//     let food = menu[i];
//     console.log(`${i+1}. ${food}`);
// }
// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// // 2. CREATE
// const newFood = "Pho"; // (them vao cuoi)
// menu.push(newFood);
// console.log(menu);

// BT: array chu de tuy chon
// hoi nguoi dung co muon them moi ko?
// nhap y/Y, hoi tiep mon an la mon gi
// nhap n/N, "Good bye"

// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// // 3. DELETE
// // 3.1 Delete by index
// menu.splice(2, 1) // (vi tri, so luong tu vi tri do)
// console.log(menu);

// 3.2 Delete by value
// const indexOffood = menu.indexOf("Thit");
// console.log(indexOffood);
// menu.splice(indexOffood, 1);
// console.log(menu);

// const menu = ["Com", "Chao", "Rau", "Thit", "Ca"];
// // 4. UPDATE
// // 4.1 Update by index
// menu[1]="Pho";
// console.log(menu);

// const updateFood = menu[1];
// updateFood = "Pho";             // sai vi dang gan 2 gia tri cho updateFood, menu[1] ko thay dois
// console.log(menu);