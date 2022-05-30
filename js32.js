
/*

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/











/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

// PREP
// I will be given two arrays of strings. I must add the total letters from each string from both arrays and subtract the difference then return that value


// P: If either or both arrays are empty, return -1.
// All string values will be valid characters. 
// All string chars will be from a-z


// R: Return the difference of subtracting a1 string length value - a2 string length value or vice versa depending on which value is largest


// E:
// arr1 = ['abcd', 'abcd'] ---> length is 8
// arr2 = ['abc', 'abc'] ---> length is 6
// return arr1 length(8) - arr2 length(6) = 2


function mxdiflg(a1, a2) {
// P:
// create sum variables for each array
// loop through each array and get the string character length
// if a1 length is > a2 length, return a1 - a2
// else if a2 length > a1 length, return a2 - a1

let aSum = 0;
let bSum = 0;

let arr1 = a1.sort((a, b) => a.length - b.length)
let arr2 = a2.sort((a, b) => b.length - a.length)
console.log(arr2[0].length - arr1[0].length)


// let aResult = a1.concat(...a1).join('').length
// let bResult = a2.concat(...a2).join('').length

// console.log(aResult > bResult ? aResult - bResult : bResult - aResult)

}

mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])
















const angle = n => (n-2) * 180


// function angle(n) {
//     let sum = (n - 2) * 180
//     return sum
//   }