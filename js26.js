/* 
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

// PREP
// I will be given a string of digits. I must explode the digits (basically repeat the digits * num) and return a string. Remove zero values


// P: 1 must not be repeated. any 0 must be removed from the string. I will then return the string and call the function
// R: returning a string value

// E: '324' ---> '333224444'



function explode(s) {
// P: 
// split the string into an array
// map and turn each item into a number
// loop through array and for each item, I will repeat the item by itself - 1. 
// if num === 1, do not repeat
// if num === 0, remove from equation
// join back together as a string
// return string

let str = ''
let arr = s.split('')
for(let i = 0; i < arr.length; i++){
    // if(arr[i] === '1'){
    //     str += str
    // }
        str += arr[i].repeat(arr[i])
    
    
}

console.log(str)

}

explode('312')