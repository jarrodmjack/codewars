

/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/


// PREP
// I will write a function that returns the "expanded" form of a number.


// P:
// All numbers will be whole numbers greater than 0
// All inputs will be valid
// Number could be any length so needs to work on any size of number



// R: I will return an expanded number as a string in the format of 'number + number + number'




// E:
/* 
Example 1: 70304 ---> '70000 + 300 + 4'

Example 2: 149 ---> '100 + 40 + 9'

Example 3: 12 ---> '10 + 2'

*/




function expandedForm(num) {
    // P:
    // I need to turn the number into a string
    // I need to loop through the string
    // current number + 0.repeat(rest of number sliced) <-- this will be the amount of 0's put on the number
    // if  the number is at the very end and NOT equal to 0, I will just return that number
    
    let string = String(num).split('').reverse().join('');
    let expandedNums = [];

    for(let i = 0; i < string.length; i++){
        let expanded = '';
        if(string[i] !== '0'){
            expandedNums.unshift(string[i] + '0'.repeat(i))
        }

    //   console.log(expandedNums.join(' + '))


    }
    console.log(expandedNums.join(' + '))

  }

//   expandedForm(70304)
  expandedForm(12)