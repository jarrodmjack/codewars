

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/




// PREP
// I must write a function that returns the factorial for a given input. The input will always be a number. If the number is 
// less than 0 or above 12 I must throw a RangeError. Else return factorial num

// P: Input will always be a number. Input can be positive or negative. If number is less than 0 or above 12, I must throw RangeError
// check for any other gachas that might arise?

// R: if num is within 0 and 13, I will return the factorial for the number, else return an error


// E: if I pass in a 5, my program will return 120, because factorial of 5 is 5*4*3*2*1








function factorial(n){
//  P:

// conditionals for if item is < 0, === 0 , or greater than 12 and return
// if not...
// create a sum variable
// decrementing for loop, i < n
// multiply nums by eachother and store into sum
// return sum

if(n < 0){
   return RangeError()
}else if(n === 0){
    return 1
}else if(n > 12){
    return RangeError()
}

let sum = 1;
   
    for(let i = 1; i <= n; i++){
        sum *= i
    }
    return sum

    // return sum



}


console.log(factorial(13))