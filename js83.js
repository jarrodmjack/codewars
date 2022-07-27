/* 
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:
*/


// PREP
// I will write a function that takes in an array of string words and for each word I need to remove any consecutive letters and return as new array



// P: 
// strings will be lowercase only
// Assuming array length will be >= 1
// not testing null values



// R: I will return a new array with all consecutive letters removed from each string in the array


// E: Examples
/* 
Example 1: ['aabbcc', 'bbccdd', 'ccddee'] ---> ['abc', 'bcd', 'cde']
Example 2: ['hello', 'darkness', 'friend'] --> ['helo', 'darknes', 'friend']
*/






function dup(s) {
    // P: 
    // create result array
    // for loop
    // for each item, check if letter is consecutive
    // if consecutive, remove from string and push modified string to res array
    // return res array
    let res = [];

    for(let i = 0; i < s.length; i++){
        let string = ''
        for(let j = 0; j < s[i].length; j++){
            if(s[i][j] !== s[i][j + 1]){
                string += s[i][j]
            }
        }
        res.push(string)
    }
    console.log(res)


};


// dup(['aabbcc', 'bbccdd', 'ccddee'])
dup(['hello', 'darkness', 'friend'])