
/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/


// PREP
// I will write a function that takes in an array of numbers. If the numbers are consecutive, I have to sum those numbers in the array and pass into resulting array, else just pass the number into the resulting array


// P: 
// Array can be any length
// numbers could be >=< 0
// Assume list will never be empty/null
// Array elements will always be a number


// R: I will return an array with regular elements untouched, but consecutive elements summed into one number




// E:
/* 
Example 1: [1, 2, 2, 2, 3, 4] ----> [1, 6, 3, 4] because there are three consecutive 2's
Example 2: [-4, -4, 2, 6, 2, -1, -1, 1] ---> [-8, 2, 6, 2, -2, 1] because there are 2 consecutive -4s and 2 consecutive -1s
*/






function sumConsecutives(s) {
    // P:
    // create result array
    // loop through s array given
    // create a sum variable on each loop.
    // if the number is consecutive, add to that sum. Once it is no longer consecute, push that num to the result array
    // else if the number is not consecutive, push that num to the result array
    // return result array
    let count = 0;
    let sum = 0;
    let result = []

    for (let i = 0; i < s.length; i++) { 
            // current = next or  current = prev  AND  current !== next
        if (s[i] === s[i + 1] || s[i] === s[i - 1]){
            count ++
            if(s[i] !== s[i + 1]){
                sum = count * s[i]
                count = 0
                result.push(sum)
            }
        } else{
            sum = 0
           
            result.push(s[i])
        }   
        console.log(sum)

        

    }
    

    console.log(result)

}


// sumConsecutives([1,1,7,7,3])
sumConsecutives([1, 2, 2, 2, 2, 3, 4, 5])
// sumConsecutives([1,4,4,0,4,3,3,1]) // [1, 8, 0, 4, 6, 1]


// if current item === item before, its consecutive