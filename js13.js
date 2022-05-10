







// function isPalindrome(line) {
//     if(typeof line === 'number' && line === parseInt(String(line).split('').reverse().join(''))){
//         return true
//     }else if((typeof line === 'number' && line !== parseInt(String(line).split('').reverse().join('')))){
//         return false
//     }else if(typeof line === 'string' && line === line.split('').reverse().join('')){
//         return true
//     }else{
//         return false
//     }
//     // }else if(line === line.split('').reverse().join('')){
//     //     return true
//     // }else{
//     //     return false
//     // }


//   }


//   console.log(isPalindrome(292))



















/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/







// function removeDuplicateWords (s) {
//     let arr = s.split(' ')
//      let mySet = new Set(arr)
//     //  console.log(mySet)
//     return mySet.join('')
//   }

// function removeDuplicateWords (s) {

//     let uniqueArray = s.split(' ')

//     let plsWork = uniqueArray.filter(function(item, pos) {
//        return uniqueArray.indexOf(item) == pos;
//    })
//     return plsWork.join(' ')
//      }


//   console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))










/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/


// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

// if(enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
//     console.log(true)
// }else{
//     console.log(false)
// }

// }



// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")




























// function alphabetWar(fight){
    
//     let fighting = fight.split('')

//     let rightCount = 0
//     let leftCount = 0

//   for(let i = 0; i < fighting.length; i++){

//     if(fighting[i] === 'w'){
//         rightCount += 4
//     }else if(fighting[i] === 'm'){
//         leftCount += 4
//     }else if(fighting[i] === 'p'){
//         rightCount += 3
//     }else if(fighting[i] === 'q'){
//         leftCount += 3
//     }else if(fighting[i] === 'b'){
//         rightCount += 2
//     }else if(fighting[i] === 'd'){
//         leftCount += 2
//     }else if(fighting[i] === 's'){
//         rightCount += 1
//     }else if(fighting[i] === 'z'){
//         leftCount += 1
//     }
//  }

//  if(leftCount === rightCount){
//     console.log("Let's fight again!")
//  }else if(leftCount > rightCount){
//     console.log("Right side wins!")
//  }else{
//     console.log("Left side wins!")
//  }

// }

// alphabetWar('zzzzs')





























/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


*/
// function spinWords(string){
//     let arr = string.split(' ').map(item => {
//         return item.length >= 5 ? item.split('').reverse().join('') : item
  
//     })

//     console.log(arr)

//   }


//   spinWords("Hey fellow warriors")

















