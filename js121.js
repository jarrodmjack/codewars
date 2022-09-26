/* 
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// I have to find the highest sum I could possibly make inside of this array of numbers


// P:
// array may contain only negative numbers
// Array could also contain only positive numbers?
// need highest possible sum
// function takes in one array
// array length could be 0
// all numbers below 10 and greater than -10


// R: Returns
// if the array is empty, return 0
// if the array is all negative, return 0
// if whole array is positive, reduce array into sum
// if none of the above happens, then the algorithm to get the max sum will be implemented


// E: Example
/* 
[] --> return 0
[-3,-5,-6,-2,-1,-1] --> return 0

[1,5,2,7,9,2] --> reduce into sum

[-2, 1, -3, 4, -1, 2, 1, -5, 4] --> return 6. [4,-1,2,1] is the highest sum possible
*/



const maxSequence = function(arr){
    // create sum variable
    // if all nums are negative or array is empty, return 0
    // if all positive, reduce array and return
    // loop through array
    // find greatest contiguous sum
  
    let maxSoFar = 0;
    let maxEndingHere = 0;

    for(let i = 0; i < arr.length; i++){
        maxEndingHere = maxEndingHere + arr[i]  
        if(maxSoFar < maxEndingHere){ 
            maxSoFar = maxEndingHere 
        }
        if(maxEndingHere < 0){ // if maxEndingHere is less than 0, set back to 0
            maxEndingHere = 0
        }
    }
  return maxSoFar
}

  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

 