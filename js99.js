/* 
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?
*/


// PREP
// I will write a function that takes in a string of : capital letters, integers, special characters; I will be modifying the string to make this password safer


// P:
// String will have: capital letters, integers, special characters
// each letter needs to be shifted by a given number (shifted in relation to its index in the alphabet)
// each number needs to be replaced by its complement to 9 (subtract that number from 9)
// if letter is in odd index make it lowercase, if even make it uppercase
// reverse entire result
// assuming string will be valid


// R: I will return a modified string with all of the above mentioned modifications



// E: Example
/* 
"I LOVE TACOS@123", 2  ---> "678@UqEcV GxQn k"
*/

function playPass(s, n) {
    // P:
    // create alphabet variable
    // split by spaces into array of words
    // perform a for loop or for each loop on each sub array
    // apply the above mentioned changes to each item
    // Return reversed string

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "123456789"
    const special = "!@#$%^&*(){}:.,></"
    // let res = ''
    let arr = s.split('')

    let res = arr.map((item, i) => {
        if (alphabet.includes(item)) {
            let idx = alphabet.indexOf(item)
            if(i % 2 !== 0){
                return item = alphabet[idx + n].toLowerCase()
            }
            item = alphabet[idx + n]
        }else if(nums.includes(item)){
            item = String(Number(9 - item))
        }else{
            item = item
        }
        return item
    })




    console.log(res.reverse().join(''))

    // for(let i = 0; i < arr.length; i++){
    //     let sub = arr[i].split('').map((item, j) => {
    //         if(alphabet.includes(item)){
    //             let idx = alphabet.indexOf(item)
    //             if(i % 2 !== 0){
    //                 item = item.toLowerCase()
    //             }
    //             item = alphabet[idx + n]
    //             // console.log(item)
    //         }else if(nums.includes(item)){
    //             item = String(Number(9 - item))
    //             // console.log(item)
    //         }
    //     });
    // }


}


// playPass("I LOVE TACOS@ 123", 2)
playPass("I LOVE YOU!!!", 1)











