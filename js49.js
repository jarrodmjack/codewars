/* 
back·ro·nym
An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON

(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"
*/

let dict = {
    'P': 'Perfect',
    'O': 'Oogway',
    'G': 'Golf',
    'H': 'Hotel'
}

var makeBackronym = function(string){
    let arr = string.toUpperCase().split('')
    let bkrnm = []
    let dictArr = Object.values(dict)
    console.log(dictArr)
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === dictArr[i][0]){
        bkrnm.push(dictArr[i])
       }
    }
    console.log(bkrnm)
  };


  makeBackronym('pog')






















/*
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;)


*/


// PREP
// I will write a function that returns a string that will have only letters, but with asterisks beside the letter indicating how many times the letter appears in the string. If more than once, make sure to remove the other occurences of that character.


// P:
// Will argument be valid string?
// Will strings contain any sort of special characters?
// Will string contain string numbers?
// will letters be upper/lower case?



// R: I will return a modified string with the occurences of a letter marked by asterisks and separated by commas. Duplicate letters will not be shown, only the first occurrence of that letter





// E: Lets say I am passed in a string of 'Canada' ---> I would return 'c*, a***, n* ,d*'. There are three occurences of a, but we only display the one occurence, and just count them using asterisks



// function getStrings(city){
//     // P:
//     // split string into an array
//     // count each occurence of a letter
//     // use a find index to find the first index of that letter
//     // add an asterisk to the string === the amount of times that letter appeared
//     // return modified string


//     let arr = city.toLowerCase().split(' ').join('').split('')
//     let final = []
    
//     let sumOfLetters = arr.reduce((acc, c) => {
//         if(!acc[c]){
//             acc[c] = ''
//         }
//         acc[c]+='*'
//         return acc
//     }, {})
//     console.log(sumOfLetters)

//     for(const key in sumOfLetters){
//         console.log(sumOfLetters[key])
//         final.push(`${key}:${sumOfLetters[key]}`)
//     }
// console.log(final.join(','))

//   }


//   getStrings('Chicago')