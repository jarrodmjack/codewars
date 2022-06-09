


/*

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
*/

// PREP
/* 
I will create a function that takes in a number 
and checks if the number is a palindrome or not.
if not, the number will add itself + the number in
reverse order and check if it is a palindrome,
if not, repeat that action until the number is a palindrome.
each time I do this, I will be adding 1 to the counter
*/


// P: 
// function parameter will always be a number
// number length can be one, in  which case the number will be a palindrome and steps would = 0
// all inputs are guaranteed to have a final palindrome eventually
// not checking for null value

// R: I will return the number of steps it took to get a number to be a palindrome


/* E: for example, if I am given the number 87, 87 is not a palindrome so I do the following:
87 not palindrom
87 + 78 = 165 --> not palindrome, + 1 to  counter
165 + 561 = 726 --> not palindrom, + 1 to counter
762 + 627 = 1353 --> not palindrome, + 1 to counter
1353 + 3531 = 4884 --> palindrome!!! + 1 to counter
*/ 


var palindromeChainLength = function(n) {
    // P:
    // create steps variable to store how many steps it takes to get a palindrome
    // check IF n is a palindrome
    // while loop
    // if not, compare n + n(reversed) and check if palindrome again. Add 1 to counter
    // repeat until palindrome is found. 
    // Return counter
    let steps = 0;
    if(n === parseInt(String(n).split('').reverse().join(''))){
        console.log(0)
    }

    while(n !== parseInt(String(n).split('').reverse().join(''))){
        n = n + parseInt(String(n).split('').reverse().join(''))
        steps += 1
        // n + parseInt(String(n).split('').reverse().join(''))
    }
console.log(steps)

  };

  palindromeChainLength(87)