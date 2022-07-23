/* 
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/



// I will create a function that returns a "pyramid" of arrays (nested arrays). 




// P: 
// I will be given a number >= 0
// Assuming input will always be a number >= 0 (no strings or null)
// Number could be large



// R: I will return an array of ascending length sub arrays




// E: Examples
/* 
Example 1: 2 ---> [[1], [1, 1]]
Example 2: 4 ---> [[1], [1, 1], [1, 1, 1], [1, 1, 1, 1]]
*/





function pyramid(n) {

// I get a number n
// create empty pyramid array to store nested arrays
// for loop and loop n times
// for each one of those loops, I need to create a sub array with the number 1 inside of that array, n times
// push array to pyramid array

let pyramid = []

for(let i = 1; i <= n; i++){
    const block = '1'.repeat(i).split('').map(Number)
    
    pyramid.push(block)
    
}

console.log(pyramid)



}
pyramid(4)










