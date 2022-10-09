/* 
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

// P:
// input will be a string
// assuming there will always be a Pied Piper (P)
// assuming there will always be rats
// rats may all be facing away or towards P
// assuming there will be less than 10 rats based on tests
// assuming P will always be capitalized


// R: return an integer indicating amount of deaf rats



// E:
/* 
"~O~O~O~O~O P" ---> 0

"~O~O P ~O O~O~~O" ---> 2
*/


var countDeafRats = function (town) {

    let [str1, str2] = town.replace(/[ ]/g, '').split('P')
    let deafRatCount = 0

    for(let i = 0; i < str1.length; i+=2){
        str1[i] === 'O' && deafRatCount++
    }
    for(let i = 0; i < str2.length; i+=2){
        str2[i] === '~' && deafRatCount++
    }
    return deafRatCount

}

// countDeafRats('O~~OO~~O~O~OO~~O P')
// countDeafRats('P O~ O~ ~O O~')
// countDeafRats('~O~O~O~O P')
// countDeafRats('~O~O~O~OP ~O    ~OO~')


