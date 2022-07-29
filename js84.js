

/* 
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

*/




// PREP
// I will write a function that gets the sum of an array and finds what number would need to be added to the sum in order to get to the nearest prime number




// P:
// Array size is at least 2
// numbers can be repeated
// newer sum should equal the closest prime number
// Assuming original array items could already equal a prime number




//R: I will return the integer needed to be added to the array sum, to reach the nearest prime number



// E: Examples
/* 
[3, 1, 2] ==> return (1) because the sum of the array is 6, and the nearest prime number is 7. 6 + 1 = 7
[2,12,8,4,6] ==> return (5) because the sum of the array is 32 and the nearest prime number is 37. 32 + 5 = 37
*/



function minimumNumber(numbers) {
    // P:
    // reduce array into a sum
    // once I have the sum, I need to perform a while loop and increment number
    // on each iteration, check if the number is a prime number
    // find out how much I have to add to sum to get to that nearest prime number
    // return integer


    let sum = numbers.reduce((acc, c) => acc + c, 0)
    let prime = false;
    let counter = 0;

    if(isPrime(sum)){
        return 0
    }
   
    while(!prime){
    counter++
    sum ++
    prime = isPrime(sum)
    console.log(prime)
    console.log(sum)
    }

    console.log(counter)

}

// minimumNumber([3, 2, 1])
minimumNumber([2, 12, 8, 4, 6])





function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}

// console.log(isPrime(33))


