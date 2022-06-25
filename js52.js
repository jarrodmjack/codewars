


/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
*/


// PREP
// I will write a function that takes in a list of strings, and creates an array of ways to split the original array into 2 pieces. I will split the array into as many different ways as possible


// P:
// Assuming argument will always be a valid array
// Assuming all elements in array will be strings
// Assuming array length will be 2 or greater



// R: I will return an array of arrays containing the split arrays.



// E: For example, lets say I am given an array of strings like this ['I', 'love', 'tacos', 'and', 'burritos']
// I need to find every possible way to split the array into two pieces like this
// ['I', 'love tacos and burritos']
// ['I love',  'tacos and burritos']
// ['I love tacos',  'and burritos']
// ['I love tacos and', burritos']




function partlist(arr) {
    // P:
    // create array variable that will be pushing each iteration of my code into
    // loop through array and find a way to split the item into two pieces all the way down the array
    // push each iteration into the array variable
    // return the array

    let reverseArr = arr.slice(0)
    reverseArr.reverse()
    // reverseArr.reverse()
    // console.log(arr)
    // console.log(reverseArr)

    let left = '';
    // let right = arr.reduce((acc, c) => acc + ` ${c}`)
    let right = '';
    console.log(right)

    let leftSet = []
    let rightSet = []
    for(let i = 0; i < arr.length; i++){
        if(i > 0){
            left += ` ${arr[i - 1]}`
            leftSet.push(left)
            console.log(left)
            // console.log(right)
        }
    }

    for(let j = 0; j < reverseArr.length-1; j++){
        
            right += ` ${reverseArr[j]}`
            rightSet.push(right)
        console.log(right)
        
    }


    console.log(rightSet)

    // leftSet.reverse()

    console.log(leftSet)

    let finalArr = []
    for(let e = 0; e < rightSet.length; e++){
        finalArr[e] = `${leftSet[e]},${rightSet[e]}`
    }
console.log(finalArr)

}


partlist(['I', 'love', 'tacos', 'and', 'burritos'])