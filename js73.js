/* 
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/



// PREP
// I will create a function that takes in an array of integers, I want to "add 1" to the total value represented by the array. 



// P:
// All array integers will be single digits > 0
// Array could be any length
// Will need to return null/test for null array inputs/invalid inputs.



//R: I will return an array with +1 added (example below)



// E: 
/* 
Example 1: [1, 2, 3, 4] ---> [1, 2, 3, 5] 
Example 2: [2, 5, 2, 9] ---> [2, 5, 3, 0]
Example 3: [1, -9] ---> null
*/







    // quick for loop to see if any of the values are negative. If they are, I will immediately return false
    // ELSE
    // map arr into string values, join them together, then parse into number
    // once I have the number, I am going to add 1 to it
    // then I will parse back into a string value
    // then I will split

    
    function upArray(arr) {
        if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
        
        let i = arr.length - 1
        
        while (i >= 0 && arr[i] == 9)
          arr[i--] = 0
        
        if (i < 0)
          arr.unshift(1)
        else
          arr[i]++
        
        return arr
      }




upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ])




