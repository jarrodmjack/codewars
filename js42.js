


/* 
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

// PREP
// I will create a function that figures out the index of the vowel that is missing from the given string


// P:
// All inputs are valid
// Every string will contain all vowels but one.
// capitalization does not matter


// R: I will return the index of the missing vowel as a number

// E: 'John Doe hs seven red pples under his bsket' --> We know the 'a' is missing, so we will find the index of a, and return that index






// function absentVowel(x){

// // P: Create variable to store vowels
// // compare string .includes to vowel string
// // whatever vowel is missing, compare to vowels and get the index
// // return the index

// let vowels = 'aeiou'
// x = x.split('')

// let aCheck = 0
// let eCheck = 0
// let iCheck = 0
// let oCheck = 0
// let uCheck = 0

// let z = x.map(item => {
//     if(item === 'a'){
//         aCheck++
//     }else if(item === 'e'){
//         eCheck++
//     }else if(item === 'i'){
//         iCheck++        
//     }else if(item === 'o'){
//         oCheck++
//     }else if(item === 'u'){
//         uCheck++
//     }
// })


// let arr = [aCheck, eCheck, iCheck, oCheck, uCheck]
// // console.log([aCheck, eCheck, iCheck, oCheck, uCheck])
// console.log(arr)

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 0){
//         return i
//     }
// }


// }



const absentVowel = string => {
    return [...'aeiou'].findIndex(letter => !string.includes(letter))
}

console.log(absentVowel('aiou'))