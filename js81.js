/* 
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/


// PREP
// I will write a function that takes in an array of integers. I must return an array of arrays with pairs of any numbers that have a difference of 2 between them in ascending pairs

// P:
// Assuming there are no duplicate integers in array
// Order of integers in the input array should not matter (sort?)
// result array should be sorted in ascending order of values
// assume input will be valid array



// R: I will return an array of arrays of pairs that are a difference of 2, in ascending order



// E: Examples
/* 
Example 1: [1, 3, 6, 4, 7, 5,] ---> [[1, 3], [4, 6], [5, 7]]
Example 2: [1, 5, 8, 9] ---> []
Example 3: [1, 5, 7, 2, 3] ---> [[1, 3], [3, 5], [5, 7]]
*/


function twosDifference(input) {
    // P:
    //create result array var to push pairs into
    // sort initial input array (this will ensure ascending value in result array)
    // loop through array and check if items are difference of 2
    // if so, put in array and push that array to result array
    // return result array

    let result = [];
    input = input.sort((a, b) => a - b)
    for(let i = 0; i < input.length; i++){ //for each number
        for(let j = 0; j < input.length; j++){ //check if any number in the array is difference of 2
            if(input[i] + 2 === input[j]){
                const pair = [input[i], input[j]]
                // console.log(input[i], input[j])
                result.push(pair)
            }
        }
    }

    console.log(result)


}

// twosDifference([1, 4, 2, 3])
twosDifference([ 1, 3, 5, 6, 8, 10, 15, 32, 12, 14, 56 ])
// twosDifference([1, 3, 6, 4, 7, 5,])
// twosDifference([1, 5, 7, 2, 3])