


/*

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.


*/



// function noOdds( values ){
//     return values.filter(item => item % 2 === 0)
//   }









































/* 
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/


function evenNumbers(array, num) {
    let newArr = array.filter(item => item % 2 === 0)
    // console.log(newArr)

    while(newArr.length > num){
        newArr.shift()
        console.log(newArr)
    }


    // console.log(newArr)

  }



evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)