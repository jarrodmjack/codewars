



/* 
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/



// PREP
// I will create a function that takes in two parameters. A string and an array of strings. I need to find the strings inside of the array that are anagrams of the first parameter and return them as a new array



// P: 
// Array could have no anagrams
// Assuming first parameter(string) will always be a valid string
// Assuming array length will always be greater than 1
// using boolean values to decide if anagram or not



// R: I will return an array of all words that are anagrams of the original string


// E: Examples
/* 
Example 1: ('abba', ['aabb', 'bbbaa', 'bbaa', 'abbab']) ---> ['aabb', 'bbaa']
Example 2: ('racer',  ['garer', 'cracer', 'carece', 'reacer'] ---> []) returns empty due to no anagrams
*/


function anagrams(word, words) {
    // P:
    // create result array
    // create indices array to store indices of anagrams
    // split original string, sort, join
    // loop through words array
    // for each item I will split, sort, join and check if equal to word
    // if it is equal, I will store the index in an array
    // I will push items from word array at indices[i] into result array
    // return result

    let res = [];
    let indices = [];

    word = word.split('').sort().join('')
    
    for(let i = 0; i < words.length; i++){
        let val = words[i].split('').sort().join('')
        if(val === word){
            indices.push(i)
        }
    }

    for(let i = 0; i < indices.length; i++){
        res.push(words[indices[i]])
    }
    console.log(res)



}

anagrams('racer', ['crazer', 'racar', 'caers'])