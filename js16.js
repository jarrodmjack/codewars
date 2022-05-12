



/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

*/




function solve(arr){

    let posArray = []
    let negArray = []
    let filtered = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            posArray.push(arr[i])
        }else{
            negArray.push(arr[i])
        }
    }


    console.log(posArray)

    if(posArray.length > negArray.length){
        let newPosArray = negArray.map((item, i) => Math.abs(item))
        console.log(newPosArray)
        filtered = posArray.filter((item, i) => !newPosArray.includes(item))
    }else if(negArray.length > posArray.length){
        let newNegArray = posArray.map((item, i) => -Math.abs(item))
        console.log(newNegArray)
        filtered = negArray.filter((item, i) => !newNegArray.includes(item))
    }

    return filtered [0]
    
   

    // let filtered = posArray.filter((item, i) => !newPosArray.includes(item))
    // console.log(filtered)

};


// function takes in array
// loop through the function
// check if the item 



console.log(solve([1, -1, 2, -2, 3]))
// solve([-110,110,-38,-38,-62,62,-38,-38,-38])

// solve([-3, 1, 2, 3, -1, -4, -2])
  