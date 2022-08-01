/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/



// PREP

// I will write a function that takes in an array of values. I want to push all of the 0's to the end, while preserving the order of the rest of the items.


// P:
// Assuming 0's will be integer 0's and not string 0's.
// Array length could be large so be efficient
// Assuming array will always have 0s in it.
// Array values could be anything



// R: I will return a new modified array with all of the 0's moved to the end of the array whilst preserving the order of all other elements





// E: Examples
/* 
Example 1: [1, 2, 3, 0, 0, 4, 5, 6] ---> [1, 2, 3, 4, 5, 6, 0, 0]
Example 2: [0, 0, 0, 5, 2, "a", false, true, 0] ---> [5, 2, "a", false, true, 0, 0, 0, 0]
*/




function moveZeros(arr) {
    // P:
    // create result array
    // loop through original array
    // if the element is not equal to a 0, push to the result array
    // I should be left with an array of 0s, which I will concatenate on to the result array
    // return result array

    let result = [];
    let zeros = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i])
        }else{
            zeros.push(arr[i])
        }
    }

    return result.concat(...zeros)

  }

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))



