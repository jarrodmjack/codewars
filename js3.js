/*
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

*/




// function maxMultiple(divisor, bound){
//     let sum = 0

//     if(divisor % bound === 0){
//         return bound
//     }else{
//         while(sum <= bound){
//             sum += divisor
//           }
//           console.log(sum - divisor)
//     }


//   }

//   maxMultiple(37, 200)











































/* 
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/






// var capitals = function (word) {
//     let indexes = []
//    let arr = word.split('').forEach((item, i) => item === item.toUpperCase() ? indexes.push(i) : console.log('no'))
// return  indexes
// };


// capitals('CodEWaRs')















































/* 
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/


// function smallEnough(a, limit){
//     let sum = 0
//     for(let i = 0; i < a.length; i++){
//      if(a[i] > limit){
//          sum += 1
//      }else{
//          sum += 0
//      }
//     }
//     return sum === 0 ? true : false

// }

// console.log(smallEnough([1,9,4,5,5,5,1,0,0,1,5], 7))














































/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


*/



// function minValue(values){
//     let filtArr = values.filter((item, i, array) => array.indexOf(item) == i)
//     let sorted = filtArr.sort((a, b) => a - b)
//                         .map(String)
//                         .join('')

//     console.log(parseInt(sorted))
//     // let mapped = sorted.map(String)
//     // console.log(sum.join(''))
//     // console.log(parseInt(mapped.join('')))
//   }



// function minValue(values){
//     let arr = Array.from(new Set(values)) // [5, 7, 9]
//     console.log(parseInt(arr.join('')))
//   }

//   minValue([5, 7, 5, 9, 7])







































// function findEvenIndex(arr)
// {
//   var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//   for(var i = 0; i < arr.length; i++) {
//       if(i > 0) left += arr[i-1];
//       right -= arr[i];

//       if(left == right) return i;
//   }

//   return -1;
// }



// function findEvenIndex(arr) {
//     // creating variable to store left side of array
//     let left = 0;
//     // creating variable to store right side sum
//     let right = arr.reduce((acc, c) => acc + c)
//     /* loop through array length, if i is greater than 0 
//     left plus/equals array item - 1
//     right -= array item 
//     doing this on each loop iteration makes the left sum become greater as
//     the right sum becomes smaller due to it looping through the length
//     of the array
//     */
//     for (let i = 0; i < arr.length; i++) {
//         if (i > 0) left += arr[i - 1]
//         right -= arr[i]

//         // if left is equal to right (sum on left is same as sum on right), return index 

//         if (left == right) return i;

//     }

//     // else if no index creates an even sum, return -1
//     return -1
// }



function findEvenIndex(arr){

    let left = 0;
    let right = arr.reduce((acc, c) => acc + c, 0)

    for(let i = 0; i < arr.length; i++){
        if(i > 0) left += arr[i-1]
        right -= arr[i]

        if(left == right) return i;
    }


    return -1

}

console.log(findEvenIndex([5,5,10,15,20])) // --> 3