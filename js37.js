


/* 
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

function solution(value){
  //...
}
*/



// PREP
// I will create a function that returns a formatted string in the format of "Value is VALUE" but the number will be a 5 digit number padded by 0's


// P: 
// Input can be any length of nums between 1-4?
// length will be at least 1?
// length will not be over 4
// Inputs will be valid nums
// total return value is 5 digits long


// R: return formatted string in the 'Value is VALUE' format.


// E:
// say I am passed in 324, I will return a string ---> 'Value is 00324' 






// function solution(value){
//     // turn value into a string
//     // add a bunch of 0s to the front
//     // split it
//     // do a while loop, while arr length > remove the first element.
//     // once the loop stops, value should be 5 characters long, including 0's
//     // return value in formatted string format
//     value = `0000${value}`
//     let arr = value.split('')
//     while(arr.length > 5){
//         arr.shift()
//     }
//     let finalResult = `Value is ${arr.join('')}`
//     console.log(finalResult)
//   }

//   solution(2455)












/* 
Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

caffeineBuzz(1)   => "mocha_missing!"
caffeineBuzz(3)   => "Java"
caffeineBuzz(6)   => "JavaScript"
caffeineBuzz(12)  => "CoffeeScript"
*/


// PREP
/* I will create a function that takes an integer as an arg. , lets call this x
if x is divisible by 3, return 'Java'
if x is divisible by 3 and 4, return 'Coffee'
if one of the condition above is true and x is even, add 'Script' to the end of the string.
if none of the condition is true, return the string 'mocha_missing'
*/


// P:
// Argument will be a non-zero value
// Dont need to test for edge case with invalid input (eg something that isnt a number)
// Test for 0 or negative values
// test for any gachas that come up


// R: Return string depending on what condition is true


/* E: for example:
caffeineBuzz(3) ---> 'Java' ---> x is divisible by 3, but x is not an even num
caffeineBuzz(12) ---> 'CoffeeScript' ---> x is divisible by 3 and 4 and is an even num so it gets "script" on the end
caffeineBuzz(1) ---> 'mocha_missing' ---> no condition is true
*/




function caffeineBuzz(x){
// P:
// declare string variable to store result
// if statement to test if x is divisible by 3 and 4
// nested if to test if x is even
// return corresponding string value
// if else statement to test if x is divisible by 3
// nested if to test if x is even
// return corresponding string value
// else statement, return 'mocha_missing'

let str = ''

if(x % 3 === 0 && x % 4 === 0){
    return 'CoffeeScript'
}else if(x % 3 === 0){
    if(x % 2 === 0){
        return 'JavaScript'
    }else{
        return 'Java'
    }
}else if(x % 3 !== 0){
    return 'mocha_missing'
}




}


console.log(caffeineBuzz(3))