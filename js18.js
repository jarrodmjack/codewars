/* 
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


/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/


// PREP
// Understanding the problem
// take in str. each letter must be separated by a space, except for the ends of the words\


// P: Always a string, can be number strings. Must have a space between each letter in the word.
// R: return modified string
// E: Example - 'hello' ----> 'h e l l o' <-- does that look right?



// function spacify(str) {
//     // create variable and to store split string
//     let splitStr = str.split('')
//     // join together with no spaces, split the string again, and then join together with spaces.
//     splitStr = splitStr.join(' ')
//     //return the string
//     return splitStr
//   }


//   spacify('Hello world')





















/* 
Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
Explanation:
Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
Explanation:
Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
Explanation:
Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*
*/


//PREP
// Understanding the problem
// I will be given an  array of integers, I must find the Nth smallest element in the array


// P: Array size is at least 3, numbers can be positive / negative / 0. No decimal numbers. Repetition can occur, do not remove duplicates
// R: will be returning a number
// E: if I have a list of numbers [5, 10, 15, 20]. I have a position parameter of 2, I want to return the 2nd smallest  number, which in this case would be 15.


function nthSmallest(arr, pos){
    //P:
    // loop through array
    // sort array
    // find the Nth smallest number comparing to the pos parameter
    // return the Nth smallest number indicated by the parameter
    let sorted = arr.sort((a, b) => a - b)
    for(let i = 0; i < sorted.length; i++){
        return sorted[sorted.length - pos]
    }

  }

  console.log(nthSmallest([15,20,7,10,4,3], 3))