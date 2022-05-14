/* 
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/


// PREP
// Understanding the problem
// Check if a number is greater than all of the elements after it added as a sum, if it is, push to new array, if not, move to next item.

// P: // numbers can be positive, negative or zero's
// Array size is always at least 3 elements
// no floated numbers
// no string values
// negative number will be less than sum of 0


//R: if the number is greater than sum of all elements to the right, push to new array and return array


// E: Example   

// [5, 29, 3, 12, 5]
// 29 is greater than 3 + 12 + 5 , therefore it gets pushed into new array
// 12 is greater than 5, therefore it gets pushed into new array



// function arrayLeaders(numbers){
//     // create variable for new array to store leaders
//     let arr = []
    
//     // loop through the array
// //    numbers.forEach(item => console.log(item))
// for(let i = 0; i < numbers.length - 1; i++){
//     // console.log(numbers.slice(i+1))
//     if(numbers[i] > numbers.slice(i+1).reduce((acc, c) => acc + c)){
//         arr.push(numbers[i])
//     }else{
//         console.log('No less')
//     }
// }

//     if(numbers[numbers.length - 1] > 0){
//         arr.push(numbers[numbers.length - 1])
//     }
    


//     console.log(arr)

//     // check if current number is greater than all numbers after summed
//     // if num is greater than sum, push to array
//     // else continue


//     // return array
//   }

//   arrayLeaders([-36,-12,-27])