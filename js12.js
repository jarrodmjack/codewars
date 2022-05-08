// CODEWARS ARRAY CARDIO


// 8 KYU **************

/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

//function swapValues
// function swapValues() {
//     // variable args to store array.prototype.slice.call
//     let args = Array.prototype.slice.call(arguments);
//     let temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }




// function swapValues(array){
//     console.log(array.reverse())
// }


// swapValues([1, 2])

















// 7 KYU *******************

/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
*/



// function minSum(arr) {
//     // creating variables for sum, count upward, count downward
//     let sum = 0
//     let frontCount = 0
//     let counter = 1 //starting at 1 since array.length - 1 is the last element in the array

//     // sorting array
//     let sortedArr = arr.sort((a, b) => a - b)

//     for(let i = 0; i < sortedArr.length / 2; i++){
//         sum += sortedArr[frontCount] * sortedArr[sortedArr.length - counter]
//         counter += 1
//         frontCount += 1
//     }

//     console.log(sum)


//   }



//   minSum([9,2,8,7,5,4,0,6])
// returns 74




























// 6 KYU *************************



/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/




// function createPhoneNumber(numbers){

//     console.log(numbers)
//     numbers.splice(0, 0, '(')
//     numbers.splice(4, 0, ')')
//     numbers.splice(5, 0, ' ')
//     numbers.splice(9, 0, '-')
//     console.log(numbers.join(''))
   
//   }


// createPhoneNumber([9,0,5,9,7,9,4,3,4,9])




































// 7 KYU ********************

/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

// function cubeOdd(arr) {
//     let sum = 0
//     let cubed = arr.map(item => item ** 3)
//     console.log(cubed)

//     return cubed.reduce((acc, c) => c % 2 !== 0 ? acc + c : acc)

// }

function cubeOdd(arr) {
    
    let arr2 = arr.filter((item, i) => typeof item !== 'number')
   
     if(arr2.length > 0){
         return undefined
     }else{
         // let sum = 0
         let cubed = arr.map(item => item ** 3)
     
         return cubed.reduce((acc, c) => c % 2 !== 0 ? acc + c : acc + 0)
     }
 
 }


console.log(cubeOdd([1, 2, 3, 4]))
