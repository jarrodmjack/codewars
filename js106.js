

/* 
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/


// PREP

// I will write a function that takes in an array of words, and must join them togther in a format of ', ' (comma and a space) and for the last word, it needs to be separated by the word 'and' instead of the space and comma


// P:
// Will any empty arrays be passed in?
// Will any value outside of an array be passed in? (e.g. null, undefined, string, number etc)
// Will the array only contain strings?
// will any of the strings in the array be empty?


// R: I will return a string of words joined together separated by a space and a comma, except for the last word which will be separated by the word 'and'.


// E: Examples
/* 
Example 1:
['dogs', 'cats', 'birds'] --> "dogs, cats and birds"

Example 2:
[] ---> ""

*/
// function formatWords(array) {
//     //  P:
//     // create string variable
//     // loop through array of words
//     // if word is last in the array, join together with 'and'
//     // otherwise join together with a comma and a space
//     // return as a string

//     if (!array || array.length === 0) {
//         return ''
//     }
//     let words = array.filter(item => item !== '')
//     console.log(words)

//     if (words.length === 1) {
//         return `${words[0]}`
//     }



//     let formattedString = ''
//     for (let i = 0; i < words.length; i++) {



//         if (i === words.length - 1) {
//             formattedString += `and ${words[i]}`
//         } else if (i === words.length - 2) {
//             formattedString += `${words[i]} `
//         } else {
//             formattedString += `${words[i]}, `
//         }
//     }

//     return formattedString

// }
// console.log(formatWords(['', '', 'three']))






/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// PREP

// *write the problem you are trying to solve*
// We need to get the number of vowels in a string


// P: *What are the parameters of*
// Are we sure that the str parameter will always be a string value?
// What would the length be? Unsure
// str will only consist of letter and / or spaces
// vowels will only consist of a, e , i , o , u



// R: Return count of vowels as a number.


// E: Examples
/* 
Example 1: 'apple' ---> returns 2 because there are only 2 vowels in the given string

Example 2: '' ---> return 0 because its and empty string

Example 3: 'Lizzy's 100 hours project idea is great!' ---> return 11 because the project is really cool.

*/





function getCount(str) {
    
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if('aeiou'.includes(str[i])){
            counter ++
        }
    }

    console.log(counter)

}

getCount("Lizzy's 100 hours project idea is great!")
// getCount("apple")
// getCount("aaaaaa")
