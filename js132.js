

/**
 * @param {number[]} nums
 * @return {number}
 */

// [2,2,1,1,1,2,2]
// [1,1,1,1,2,2,2] <-- sorted
// if array length is <= 2
// sort array
// get last index of first number in array
// if last index is greater than (array length / 2)
//return index 0 of array
// else return last index



// [2,2] ---> return index 0


var majorityElement = function (nums) {

    let hashmap = {};
    let halfNumsLength = (nums.length / 2)
    // console.log(halfNumsLength)
    for (let i = 0; i < nums.length; i++) {
        if(!hashmap[nums[i]]){
            hashmap[nums[i]] = 0
        }
        hashmap[nums[i]] ++
    }
    for(const key in hashmap){
        if(hashmap[key] > halfNumsLength){
            return key
        }
    }

};


majorityElement([3, 4, 3])