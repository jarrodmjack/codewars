/* 
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

// PREP
// I will write a function that takes in 2 integers, one integer will be a number to be split into digits and added to the power of p, and the other integer(p) will be the power to raise the numbers to. I will incremement p with each iteration


// P:
// n and p will both be integers greater than 0
// solving for k, but k is not always available
// p is incrememented in successive powers



// R: I will solve for k and return as an integer, if k is not available I will return -1



// E: Examples
/* 
digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/





function digPow(n, p){
    //get singular digits of n
    //sum digits, but each digit incrementally increases to power of p (increment power of p)
    //dividing sum by n
    // if divisible by n , assign that value to k
    // else return -1
    
    let arr = String(n).split('').map(Number)

    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]**p
        p++
    }
    if(sum % n === 0){
        return sum / n
    }else{
        return -1
    }
    
  }

digPow(46288, 3)