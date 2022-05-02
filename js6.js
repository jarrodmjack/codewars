/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/


// function removeUrlAnchor(url){
//     let arr = url.split('')

//     while(arr.includes('#')){
//         arr.pop()
//     }

//   }


//   removeUrlAnchor("www.codewars.com#about")



















/*
*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/


// function check(a,x){
// if(a.includes(x)){
//     return true
// }else{
//     return false
// }
// }

// console.log(check([1, 2, 3], 4))
























/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/



// function multiTable(number) {

//     let result = 0
//     let final = 0

//     for(let i = 1; i <= 10; i++){
//     result = i * number
//     // console.log(`${i} * ${number} = ${result}`)
//     if(i === 10){
//         final += `${i} * ${number} = ${result}`
//     }else{
//         final += `${i} * ${number} = ${result}\n`
//     }
    
//     }
//     return final.slice(1)
  
// }



//   console.log(multiTable(5))

























/*

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
*/


// function formatMoney(amount){
//     return `$${amount.toFixed(2)}`
//   }

//   console.log(formatMoney(3.12))




























/*

Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/




function stringClean(s){
    if(!s){
        console.log('')
    }
  let arr = s.split('')
  let newArr = arr.filter(item => !Number(item) && item !== '0')
  console.log(newArr)
    // console.log(newArr.filter(item => item !== '0'))
}


stringClean("")





