
// .sort((a,b) => a - b)


// [6,5,4,3,2,1]
// [5,6,4,3,2,1]
// [5,4,6,3,2,1]
// [4,5,6,3,2,1]


function sort(arr){
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length-1-i; ++j) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
            console.log(arr)
        }
    }
}

sort([6,5,4,3,2,1])



var search = function(nums, target) {
    
    let low = 0;
    let high = nums.length
  
    while (low < high) {
      
      let half = Math.floor((high + low) / 2) 

      if(nums[half] === target){
        return half
      }else if(target < nums[half]) {
        high = half  
      }else{
        low = half + 1
      }
    }

  return -1
  
};





