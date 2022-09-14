

/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
*/


// I will write a function that finds all of the peaks inside of an array


// P:
// Assuming not all numbers will be the same
// There could be "plateus" with multiple of the same number in a row
// will there be any absurdly large numbers?
// array could be empty
// first and last elements are not considered peaks
// need peaks and positions
// for plateaus, only return the first value of that plateau


// I will return an object with the pos and peaks keys, each having a value of an array. Pos array will contain the position of the peaks in the initial array, peaks will contain the actual peak values.


// E:
/* 
Example 1:
[1,2,3,4,3,4,2] ---> {pos:[3,5], peaks:[4,4]}

Example 2: ---> 
[1,3,5,5,5,5,2] ---> {pos:[2], peaks:[5]}

*/


function pickPeaks(arr) {

    let allPeaksAndPos = { pos: [], peaks: [] };

    if (arr.length > 2) {
        let pos = -1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                pos = i
            } else if (arr[i] < arr[i - 1] && pos != -1) {
                allPeaksAndPos.pos.push(pos)
                allPeaksAndPos.pos.push(arr[pos])
                pos = -1;
            }
        }
    }

    return result


}

pickPeaks([1, 2, 2, 2, 1, 3, 3, 3, 1])
// pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
// pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])