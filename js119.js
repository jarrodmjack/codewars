/* 
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
*/


// I will write a function that takes in an array of numbers, I must sort the array and find the largest gap between successive numbers (numbers that come right before/after one another)




// P:
// Array size will always be 3 or greater
// numbers can be pos or neg
// numbers will be whole
// there will always be some sort of gap (won't receive an array with the same digits)


// R: I will return the maximum gap between successive numbers as a positive integer representing the difference of the two items


// E: Example
/* 
[1,5,3,8,2] sort -> [1,2,3,5,8]
maximum gap is 3. the difference between 5 and 8 is 3 and represents the largest gap

*/


function maxGap (numbers){
    // sort array
    // loop through array, check each number and find the gap between the current number and the number after
    // each time a new record is set, set gap as that number
    // return gap as a positive integer

    let gap = 0;
    numbers = numbers.sort((a,b) => a - b)

    for(let i = 0; i < numbers.length; i++){
        if(Math.abs(numbers[i] - numbers[i+1]) > gap){
            gap = Math.abs(numbers[i] - numbers[i+1])
        }
    }
    console.log(gap)

}

// maxGap([13,10,2,9,5])
maxGap([-7,-42,-809,-14,-12])
