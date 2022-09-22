// PREP

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

// P
//   v can be anything
//   if n is 0, return empty array
//   if n is valid, it could be a string number or regular number
//    n may be invalid (eg. boolean, array, something else unexpected)
//   No loop can be used
// if v is ommitted entirely, fill array with undefined


// I will return an array of n elements, with the value of v.
// If n is 0, return empty array
// If n is invalid, throw a TypeError


// Example:
/* 
Example 1:
n = 3
v = 'abc'
---> ['abc', 'abc', 'abc']

Example 2:
n = 0
v = 'xyz'
---> []

Example 3:
n = "5"
v = 5
---> [5,5,5,5,5]

Example 4:



*/


function prefill(n, v = undefined) {




    if (n === 0) {
      return []
    }
  
    if (isNaN(n) || !isFinite(n) || n % 1 !== 0 || n < 0 || typeof n === 'boolean') {
      throw new TypeError(`${n} is invalid`)
    }
  
    let array = Array(Number(n)).fill(v)
    return array
  
  }
  