




/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

*/

// PREP

// I will be creating a function that takes in an array of arrays. The array lengths will vary, but will have one array length that is non consecutive. I must find the array length that is non consecutive. I will also be testing for null/empty arrays


// P:
// Checking for null/empty arrays
// otherwise I will be assuming the array of arrays will be valid and will be missing a consecutive array length
// should not matter what is inside the inner arrays
// There will always be a missing element and its length will always be between the given arrays



// R: 
// I will return a value as an integer, which will be equal to the array length of the array that is missing from our array of arrays.
// If the initial array is null/empty or one of the arrays inside of our array of arrays is null/empty, I will return 0



// lengths         2               3                    5                           6
// E:         [['/', '/'], ['/', '/', '/'], ['/', '/', '/', '/', '/'], ['/', '/', '/', '/', '/', '/']] --->
// This would return the number 4, since an array with a length of 4 is out of place/missing


// Another example
//  Lets say I am given [] ---> this will return 0 since array is empty






// function getLengthOfMissingArray(arrayOfArrays) {
//     // P:
//     // sort initial array by lengths  --> done
//     // create 0 / null checker values --> done
//     // Push all array lengths into a containing array  --> done
//     // Loop through containing array and find non consecutive/missing length.
//     // Return non consecutive / missing length

//     if (arrayOfArrays.length === 0 || !Array.isArray(arrayOfArrays) || !arrayOfArrays) {
//         // console.log(0)
//     }

//     // array of inner array lengths from initial array
//     let arrOfLengths = arrayOfArrays.map(item => item.length).sort((a,b) => a - b)
//     console.log(arrOfLengths)
//     if (arrOfLengths.includes(0)) {
//         // console.log(0)
//     }

//     // console.log(arrOfLengths)
//     for (let i = 0; i < arrOfLengths.length - 1; i++) {
//         if (arrOfLengths[i + 1] !== arrOfLengths[i] + 1) {
//             console.log(arrOfLengths[i] + 1) //return this
//         }
//     }

// }


// getLengthOfMissingArray([[1, 3, 2, 3],
// [1, 3, 0, 4, 2],
// [3, 4, 2, 2, 4, 2],
// [3, 3, 3, 2, 3, 0, 0],
// [3, 2, 2, 1, 3, 1, 1, 4, 3],
// [0, 1, 3, 1, 0, 2, 1, 2, 3, 4, 4, 4],
// [3, 1, 1, 2, 3, 0, 0, 2, 3, 0, 2],
// [0, 3, 3, 1, 2, 0, 0, 2, 1, 3],
// [0, 2, 2, 3, 3, 1, 2, 3, 4, 1, 4, 2, 3]])



// let arr = [null]
// console.log(typeof arr)




let news = [{name: 'Title 1'}, {name: 'Title 2'}, {name: 'Title 2'}]

let arr = news.map(item => item.name)