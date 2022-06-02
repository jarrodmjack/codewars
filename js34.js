




/*
Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

// PREP
// I will write a function that returns the number of occurences of an element in an array from the given parameter


// P: 
// all inputs will be valid
// parameter could be a string or a number
// letter will be lower case(?) ---> it shouldnt matter tbh


// R: I will return the number of occurences of (x)


// E: Example: function blabla([1, 2, 3, 1, 1], 1) ----> 3


// // Array.prototype.
// numberOfOccurrences = function(arr, x) {
// // P: 
// // create counter variable
// // loop through array
// // if current item === x,  counter ++
// // return counter

// let count = 0;

// for(let i = 0; i < arr.length; i++){
//     arr[i] === 1 ? count++ : count += 0
// }
// console.log(count)

// }

// numberOfOccurrences([1, 2, 3, 4, 1, 1], 1)
var arr = [0, 1, 2, 2, 3, 1, 1]

Array.prototype.numberOfOccurrences = function(x) {
    let count = 0
    this.forEach(item => item === x ? count++ : count += 0)
    console.log(count)
}


arr.numberOfOccurrences(1)



