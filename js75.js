/* 
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/


// PREP
// I must create a function that returns an array of n elements that have the same value v. 


// P:
// Some arrays may be nested depending on how many times the function is called --> e.g. prefill(3, prefill(2, 'string'))
// Not using loop
// Must test for various invalid values.
// Testing for 0.
// If V is ommitted, fill array with undefined
// if n is anything other than an integer or integer-string, throw a TypeError




// R: I will return an array of n elements that have the same value v





// E:
/* 
Example 1: prefill(2, 'abc') ---> ['abc', 'abc']
Example 2: prefill(0, 'abc') ---> [] 
Example 3: prefill('abc', 'def') ---> TypeError because v is not === to integer or string integer
Example 4: prefill(3, prefill(2, 'abc')) ---> [['abc', 'abc'], ['abc', 'abc'], ['abc', 'abc']]
*/









// function prefill(n, v) {
// // // P:
// // // test if n <= 0, return empty array
// // // test if n is not equal to string number or regular number, return TypeError
// // // make string repeat and split into an array
// // // return array

// if(n <= 0){
//     return []
// }

// if(isNaN(n)){  
//     throw new TypeError(`${n} is invalid`)
// }else{
//     n = Number(n)
// }


// // if(n > 1){
// //     v = `${v} `
// // }

// let arr = new Array(n).fill(v)

// // console.log(arr)
// return arr

// }



function prefill(n, v) {
    // // P:
    // // test if n <= 0, return empty array
    // // test if n is not equal to string number or regular number, return TypeError
    // // make string repeat and split into an array
    // // return array
      
      console.log(n)
    
    if(n <= 0){
        return []
    }
    
    if(n % 1 !== 0 || n < 0 || isNaN(n) || !isFinite(n)){  
        throw new TypeError(`${n} is invalid`)
    }else{
        n = Number(n)
    }
    
    
    let arr = new Array(n).fill(v)
    
    // console.log(arr)
    return arr
    
    }


console.log(prefill(3, prefill(3, 'abc')))


// let num = '14b'

// console.log(isNaN(num))


