




// var splitInParts = function(s, partLength){
//     var parts = [];
//     var array = s.split('');
//     while(array.length) {
//       parts.push(array.splice(0,partLength).join(''));
//     }
//     return parts.join(' ');
//   }


//   const splitInParts = (s, partLength) => {
//     // P: 
//     // create variable to store empty array
//     // split string and store in variable
//     // while loop --> while array.length
//     // push array.splice(start, deleteCount) --> join together after splice
//     // join together with spaces and return array with new items
//     let parts = [];
//     let array = s.split('')
//     while(array.length){
//         parts.push(array.splice(0, partLength).join(''));
//     }
//     console.log(parts.join(' '))

//   }


//   splitInParts('hahahahahaha', 3)















/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/



// PREP

// I must find the greatest common divisor of two positive integers.

// P: 
// assume inputs x and y are equal to or > 1. This means greatest common divisor will always be greater than or equal to 1
// Not testing for 0 values or any other gotchas. (aka not testing for null values)


// R: return the greatest common divisor as an integer


// E: example: x = 30, y = 12 ---> greatest common divisor is 6



function mygcd(x,y){
    // P: 
    // create 2 variables to store Max and Min
    // create variable to store array
    // for loop x or y number of times (depending on which is bigger)
    // check if max && min are divisible by i
    // if divisible, push to array.
    // return largest value in array

    let divisor = []
    let max = Math.max(x, y)
    let min = Math.min(x, y)
    
    for(let i = 1; i <= max; i++){
        if(max % i === 0 && min % i === 0){
            divisor.push(i)
        }
    }
    console.log(Math.max(...divisor))


  }

  mygcd(12, 30)





