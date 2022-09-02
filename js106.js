

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
function formatWords(array) {
    //  P:
    // create string variable
    // loop through array of words
    // if word is last in the array, join together with 'and'
    // otherwise join together with a comma and a space
    // return as a string

    if (!array || array.length === 0) {
        return ''
    }
    let words = array.filter(item => item !== '')
    console.log(words)

    if (words.length === 1) {
        return `${words[0]}`
    }

   

    let formattedString = ''
    for (let i = 0; i < words.length; i++) {



        if (i === words.length - 1) {
            formattedString += `and ${words[i]}`
        } else if (i === words.length - 2) {
            formattedString += `${words[i]} `
        } else {
            formattedString += `${words[i]}, `
        }
    }

    return formattedString

}
console.log(formatWords(['', '', 'three']))







