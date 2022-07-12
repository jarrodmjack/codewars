

/* 
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.
*/

// PREP
// I will write a function that takes in a string. I must calculate the highest values of consecutive consonant substrings, with each letter being assigned a value starting at 1. (eg. a = 1, b = 2, c = 3 ..... z = 26)


// P:
// I will be given a lowercase string
// characters will only be alphabetic and will not contain any spaces
// there will always be consonants
// consonants could be single, or could be consecutive



// R: I will return a number value, that number representing the highest value of consonants.


// E: 
/* 
Example 1: 'zodiacs' ---> ['z', 'd', 'cs'] ---> 26 since z === 26 and it is higher value than both 'd' and 'cs'


Example 2: 'shallow' ---> ['sh', 'll', 'w'] ---> 'sh' = 8 + 19, 'll' = 12 + 12, 'w' = 23 ---> 'sh' is highest because 8+19 = 27

*/









function solve(s) {
// P:
// find a way to push single or consecutive consonants to an array
// then I will loop through that and get the value for each letter 
//  I will add the values for the consecutive consonants and whichever has the highest value gets returned
let alphabet = [...'.abcdefghijklmnopqrstuvwxyz'];
let vowels = [...'aeiou'];
let consonants = [];

// s = s.replaceAll('a', '.')
// s = s.replaceAll('e', '.')
// s = s.replaceAll('i', '.')
// s = s.replaceAll('o', '.')
// s = s.replaceAll('u', '.')

// s = s.split('.')

// let filtered = s.filter(item => item)



for(let i = 0; i < vowels.length; i++){
    // console.log(vowels[i])
    if(s.includes(vowels[i])){
    s = s.replaceAll(vowels[i], '.')
    }
}
let values = s
            .split('.')
            .filter(item => item)
            // .forEach(item => {
            //     if(item.length > 1){
            //         item = item.split('')
            //     }else{
            //         item = item
            //     }
            // })
            .map(item => {
                if(item.length > 1){
                    return String(item.split('').map(letter => alphabet.indexOf(letter)).reduce((acc, c) => acc + c, 0))
                }else{
                    return alphabet.indexOf(item)
                }
                // return item = alphabet.indexOf(item)
            })
console.log(values.map(Number))
console.log(Math.max(...values))


};


solve('twelfthstreet')