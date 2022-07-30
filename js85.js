/* 

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/




// PREP

// I will write a function that takes in a string value. I will return an array in the format of [string with longest consecutive amount, amount of times that string shows up].



// P:
// String could be empty or have character so need to test for empty value
// If two or more characters show up with the same amount of characters, I will return the first one I encounter
// Not testing for any null / invalid input




// R: I will return an array in the form of [letter, count] - letter being the letter that shows up the most consecutive times, count being the amount of times it does show up


// E: Example:
/* 
Example 1: 'aabbbccdddd' ---> ["d", 4] - "d" shows up the most consecutive times(4)
Example 2: 'aaabbbcccddd' ---> ["a", 3] - "a" shows up the same amount as the others, however it is first in the array
Example 3: '' ---> ["", 0] - empty string value
*/




// function longestRepetition(s) {
    
//     // P:
//     // split string into array
//     // loop through array
//     let arr = s.split('');
//     let lengths = [];
//     let count = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i + 1] || arr[i] === arr[i - 1]){
//             count ++
//             if(arr[i + 1] !== arr[i]){
//                 lengths.push(count)
//                 count = 0;
//             }
//         }
//     }

//     let max = Math.max(...lengths)

//     let occurences = arr.reduce((acc, c) => {
//         if(!acc[c]){
//             acc[c] = 0
//         }
//         acc[c] ++
//         return acc
//     }, {})
    
//     // console.log(occurences)

//     const longestLetters = []

//     for(const key in occurences){
//         if(occurences[key] === max){
//             longestLetters.push(`${key}`)
//         }
//     }

//     if(longestLetters.length === 1){
//         return [longestLetters[0], max]
//     }

//     let check = false;
//     let index = [];
//     // console.log(longestLetters)
//     for(let k = 0; k < longestLetters.length; k++){
//         index.push(s.indexOf(longestLetters[k].repeat(max)))
//     }

//     // console.log(index)
//     return [s[index[0]], max]
    


//   }



console.log(longestRepetition('ppssaassddfffdddd'))














