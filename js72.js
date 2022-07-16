


/* 
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// PREP
// I will create a function that will take in a string, and encrypt it (change it) so that the first character will be equal to its ASCII value, the second character will be switched around with the last character in the string



// P: 
// Assume all characters will be string or string numbers (aka no special characters)
// string could contain multiple words
// strings could be any length
// assume all inputs are valid. Not null



// R: I will return the modified string with the first letter changed to its ascii value, and the 2nd letter switched positions with last letter




// E: 
/* 
Example 1: "Hello" ---> "72olle"
Example 2: "Joe" ---> "74eo"
*/








const encryptThis = function(text) {

    

    // P:
    // split multi word string and store in arr variable
    // map through array, change item at index 0 to ascii value, switch last item with 2nd item (switch index 1 with index arr.length - 1)
    // join back together 

    let arr = text.split(' ')
    console.log(arr)
   
    // console.log(arr)
    let arr2 = [];

    arr.forEach(item => {
        if(item.length === 1){
            item = `${item[0].charCodeAt(0)}`
            arr2.push(item)
        }else if(item.length === 2){
            item = `${item[0].charCodeAt(0)}${item[1]}`
            arr2.push(item)
        }else{
            item = `${item[0].charCodeAt(0)}${item[item.length - 1]}${item.slice(2, item.length -1)}${item[1]}`
                arr2.push(item)
        }
    })

    console.log(arr2)


}




encryptThis('A wise old owl lived in an oak')

// 65 119esi 111dl 111lw 108dvei 105n 97n 111ka








const reverseList = (list) => list.reverse()

reverseList([1, 2, 3, 4])