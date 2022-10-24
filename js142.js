
/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotced"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

// string, may not have vowels, can be upper or lower case, vowels can appear more than once, could be odd number of vowels, 


// return string with vowels reversed. If no vowels in string, return string as is. If odd vowels, return  "outer" vowels


/* 
input = "apple"
output = "eppla"

input = "Example"
output = examplE

input = "myths"
output = "myths"
*/





var reverseVowels = function (s) {

    // create vowels "map"
    // if s does not include any vowel, return s as is
    let vowels = 'aeiouAEIOU'
    let left = 0;
    let right = s.length - 1;
    s = s.split('')
    // loop through entire string
    // if current item at left index is a vowel and item at right index is vowel, reverse them
    // else if current item at left index is vowel and current item at right index is not
    // decrement right index

    // else if current item at left index is not vowel and current item at right index is 
    // increment left index


    while (left < right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left++
            right--
        } else if (vowels.includes(s[left]) && !vowels.includes(s[right])) {
            right--
        } else if (!vowels.includes(s[left]) && vowels.includes(s[right])) {
            left++
        } else {
            left++
            right--
        }
    }

    return s.join('')
};


console.log(reverseVowels("apple"), 'eppla')
console.log(reverseVowels("Example"), 'examplE')
console.log(reverseVowels("myths"), 'myths')
console.log(reverseVowels('aA'), 'Aa')
console.log(reverseVowels('ddddddddddddaa'), 'ddddddddddddaa')
