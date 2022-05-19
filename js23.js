

/* 
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/


// PREP
// I will have a function that takes in a string. The string will consist of a C, an M, and .'s . 
// I have to find out if the cat can reach the mouse or not. The cat can jump over 3 characters
// I will return the corresponding answer

// P: String, always has a C, M and .'s. Cat can jump over 3 chars. IF caught, return 'Caught!', else return a 'Escaped!'

// R: Return the corresponding string

// E: C...m ---> 'Caught!' since the cat is 3 chars from the mouse







// function catMouse(x){

// // P: 

// // create a variable to store a count in.
// // split the string and count the periods. 
// // if <= 3, cat catches mouse
// // else mouse escapes
// // return corresponding condition

// let count = x.split('').filter(item => item === '.').length

// return count <= 3 ? 'Caught!' : 'Escaped!'



// }


// console.log(catMouse('C....m'))











/* 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/


// function removeDuplicateWords (s) {
//     let arr = s.split(' ')

//     let mySet1 = Array.from(new Set(arr))
//     console.log(mySet1.join(' '))
//   }

//   removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')










/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/




// PREP
// filter out geese. return geese-less array


//Parameters: ---> Function takes in array. always an array. New array cannot contain any geese. array must be returned



//Returns: Return a new array with no geese inside of it


//Example:
// ['goose', 'chicken', 'goose', 'duck'] ----> ['chicken', 'duck']







function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  
  //Pseudo: 
  // create a variable to store new geeseless array in
  // filter array for geese
  // check new array to make sure no geese

  let noGeese = birds.filter((item, i) =>  !geese.includes(item))
  return noGeese



};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])










