/* 
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd
*/


// I will write a function that takes in a string and I will spoonerize it. Spoonerism is when you switch the first leter of the first word with the first letter of the last word. If 3 words I can just ignore the middle one


// params
/* 
function takes in a string
string may contain 2 or 3 words
assuming input will never be empty
numbers may be included but will be treated no differently than letters
*/


// Return
// return a spoonerized string


/* 
Example 1: 
"cat race" --> "rat cace"

Example 2:
"web of lies" --> "let of wies"

*/



function spoonerize(words) {
    // split words into array
    // if length is 2, switch first letter of 0 and 1 indices
    // if length is 3, switch first letter of 0 and 2 indices
    // return spoonerized string
    let wordArr = words.split(' ')
        return `${wordArr[1][0]}${wordArr[0].slice(1)} ${wordArr[0][0]}${wordArr[1].slice(1)}`

}

spoonerize("pig of latin")