


/* 
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

*/


// PREP
// I will write a function that returns the number of times the search text shows up inside of the fullText argument.

// P:
// will both inputs be valid strings?
// will there always be at least one case of the searchText inside of the fullText?
// any other gotchas?


// R: I will return the number of times searchText argument appears in fullText argument


// E: Example ---> fullText = 'aaabbbcccddd', searchText = 'ccc' ----> this would return 1, as 'ccc' shows up once inside of the string


function solution(fullText, searchText){

// P:
// compare searchText to fullText
// check how many times searchText is inside of fullText (.includes or maybe rig something up with replace?)
// return how many times searchText is inside of fullText as an integer
let count = 0
let str = fullText.replaceAll(searchText, '-')

str = str.split('')
for(let i = 0; i < str.length; i++){
    if(str[i] === '-'){
        count++
    }
}
console.log(count)


}


console.log(solution('abcdeb', 'b'))