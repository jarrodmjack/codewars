

/*
The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
*/






// function flyBy(lamps, drone) {
//     let droneLength = drone.length
//     let calcLength = lamps.length - drone.length

//     let o = 'o'.repeat(droneLength)
//     let x = 'x'.repeat(calcLength)

//     let str = o.concat(x)

//     console.log(str)

// }

// flyBy('xxxxxxxxx', '===T')







/*

Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/




// PREP
// I will write a function that takes in 2 parameters, both numbers. The first number will be a larger integer, the 2nd number will be the nth digit of the first number in which we want to return



// P:
// nth digit is counting from right to left
// numbers can be 0 so I will need to test for that and return accordingly
// numbers can also be negative integers
// Assuming both inputs will be valid integers (aka not strings/arrays etc)
// if a number starts with 0's, it needs to be reduced down to its base number. for example (00032 would = 32)



// R: I will return the digit in which meets the requirements of the 2nd number parameter in the function, else I will return a -1 



// E: For example....
// (22423, 3) ---> 4
// (57563321, 5) ---> 6
// (42255, 0) ---> -1
// (-9892, 3) ---> 8






var findDigit = function(num, nth){
    

    num = Math.abs(num)
    console.log(num)
    // If nth <= 0, I will end the function and return a value of -1
    // else I will turn num into a string, split it and reverse it.
    // then I will loop through nth amount of times
    // return nth digit
    
    let arrOfNums = num.toString().split('').reverse().map(Number)
   if(typeof arrOfNums[nth - 1] !== 'number'){
    return 0
   }else{
    return arrOfNums[nth - 1]
   }    


}

findDigit(-3257, 2)