


/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!
*/


// PREP
// I will write a function that takes in two strings. I will then compare the strings to find characters that are not common in both strings. I will return those as a new string


// P:
// Will all entries be valid strings? Yes
// What length will strings have? Any
// Will there be special characters such as dashes, hyphens or dollar signs?
// any other gotchas?



// R: I will return a new string comprised of the unique characters from combining the unique chars from string a and b



// E: string a = 'agfds', let string b = 'abcds' ----> I would return 'gfbc'





function solve(a,b){

// P:
// create a variable to store an array
// split both a and b into arrays
// loop through each, comparing if the current item in the array is included in the opposite string. I will do this for both strings
// if the item is NOT included in the opposite string, I will push it to the array
// join the array together and return

let result = []

let arrayA = a.split('')
let arrayB = b.split('')
for(let i = 0; i < arrayA.length; i++){
    if(!b.includes(arrayA[i])){
        result.push(arrayA[i])
    }
}

for(let i = 0; i < arrayB.length; i++){
    if(!a.includes(arrayB[i])){
        result.push(arrayB[i])
    }
}


console.log(result)

};


solve('agfds', 'abcds')


