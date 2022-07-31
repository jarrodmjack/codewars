/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/



// PREP

// I will write a function that takes in a string and returns a modified string in Pig Latin.



// P:
// String can be multiple words
// Not testing for empty string
// Must work on any length of words
// not testing for null etc





// R: I will return a modified string formatted in Pig Latin.


// E: Examples
/* 
"Hello there" ---> "elloHay heretay"
"I love icecream" ---> iay ovelay cecreamiay
*/


function pigIt(str) {
    // P:
    // Split string into array of words //
    //create variable to store first element of array (shift)
    // put that element on the end of the array using template literal
    // add on the pig latin "ay" to word
    // join word with spaces
    // return word

    let arr = str.split(' ')

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '!' || arr[i] === '?'){
            arr[i] === arr[i]
        }else{
        const firstLetter = arr[i].split('').shift()

        arr[i] = `${arr[i].slice(1)}${firstLetter}ay`
        console.log(arr[i])
        }
        
    }
    console.log(arr.join(' '))

}


pigIt('O tempora o mores ?')
pigIt('Hello there')
// pigIt('This is m string')

















