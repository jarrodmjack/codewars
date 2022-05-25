



/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

// PREP
// I will be given a string of words, I must sort the words alphabetically by the last character in each word. If two words have the same last letter, they must appear in the order in which they did in the string. Return sorted worts in an array

// P: All inputs will be valid strings. Function will take in the string of words. 

// R: I will return an array with the sorted words

// E: 'i like bananas' ----. ['like', 'i', 'bananas']


function last(x){
// P:
// split x into an array
// reverse the values in the array using a loop (map?)
// sort items alphabetically 
// try to figure out how to keep them in original array order
// return array

let arr = x.toLowerCase().split(' ').map(item => item.split('').reverse().join(''))
let arr2 = arr.sort().map(item => item.split('').reverse().join(''))
console.log(arr2)


}


function last(x){  //splitting, sorting => getting a.charCodeAt(last letter) - b.charCodeAt(last letter)
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }

// 'man i need a taxi up to ubud'
// ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

last('man i need a taxi up to ubud')



// [ 'the', 'time', 'are', 'we', 'climbing', 'volcano', 'up', 'what' ]
// // should equal
//  [ 'time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what' ]