/* 
Ask interviewer if you can take some quick notes
//PREP
Understanding the problem
//print numbers 1 to num, if divisible by 3 print fizz, if divisible by 5 print buzz, if divisible by 3&5 print fizzbuzz

//P:Will it always be a number? Will this number be a floated value or whole number? Will it ever be a negative number? Any other gachas?
//R: Do I print to console or return them?
//E:  Example
function fizzBuzz(num){
//Psuedo:
 // loop from 1 to num
 // if divisible, use conditionals with%3&%5, %3, %5
 // console.log num or fizz, buzz, fizzbuzz

}
*talk through it*
fizzBuzz(5) // 1, 2, fizz, 4, buzz
fizzBuzz(3) // 1, 2, fizz
fizzBuzz(15) // 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzBuzz
Does this all seem good?

*/


// PREP
// how many pairs? compare each pair. If the numbers are consecutive, add 1 to a counter and return. Ignore numbers with no pair
// looping through the array
// Nums can be even, odd, postive or negative. Numbers will be whole numbers
// if no pairs are consecutive, return 0



//P: Array of numbers to compare pairs for consecutive values
//R: Count will be returned
//E: Example:
// function pairs(arr){
//     // logging variable to store count
//     let count = 0
//     // incrementing loop by 2 because we are comparing in pairs
//     for(let i = 0; i < arr.length; i+=2){
//         if(arr[i] + 1 === arr[i + 1] || arr[i] - 1 === arr[i + 1]){
//             count += 1 
//             // adding 1 to the count for each pair if nums are consecutive
//         }
//     }
//     console.log(count)
//     // end result is returning an array
// }

// pairs([-1, -3])



