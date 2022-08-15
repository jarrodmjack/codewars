/* 
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/



// PREP

// I will write a function that takes in two parameters; The first parameter is an array of 2-value arrays with the first item being a string of letters and the second item being a number to compare, if the character code of any of the characters in the string matches the number it will count as a mini-win. The second parameter for the function is a number to count how many mini-wins I need to win the game



// P:
// Assuming all inputs will be in correct format
// mini-wins must be greater than or equal to the "win" parameter (integer)
// strings could be any length, I am to compare each letter to the character code in the array



// R: I will return the string 'Winner!' if the user gets enough mini-wins, else I will return 'Loser!'


// E: Examples
/* 
Win Condition:
([["ABC", 65], ["MGY", 89], ["FPR", 122]], 2) ===> 'Winner!'. This returns winner because in the first sub-array, 'A's ascii value is 65 so that is a mini-win. In the second sub-array, 'Y's ascii value is 89 so that is a mini-win. In the third sub-array, nothing matches. This counts as a win because we got at least 2 mini-wins as specified in the 2nd parameter of 2.


([["ABC", 21], ["MGY", 76], ["FPR", 81]], 2) --> 'Loser!'. This returns loser because we got no mini-wins
*/

function bingo(tickets, win){
    
    let miniwins = 0;

    for(let i = 0; i < tickets.length; i++){
        let set = Array.from(new Set(tickets[i][0].split(''))).forEach(item => {
            if(item.charCodeAt(0) === tickets[i][1]){
                miniwins++
            }
        })
        // console.log(set)
        // tickets[i][0].split('').forEach(item => {
        //     console.log(item)
        //     // if(item.charCodeAt(0) === tickets[i][1]){
        //     //     console.log(item)
        //     // }
        // })
    }

    console.log(miniwins)

    // return miniwins < win ? 'Loser!' : 'Winner!'

}

// bingo([["ABC", 65], ["MGY", 89], ["FPR", 122]], 2)
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))


bingo([ [ 'GC', 80 ],
  [ 'ESSSBYAC', 82 ],
  [ 'ID', 84 ],
  [ 'TTCYGOTY', 72 ],
  [ 'QOM', 86 ],
  [ 'RQMNULU', 82 ],
  [ 'URBCUC', 89 ],
  [ 'PMDL', 86 ],
  [ 'BWXJDW', 87 ] ], 3)