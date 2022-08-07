/* 
Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace

{ a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu' }


*/

// PREP

// I will write a function that takes in a string. I must convert that string to Military callsigns language.

// P: 
// 4 possible punctuations used --> ",.!?"
// punctuation should be kept in return string
// Every word or punctuation should be separated by a space " "
// no trailing whitespace (trim)


// R: I will return a string in the format of "Military callsigns or PILOT language", with each letter in the original string being designated its respective alphabetic callsign



// E: Examples
/* 
"Hello!" ---> "Hotel Echo Lima Lima Oscar !"
"CaN I dO ThiS?!"  --> "Charlie Alpha November India Delta Oscar Tango Hotel India Sierra ? !"
*/

let NATO = {
    a: 'Alfa',
    n: 'November',
    b: 'Bravo',
    o: 'Oscar',
    c: 'Charlie',
    p: 'Papa',
    d: 'Delta',
    q: 'Quebec',
    e: 'Echo',
    r: 'Romeo',
    f: 'Foxtrot',
    s: 'Sierra',
    g: 'Golf',
    t: 'Tango',
    h: 'Hotel',
    u: 'Uniform',
    i: 'India',
    v: 'Victor',
    j: 'Juliett',
    w: 'Whiskey',
    k: 'Kilo',
    x: 'Xray',
    l: 'Lima',
    y: 'Yankee',
    m: 'Mike',
    z: 'Zulu'
}


function to_nato(words) {
    // P:
    // split words by space into array, split each word into its own respective array
    // for each letter, turn to lower case and search for the matching key inside of the Nato object
    // once I have all of the letters transformed to their NATO callsign, I can join the array back together with everything being separated by a space(including punctuation)
    // return string

    let res = [];
    words = words.trim()
    let arr = words.split(' ')
    let letters = [];
    arr.forEach(element => {
        element.split('').forEach(item => letters.push(item))
    });
    // letters = letters.flat()
    
    for(let i = 0; i < letters.length; i++){
            letters[i] = letters[i].toLowerCase()
            for(const key in NATO){
                if(letters[i] === key){
                    res.push(NATO[key])
                }
            }
            if(letters[i] === '!' || letters[i] === ',' || letters[i] === '.' || letters[i] === '?'){
                res.push(letters[i])
            }
    }

    console.log(res.join(' '))
    // console.log(letters)



}

to_nato('Hello there!')
to_nato('Did not see that coming')

