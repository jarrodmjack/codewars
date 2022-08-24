/* 
Probability 101
You will be given two numbers: length and num.

A number with an amount of digits equal to length is chosen at random.

NB: The random number of length length cannot start with zero if length > 1

Some examples:

if length is 1, there is 10 possible numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

if length is 2, the possible numbers will be all numbers from 10 up to 99

if length is 3, the possible numbers will be all numbers from 100 up to 999

Task
Calculate the probability that the random number is a multiple of num.

The returned value should be a floating point number, representing the probability in percentage.

Examples:

If there is no chance the random number will be a multiple of num you should return 0
If it's certain the random number will be a multiple of num you should return 100
If there is a 50% chance the random number will be a multiple of num you should return 50
If there is a 4.1874% chance the random number will be a multiple of num you should return 4.1874
As we are dealing with floating point numbers the tests take floating point approximation into account, the returned value needs to be exact +/- 1e-8

Possible inputs:

length will be an integer between 1 and 9
num will be an integer between 1 and 1000
Example:
probability(1, 2)
// output: 50
Explanation:
There are 10 numbers with length of 1 digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

5 of them are multiples of 2 = [0, 2, 4, 6, 8]

That means you should return 5/10 represented as a percentage = 50

More examples:
probability(2, 3)
// output: 33.333333333333336
probability(3, 22)
// output: 4.555555555555555
probability(9, 2201)
// output: 0.04543388888888889
*/


// PREP
// I will write a function that takes in a length parameter(integer) and a num parameter(integer). Length will be the length that the number could be. For example, if the length is 1, the nums could only be 1 digit (1-9) etc. I have to calculate the probability that one of the numbers would be a multiple of num


// P:
// If no change the random number will be a multiple of num, must return 0
// If it's certain the random number will be a multiple of num, return 100
// if 50% chance the random number will be a multiple of num, return 50
// if there is a 4.1251% chance the random number will be a multiple of num, return 4.1251
// radom number of length cannot start with 0 if length is greater than 1



//R: I will return the probability that one of the numbers included specified by length, would be a multiple of num.



// E: Example
/* 
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] lets say length is 1, and num is 2
Since length is 1, only the numbers 0-9 could be included since they are single digits and >= 0
Now I must calculate the probability that a multiple of num shows up
in this case we would have 0, 2, 4, 6, 8. Since there are 10 elements total and 5 of them are multiples of 2, we have a 50% chance to get a multiple of 2
so we would return 50
*/




// function probability(length, num){
//   // P:
//   // create a number based on length.
//   // check how many times multiple of num appears
//   // compare to how many elements there are and find percentage
//   // return percentage




//  }




// function sqInRect(length, width) {
//   //   multiply length * width
//   // divide by largest possible number * itself
//   let res = [];
//   let min = Math.min(length, width)
//   let squares = 0;
//   let totalSquares = length * width

//   squares = min * min
//   // console.log(totalSquares)


// while(totalSquares > 0){


//     if(totalSquares/squares >= 1){
//         totalSquares -= squares
//         res.push(squares/min)
//     }

//     if(totalSquares/squares < 1){
//       min -= 1
//       squares = min*min
//     }

// }

// console.log(res)


// }

// sqInRect(3, 5)
// sqInRect(14, 20)



String.prototype.toJadenCase = function () {
  let strArr = this.split(" ")

  let res = [];

  for (i=0;i<strArr.length;i++){
    res.push(`${strArr[i][0].toUpperCase()}${strArr[i].toLowerCase().slice(1)}`)
  }
  console.log(res)
};


let str = "jaden case"

console.log(str.toJadenCase())