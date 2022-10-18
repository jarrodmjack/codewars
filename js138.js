/* 
You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
*/




// may have single number, up to 100, no floated nums, could be multiple pairs of same number, no funny biz


// return -> [numOfPairs, numOfLeftovers]


/* 
Example 1:
input = [1,1,2,2,3,4,5]
return [2, 3]

Example 2:
input = [2,2,2,2,2,2]
return = [3, 0]

Example 3:
input = [7]
return [0, 1]

*/



const numberOfPairs = (nums) => {

    // hashmap
    // create pair counter variable
    // for loop through nums
    // if item does not exist in hashmap -> assign value 1
    // if item DOES exist in hashmap, delete item and increase pair counter
  
    // return [paircounter, array of object keys length]
  
    let hashmap = {}
    let pairCounter = 0
  
    for (let num of nums) {
      if (hashmap.hasOwnProperty(num)) {
        delete hashmap[num]
        pairCounter++
      } else {
        hashmap[num] = 1
      }
    }
  
    return [pairCounter, Object.keys(hashmap).length]
  }
  
  
  console.log(numberOfPairs([1, 1, 2, 2, 3, 4, 5]), '[2, 3]')
  console.log(numberOfPairs([2, 2, 2, 2, 2, 2]), '[3, 0]')
  console.log(numberOfPairs([7]), '[0, 1]')
  
  
  