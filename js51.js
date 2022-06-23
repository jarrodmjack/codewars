

/* 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// PREP
// I will write a function that takes in a string of words/string numbers. Each word will contain a number, My job is to sort those numbers and place them back at the index in which they came from, then return the new string with the numbers sorted


// P:
//  Every word will have a number in it, no words will have more than one number
// argument can be an empty string, if so I return empty string
// not testing for number types or any other types aside from string values
// could be any length / combination of words


// R: I will return a modified string, in which the numbers that were randomly input into the words will be returned sorted along with the rest of the string intact



// E: for example, lets say I am given this string as an arg ---> "thi4s codin2g challe1nge rock3s" 
// I would return ---> "thi1s codin2g challe3nge rock4s" as the numbers are now sorted 




function order(words){
// P:
// I need to split this string into an array
// I need to find the number values inside
// get the indexes of them, then sort and return them back to their original spot
// return the modified string
words = words.split(' ')
let sortedWords = []
let nums = [...'.123456789']

words.forEach(item => {
    console.log(item.split('').sort())
})



}

order("is2 Thi1s T4est 3a")