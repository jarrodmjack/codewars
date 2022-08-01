/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/





// PREP
// I will write a function that takes in a string and puts a hashtage at the beginning of the string, as well as use PascalCase on every word in the string



// P:
// If more than 140 characters, return false
// If empty string return false
// Use PascalCase for all words in the string
// String could be any length
// whitespace needs to be trimmed



// R: I will return a modified string where the string will be in PascalCase and begins with a hashtag. Must work for any length of Chars under 140




// E: Examples
/* 
Example 1: "Hello this is my kata" ---> "#HelloThisIsMyKata"
Example 2: "     Hello     world " ---> "#HelloWorld"
Example 3: "*141 characters*" ---> false
Example 4: "" ---> false
*/




function generateHashtag (str) {
    // P: 
    // trim string to remove outer whitespace
    // split string by word and store in array
    // create result array
    // loop through original array and remove spaces/empty string
    // map through result array and make every word have uppercase first letter
    // insert hashtag into array
    // join mapped array and return
let lengthTest = str.replace(/\s/g, " ")
console.log(lengthTest)

    if(!str.trim() || lengthTest >= 140){
        return false
    }

    let arr = str.trim().split(' ')
    let res = [];



    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ''){
            res.push(arr[i])
        }
    }

    if(res.join('').length > 140){
        return false
    }
    // if(res.split('').length){

    // }
    
    let result = res.map(item => {
        return `${item[0].toUpperCase()}${item.slice(1)}`
    })

    result.unshift('#')
    return result.join('')
    // console.log(result)



}

console.log(generateHashtag('code                                                                                                                                            wars'))

// console.log(generateHashtag('    hello       world     '))
// console.log(generateHashtag(" Hello there thanks for trying my Kata" ))
// console.log(generateHashtag("398ndfjasdfliasdfghjabga  a dlkas as ads gkjasl glasjkg hlasdghj aslkj ghsaldkgjasihjl gjilads sadl ljsadj glas gkldaslk gjsadg kjsijg hsdg hsdg hjs jkg h iuzsdgh zukgh kusdghk uhsdu gsd gsdiu ghsdu7ytgf syuuygf sdg uduyg kdk gusdh gkjdsh jhskgh ghk"))


// let test = ' '
// // console.log(test.trim())

// console.log(test.trim() ? 'True' : 'false')