/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.

*/



// PREP
// I will write a function that checks if every element in an array is an integer or a float with no decimals and return a boolean value accordingly



// P:
// Array can be any length
// Array elements could be anything
// I am looking for array elements that are either an integer or float with no decimals
// If array is empty I will return true



// R: I will return a boolean value, depending on whether or not the array elements are all numbers/float with no decimals or not.



// E: Examples
/* 
Example 1: [1, 2, 3, 4, 5] ---> true 
Example 2: [1.0, 2, 4, 6] ---> true
Example 3: [] ---> true

Example 4: [1, 2, 'cat', 5, 6] ---> false
anything else ---> false

*/








function isIntArray(arr) {
    if (!arr) {
        return false
    }
    if (arr.length === 0) {
        return true
    }

    let result = arr.filter(item => isNaN(item) || item === null || item % 1 !== 0 || typeof item === 'string')
    return result.length === 0 ? true : false
}

console.log(isIntArray(['-1']))



let test = '-1'

console.log()
