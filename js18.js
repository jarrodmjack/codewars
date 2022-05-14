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



function spacify(str) {
    // create variable and to store split string
    let splitStr = str.split('')
    // join together with no spaces, split the string again, and then join together with spaces.
    splitStr = splitStr.join(' ')
    //return the string
    return splitStr
  }


  spacify('Hello world')