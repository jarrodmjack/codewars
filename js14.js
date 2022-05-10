


/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/







// I tried

// function solve(arr){  

//     let alphabet = "abcdefghijklmnopqrstuvwxyz"
//     let newAlphabet = alphabet.split('')
//     console.log(newAlphabet)

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].split(''))
//     console.log(arr[i])
// }


//     // arr.forEach((item, i, arr) => {
//     //     console.log(item.split(''))
//     //     let newItem = item.split('')
//     //     console.log(newItem)
//     //     console.log(newAlphabet)
//     // })

// };




// function solve(arr){  
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
//     let final = []
//     for (let i = 0; i < arr.length; i++) {
//       let count = 0;
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j].toLowerCase() === alphabet[j]) {
//           count++;
//         }
//       }
//       final.push(count); 
//     }
//     return final
//   };


// create variable to store alphabet
// create variable for end array 
// for loop, declare a count variable
// nested for loop, comparing positions of items to their position in the alphabet
// count++
// final.push(count)
// return final



// function solve(arr){  
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   
//     let final = [] //final array to push counts into

//     // first for loop to loop through array items. Declaring count variable
//     for(let i = 0; i < arr.length; i++){
//         let count = 0
//         /* second loop allows iteration through the actually array words themselves to
//            to compare position to position in alphabet */
//         for(let j = 0; j < arr[i].length; j++){ 
//             if (arr[i][j].toLowerCase() === alphabet[j]){
//                 count++ // IF array items position === alphabet position, add 1 to the respective counter
//             }
//         }
//         final.push(count) //push counts to final array
//     }
//     return final

//   };



//   function solve(arr){  
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
//     let final = []
//     for (let i = 0; i < arr.length; i++) {
//       let count = 0;
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j].toLowerCase() === alphabet[j]) {
//           count++;
//         }
//       }
//       final.push(count); 
//     }
//     return final
//   };



// console.log(solve(["abode","ABc","xyzD"]))









/* 
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/



// var greet = function(name) {
//     // name = name[0].toUpperCase()
//   return `Hello ${name[0].toUpperCase()}${name.slice(1)}!`
//   };


//   console.log(greet('riley'))


























/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/


// function digits(n) {
//     let arr = String(n).split('')
//     console.log(arr.length)
//   }


//   digits(21542)









































/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/








// function divisors(num){
//     if(num)
// }




// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// check if number is greater than 1
function divisors(number){

// creating array to store nums in
let numsArr = []

let isPrime = true

if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is prime`);
    } else {
        for(let j = 2; j < number; j++ ){
            if(number % j === 0){
                numsArr.push(j)
            }
        }
    }
}

return numsArr
// check if number is less than 1

}

console.log(divisors(12))