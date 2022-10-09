/* 
You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:

abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
Task:
Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
*/



// I will write a function that takes in a string, as well as 2 numbers. I will produce a new modified string


// P:
// strng is a string of letters on new lines
// I must multiply each character in each line by k
// I must multiply each line by n
// string could be empty
// assuming all parameters will be entered



// R:
// If string is empty, return empty string
// else return the string with each letter multiplied k times, and each line multiplied n times



// E:
/* 
strng = 'abc'
k = 3
n = 2

--> 'abcabcabc\nabcabcabc'

*/


function scale(strng, k, n){

    // if strng is empty, return strng
    // split string into array
    // map and modify each character in the array according to k
    // repeat each string n times
    // join together and return

    if(strng.length < 1){
        return ""
    }

    let res = '';
    let arr = strng.split('\n')
    for(let i = 0; i < arr.length; i++){
        let test = ''
        for(let j = 0; j < arr[i].length; j++){
            test += `${arr[i][j].repeat(k)}`
        }
        res += `${test}\n`.repeat(n)
    }

    console.log(res.slice(1, -1))
}


scale("abcd\nefgh\nijkl\nmnop", 2, 3)
