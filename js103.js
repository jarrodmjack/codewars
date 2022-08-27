/* 
Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]
*/


// PREP
// I will write a function that takes in a string and returns a Run Length Encoding as an array of subarrays of paired values



// P:
// Function will take in a string
// Am I testing for null or empty string value?
// How long will string be?
// Values will be put into subarrays



// R: I will return an array of subarrays of paired values as Run Length Encoding. They will be in the format of [number of immediate occurences, the string in question]



// E: Example
/* 
Lets say I am given a string of "aaabbbfgb"
I would return:
[[3, "a"], [3, "b"], [1, "f"], [1, "g"], [1, "b"]]
3 a's occur right off the bat, followed by 3 b's, then 1 f, then 1 g and then a final b
*/




const runLengthEncoding = function (str) {

    // P:
    // create empty counter variable
    // create result array to be returned at the end
    // loop through string
    /* on each loop: counter will go up, if the next item in the list is not equal to the current item
    I will put the counter and the string into a new array item and push that array into the result array*/
    // If next item IS the same as the current item, I will just perform the loop again until the above condition is met
    // return resulting array

    let counter = 0;
    let result = [];

    for (let i = 0; i < str.length; i++) {
        counter++
        if (str[i] !== str[i + 1]) {
            result.push([counter, str[i]]);
            counter = 0;
        }
    }

    console.log(result)

}

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")






