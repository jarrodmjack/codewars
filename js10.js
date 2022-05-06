

/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0

*/

// create sum variable
// if num <= 0, return 0
// else use a for loop and add each number to the sum


// function sequenceSum(num){
//     let sum = 0
//     let str = ``

//     if(num < 0){
//         return `${num}<0` 
//     }

//     if(num === 0){
//         return `0=0`
//     }
    
//     for(let i = 0; i <= num; i++){
//         // concatenate values
        
//         sum += i
//         if(i === num){
//             str += `${i}`
//         }else{
          
//         str += `${i}+`
//         }

//         if(i === num){
//             str += `=${sum}`
//         }
//     }

//     let lastIndex = str.lastIndexOf(`+`)
//     console.log(lastIndex)
//     // console.log(sum)
//     console.log(str)
// }

// sequenceSum(0)


// let SequenceSum = (function() {
//     function SequenceSum() {}
  
//     SequenceSum.showSequence = function(count) {
//         let sum = 0
//     for(let i = 1; i <= count; i++){
//         sum += i
//     }
//     return sum
//     };

  
//     return SequenceSum;
  
//   })();

// console.log(SequenceSum(6))



// function SequenceSum(num){
//     let sum = 0
//     if(num <= 0){
//         return 0
//     }else{
//         for(let i = 1; i <= num; i++){
//             sum += i
//         }
//     }
//     return sum
// }



var SequenceSum = (function() {
  function SequenceSum() {}
let sum = 0
let str = ``

  SequenceSum.showSequence = function(num) {
    if(num < 0){
        return `${num}<0` 
    }

    if(num === 0){
        return `0=0`
    }
    
    for(let i = 0; i <= num; i++){
        // concatenate values
        
        sum += i
        if(i === num){
            str += `${i}`
        }else{
          
        str += `${i}+`
        }

        if(i === num){
            return str += ` = ${sum}`
        }
    }
  };

  return SequenceSum;

})();

console.log(SequenceSum.showSequence(25))
