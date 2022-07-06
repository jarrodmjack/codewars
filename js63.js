



/* 

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
*/


// PREP
// I will write a function that takes in an array, I must return the element that appears most frequently., if there is a tie for most frequent number, I must return the largest number among them. AMOGUS



// P: 
// Function takes in array of integers
// I will not be testing for empty/null array so I can assume it will always contain valid values
// I will assume all numbers in the array will be greater than 0
// array could be any length 


// R: I will return the number that appears most frequently in the array. If there is a tie, I will return the largest number




// E: 
// For example, I am given array [12, 10, 8, 12, 7, 6, 4, 10, 12]  --> 12 appears 3 times, which is the most so I would return 12
// Foe example, I am given array [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]  --> 12 and 10 both appear the same amount of times, but 12 is larger than 10, so I return 12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  ---> 3. 3 appears the most









function highestRank(arr) {
    // reduce array into an object of array items as keys and occurrences as values
    // create 2 empty arrays. 1 to push occurences into, the other to push the keys into once I have the largest number
    // loop through object and push occurences into the empty array
    // get max number from array
    // use max number to find all object keys that match that occurence rate and push those keys into an array
    // find max from new array
    // return max

    let arrOfOccurences = [];
    let keysArr = [];

    let occurences = arr.reduce((acc, c) => {
        if (!acc[c]){ 
        acc[c] = 0
    }
        acc[c]++
        return acc
}, { })
    
    for(const key in occurences){
        arrOfOccurences.push(occurences[key])
    }
    let occurMax = Math.max(...arrOfOccurences)
    
    for(const key in occurences){
        if(occurences[key] === occurMax){
            keysArr.push(key)
        }
    }

    keysArr.map(Number)
    console.log(Math.max(...keysArr))


}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])