// // Your code?

// // Code: ng
// // Translation: ...

// // Neu tu nhap vao chua co (thi co them vao dictionary ko), co -> meaning  -> in ra)

// // Lookup.keys

// // BT:
// // const word = {
// //     hc: "học",
// //     ns: "nói",
// //     stt: "status"
// // };
// // console.log(word);
// // const code = prompt("Your code?");
// // Object.key
// //         console.log(`Code: ${code}`);
// //         console.log(`Translation: ${word[code]}`);
// // const newword = prompt("Your code?");
// // const in = prompt("Bạn có muốn thêm vào từ điển không?").toLowerCase();
// // if (in === "n") {
// //     alert("Thank you!");
// // } else if (in === "y") {
// //     const mean = prompt("Nó có nghĩa là gì?");
// //     console.log(`${newword} có nghĩa là ${mean}`);
// // }

// // Chua:
// const teenCode = {
//     hc: "hoc",
//     stt: "status",
//     ng: "nguoi",
//     ns: "noi",
//     lm: "lam",
// }

// const words = Object.keys(teenCode);
// console.log(words);
// words.forEach((words, index) => {
//     console.log(`${index + 1}. ${words}`);
// })

// const answer = prompt("Your code?");
// if (teenCode.hasOwnProperty(answer)){ // if (answer in teenCode) hoac if (teenCode[answer])
//     console.log(teenCode[answer]);

// } else {
//     const yOrN = prompt("Contribute? (y/n)").toLowerCase();
//     if (yOrN === 'n'){
//         console.log("Good bye!")
//     } else if (yOrN === 'y'){
//         const meaning = prompt("Meaning?");
//         teenCode[answer] = meaning;
//     }
// }

// const newWords = Object.keys(teenCode);
// newWords.forEach((word, index) => {
//     console.log(`${index + 1}. ${word}`);
// })