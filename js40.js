
/* 
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

Enjoy.
*/


// PREP

// I will create a function that takes in a string, and return a string with even/odd indexed characters in their own groups respectively.




// P: 
// 0 will be considered even
// all inputs will be valid string characters
// inputs could be even or odd length
// test for any other gotchas



// R: Return 1 string in new format of even / odd groups of letters separated by a space


// E: 
// For example, I am passed in a string of "bananas" ---> ouput would be "bnns aaa"






function sortMyString(s) {
    // P: 
    // create 2 string variables, one for odd characters, one for even characters.
    // turn string into array
    // for loop through array length
    // check IF
    // IF index is even, add that character to even string
    // else if index is odd, add that character to the odd string
    // join strings together with a space
    // return string

    let evens = ''
    let odds = ''

    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        if(i === 0 || i % 2 === 0){
            evens += arr[i]
        }else{
            odds += arr[i]
        }
    }

    console.log(`${evens} ${odds}`)

}

sortMyString('bananas')