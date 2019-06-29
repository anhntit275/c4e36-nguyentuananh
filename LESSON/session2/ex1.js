// // for (let i = 1; i < 101; i++){
// //     if (i % 2 === 0){
// //         console.log(i);
// // }
// // };

// // const delta = b*b - 4*a*c;

// // const a = (prompt("Nhap a"));
// // const b = (prompt("Nhap b"));
// // const c = (prompt("Nhap c"));
// // const delta = b*b - 4*a*c;
// // if (delta === 0){
// // const x = -b / (2*a);
// // console.log(`Nghiem kep la ${x}`);
// // }
// // else if (delta > 0){
// //     const x = -b - delta**0.5
    

// //     console.log("Phuong trinh vo nghiem")
// // }
// // else {
// //     console.log("Phuong trinh co 2 nghiem phan biet x1 = "+((-b-sqrt(b*b-4*a*c))/(2*a))+ " va x2 = "+((-b+sqrt(b*b-4*a*c))/(2*a)))
// // };

// // for (let index = 1; index < 100; index++) {
// // console.log(index);
// // if (index === 10){
// //     break;
// // }
    
// // }

// // Ktra x co phai SNT ko?

// // let x = prompt ("Enter x");
// // for (let x = 1; x < 100; x++) {
// //     for (let i = x-1; i < 100; i++)
// //     if (x%i === 0){
// //         break;
// //         console.log (x+" khong phai la so nguyen to");
// //     }
// // }

// // Chua bai
// const x = prompt("Enter x");
// let isPrime = true;

// if (x<2){
// isPrime = false;
// } else {
//     for (let i=2; i<x; i++){        // hoac i<(x/2)
//         if (x%i === 0){
//             isPrime = false;
//             // console.log("Not prime number!");
//             break;
//                 // console.log("Prime Number!");
//             }
//     }
// }
// if (isPrime){
//     console.log("Prime number")
// } else {
//     console.log("Not prime number");
// }

// for(;;){
//     console.log("hihi");
// }


// const i = Math.floor(Math.random()*100+1);

// for(;;){
//     let x = prompt("Guess my number (1-100)?");
//     if (x<i){
// console.log("Too small :(");
// } else if (x>i){
//     console.log("A little too large :(");
// } else{
//     console.log("Bingo :)");
//     break;
// }
// }

// guess your number?


// let x = Math.floor();
// console.log(`Is ${x} your number?`);

// let i = prompt("?");
// if (i="s"){
//     console.log(${})
// }

// Chua bai:
let low = 0;
let high = 100;

for(;;){
    let mid = Math.floor((low + high)/2);
    console.log(mid);
    let answer = prompt("ANSWER?").toLowerCase();
    
    if (answer === "s"){
        low = mid;
    }else if (answer === "l"){
        high = mid;
    }else if (answer === "c"){
        console.log("I knew it!");
        break;
    }
}
