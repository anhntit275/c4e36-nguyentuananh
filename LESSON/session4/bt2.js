// // hmpaionc (random)
// // Nhap cau tra loi: ...
// // champion -> true

// // const word = ["c", "h", "a", "m", "p", "i", "o", "n"];
// // for (i = 0; i )

// // split
// // join

// // const word1 = "champion";
// // console.log(word1);
// // const word2 = word1.split("");
// // console.log(word2);
// //     for (i = 0; i < word2.length + 1; i++){
// //         const j = Math.floor(Math.random()*(word2.length+1));
// //     }

// // Chua:
// // C1: dung while
// const word = "champion";
// let letters = word.split('');
// let displayLetters = [];

// while (letters.length > 0
//     ){ // for -> while
// const randomIndex = Math.floor(Math.random()*letters.length);
// const character = letters[randomIndex];
// displayLetters.push(character);
// letters.splice(randomIndex, 1);
// }

// const displayWord = displayLetters.join(" ");
// console.log(displayWord);
// const answer = prompt("Your answer?");
// if (answer === word) {
//     console.log("Hura!")
// } else {
//     console.log("Wrong!")
// }

// // C2: dung for
// const word = "champion";
// let letters = word.split('');
// let displayLetters = [];
// let lettersLength = letters.length;

// for (let index = 0; index < lettersLength; index++){
//     ){
// const randomIndex = Math.floor(Math.random()*letters.length);
// const character = letters[randomIndex];
// displayLetters.push(character);
// letters.splice(randomIndex, 1);
// }

// const displayWord = displayLetters.join(" ");
// console.log(displayWord);
// const answer = prompt("Your answer?");
// if (answer === word) {
//     console.log("Hura!")
// } else {
//     console.log("Wrong!")
// }