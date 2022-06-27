

/* 

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/


// PREP
// I will write a function that takes in an integer, I will create an ascii art shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50



// P:
// Assuming integer will always be a valid number between 1 and 50
// Print to console first to test, then return
// Always the same format of length/width



// R: I will return a string that makes an even square of '+' symbols, with the length/width determined by the integer being passed into the function




// E:
// For example, lets say I am passed in a 5....
// I will return the following:
/* 
+++++
+++++
+++++
+++++
+++++
*/
// I return this, because 5 is the length and width of the shape. If it was 40, I would return something 40x40 etc etc.



// function generateShape(integer){
// // P:
// // take care of length first, repeat a '+' string=== integer amount (for example, lets say '+'.repeat(integer))
// // then I will try to get this lengthwise string to be repeated downword the same amount of times
// // lets say we stored the original string in a variable called x. I would now create a new var called y, but add the \n to create a new line, and repeat the string the same amount of times indicated by integer
// // This should create the specified ascii art.
// // I will check the console first, and then once I have confirmed it is correct, I will return it

// let length = '+'.repeat(integer)
// // console.log(length)
// let width = `${length}\n`.repeat(integer).trim()
// console.log(width)

// }

// generateShape(5)







function vertMirror(str) {
    // let vert = []
    let arr = str.split('\n')
    let vert = arr.map(item => item.split('').reverse().join(''))
    console.log(vert.join('\n'))
}
function horMirror(str) {
    let hor = str.split('\n').reverse().join('\n')
    console.log(hor)
}
function oper(fct, s) {
   if(fct === horMirror){
    return horMirror(s)
   }else if(fct === vertMirror){
    return vertMirror(s)
   }
}

oper(horMirror, 'abcd\nefgh\nijkl\nmnop')

// vertMirror('abcd\nefgh\nijkl\nmnop')
// horMirror('abcd\nefgh\nijkl\nmnop')

// vertical mirror means each of the letters in the words are reversed
// horizontal mirror means the letters are the same, but the items are in reverse order
// fct will be either vertical mirror or horizontal mirror
// s will be a string to apply these functions to.