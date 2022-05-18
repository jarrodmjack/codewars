

/* 
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


*/




// PREP
// I will return a number from the string. If a string of mixed letters and numbers are entered, I will only return the numbers.

/*P: function takes in a string. It will always take in a string. String could be letters or numbers. positive numbers only. need nums
numbers must be in order they occur in string   */

//R: I will return only the numbers.

//E: Example: I am given a string ---> '1a2b3c'. I will only return 123 as numbers


// const FilterString = function (value) {
//     //P: 
//     // take in string and split it.
//     let arr = value.split('')
//     // loop through the string and search for any item that is a string number
//     let arr2 = arr.map(Number).filter(item => item)
//     console.log(parseInt(arr2.join('')))
//     // if the item is a string number, I will return it.
//     // end return number as numbers, not string numbers


// }

const FilterString = function (value) {
    //P: 
    // take in string and split it.
    let arr = value.split('')
    // loop through the string and search for any item that is a string number
    let arr2 = Number(arr.map(Number).filter(item => item || item == '0' || item == 0 || item === '0').join(''))
    // console.log(parseInt(arr2.join('')))
    // if the item is a string number, I will return it.
    // end return number as numbers, not string numbers
    console.log(arr2)

}


FilterString('1a2b3c')
// passed 2nd try. Had to adjust arr2 to account for 0 values. Can also use !isNaN