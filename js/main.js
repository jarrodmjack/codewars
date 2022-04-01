/*
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!

*/



// function fixTheMeerkat(arr) { 
//     arr.reverse()
//     console.log(arr)
//    }

// fixTheMeerkat(["tail", "body", "head"])






// let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

// function howMuchILoveYou(n) { //function takes in number of times to go through the array
//     return phrases[(n - 1) % phrases.length] // iterate through array multiple times until reaching specified n
// }
// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]
// const howMuchILoveYou = n =>['not at all','I love you','a little','a lot','passionately','madly', 'pog', 'sadge'][n%8]



//  // n % number of items in array
// console.log(howMuchILoveYou(7))


/* 
function takes in number of petals
iterate through array as many times as specified in n
return whatever value it is ended at
return value
*/











/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

    */

    //function takes in array of sheep. true = sheep, false = not sheep

//     function countSheeps(arrayOfSheep) {
 
//         //reduce array of sheep into only trues
//         let sheepSum = arrayOfSheep.reduce((acc, c) => c === true ? acc = acc + 1 : acc = acc + 0)
//         console.log(sheepSum)
//     }
    
// countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true])
    





