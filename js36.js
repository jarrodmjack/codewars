


/* 
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/


// PREP
// I must make a function that takes in an object. I will get the key/value pairs from the object and turn them into a string in the format of 
// 'KEY = VALUE'


// P:
// Assume parameter will be valid input to start
// Assume object keys/values will be valid
// Values could be string OR number...
// object length will be 1 or greater
// separate each by comma in string
// return or log? return


// R: Return a string in the format of 'KEY = VALUE'


// E:
/* 
for example...
I am given an object like the following:
{a: 1, b: 2, c: 3}
I will return....
'a = 1, b = 2, c = 3' 
*/






function solution(pairs){
// P:
// for in loop
// template literal
// embed keys/values into string using the format specified above
// return that string
    let str = ''

    for(const key in pairs){
        str += `${key} = ${pairs[key]},`
    }

    return str.slice(0, -1)
  }

  solution({a: 1, b: 2, c: 3})


