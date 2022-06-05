



/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.
*/

// PREP
//  I must create a function that determines if a string of integers with the values added together is divisible by 3.


// P: 
// input will always be string value
// Assuming input will not have any letters or special characters, only numbers.
// assuming input will be a valid input so no need to check for null
// must return a boolean value at the end


// R: Return a boolean value of true or false depending on if integer is divisible by 3


// E: example ->  '333' ---> true because 3 + 3 + 3 = 9. 9 is divisble by 3
// example -> '3245' ---> false because 3 + 2 + 4 + 5 = 14. 14 is not divisible by 3


function divisibleByThree(str){
// P:
// for modulo operator (easier version)
// split str, map into nums and then reduce into a sum
// ternary to check if num is divisble by 3 or not. Return true or false accordingly...
/*
let num = str.split('').map(Number).reduce((acc, c) => acc + c, 0)
return num % 3 === 0 ? true : false
*/

// P:
// without modulo operator (hard version)
// split string, map into nums and reduce into a sum. 
// create variable to store result of dividing sum by 3
// check isInteger. 
// isInteger returns true if whole num, false if not
let num = str.split('').map(Number).reduce((acc, c) => acc + c, 0)
let result = num / 3
return Number.isInteger(result)


}


console.log(divisibleByThree('324'))