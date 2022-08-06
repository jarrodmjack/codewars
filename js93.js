

/* 
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/



// PREP

// I will write a function that takes in a string of numbers (weights) and turns these weights into different weights by summing the digits of those numbers and sort.



// P:
// Could be random whitespace for some reason
// Assuming string won't be empty(not testing for null)
// String can be any length


// R: I will return a new string with the original numbers ordered by their "weights".



// E: Examples
/* 
"100, 32, 62, 15, 39, 14"   ---> "100, 14, 15, 32, 39, 62"
"  100,      32, 62,     15, 39, 14     "   ---> "100, 14, 15, 32, 39, 62"
""   ---> ""
*/

//P:
// Creating a helper function that will take in a number and get the "weight (sum it's digits)" // 
// cleanse the original string of any extra white space between numbers/outside of numbers //
// split into array of numbers 
// sort using my helper function (sort by weights)
// join array together once sorted
// return string 


function orderWeight(string) {
    string = string.trim()
    let arr = string.split(' ').map(Number).filter(item => item !== 0).sort((a, b) => {
        if(getWeight(a) === getWeight(b)){
            return a - b
        }else{
            return getWeight(a) - getWeight(b)
        }
        
    })
    console.log(arr)

}

// orderWeight("  100     32  62  15 39 14   ")
orderWeight("56 65 74 100 99 68 86 180 90")
orderWeight('2000 11 11 10003 22 123 1234000 44444444 9999')

function getWeight(num) {
    let spl = String(num).split('').map(Number).reduce((acc, c) => acc + c, 0)
    return spl
}
