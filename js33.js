



/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/


// PREP
// Program will test the life of an evaporator containing a gas. The program will report the nth day on which the evaporator will be out of use
// We know content in (ml), percentage of gas lost per day (evap per day) and threshold for when evaporator is no longer useful.








// function evaporator(ml, evap_per_day, threshold){ 
    
//   }













/* 
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/


// PREP
// I will create a program that tests if a given array is in ascending order or not. If the array is ascending, return string value stating it is ascending, else if descending return string value stating it is in descending order, else return not ascending

// P:
//  Function takes in array
// Array can have a length of 1 (in which case it is considered ascending)
// Array will never be empty
// Array can be in descending order, ascending order, or mixed order

// R: Return string values as such...
// if ascending ----> 'The list of numbers *list of nums* is in ascending order'
// if not ascending or descending ---> 'The list of numbers *list of nums* is not in ascending order'
// if descending ----> 'The list of numbers *list of nums* is in DESCENDING order not ascending order'



// E: [1, 2, 3, 4, 5] ---> ascending
// [1, 3, 2, 5] ---> not ascending
// [5, 4, 3, 2, 1] ---> descending

// function inAscOrder(arr) {
// // // P: 3 test cases
// // // create variable === original array
// // // IF arr.join() === newArr.sort((a, b) => a - b) ----> return ascending string
// // // else IF arr.join() === newArr.sort((a, b) => b - a) ---> return descending string
// // // else return not ascending string

//     let arr2 = arr.sort((a, b) => a - b).join('')
//     // console.log(arr2)

//    if(arr2 === arr.join('')){
//        console.log(true)
//    }else{
//        console.log(false)
//    }
//   }

// //   function inAscOrder(arr) {
// //     for(let i = 0; i < arr.length - 1; i++) {
// //       if (arr[i] > arr[i+1]) {
// //         console.log(false)
// //       }
// //     }
// //     console.log(true)
// //   }

//   inAscOrder([4, 3, 2, 1])


