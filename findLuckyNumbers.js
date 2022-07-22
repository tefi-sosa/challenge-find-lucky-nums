// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.
// Write your code below this line.

// function luckyNums (n) {
//     let luckyNumbers = [];
//     for (let i = 1; i <= n; i++) {
//         let randomNum = Math.floor((Math.random() * 10 )+ 1);
//         if (luckyNumbers.includes(randomNum) === false) {
//             luckyNumbers.push(randomNum); 
//         } else {
//             while (luckyNumbers.includes(randomNum) === false) {
//                 randomNum = Math.floor((Math.random() * 10 )+ 1);
//                 if (luckyNumbers.includes(randomNum) === false) {
//                     luckyNumbers.push(randomNum);  
//                 } 
//             }
//         }  
//     }
//     return luckyNumbers
// }


// console.log(luckyNums(9))

function createLuckyNums (n) {
    let luckyNumbers = []; 

    while (luckyNumbers.length < n) {
        let i = 0;
        let randomNum = Math.floor((Math.random() * 10 )+ 1);
        
        if (luckyNumbers.includes(randomNum) === false) {
            luckyNumbers.push(randomNum); 
        }
        i++;
    }
    return luckyNumbers;
}
console.log(createLuckyNums(9));