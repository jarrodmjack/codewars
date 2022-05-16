


/* 
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
Hint: Use \n in string to jump to next line
*/



// PREP
// Understanding the problem
// I need to return a string with all of the numbers in the pattern sequence. I will be given a number, I must complete the pattern up to and including that number. 

//P: Given a number. It will always be a number. If number is < 1, return an empty string. else, return the pattern specified. I will utilize the \n to start a new line for this pattern.
//R: Must return the pattern.
//E: Example:
// I have the function and am given a number 3, I will return the following:
/* 
1
22
333
*/


function pattern(n){
//P:  

    // create variable to hold string and return this at the end
    let str = ``
    // check IF number is less than 1, if so, return an empty string
    if(n < 1){
        return ``
    }else if(n === 1){
        return `1`
    }
    // perform a for loop where condition will be while incrementor is less than or equal to n
    for(let i = 1; i <= n; i++){
        // console.log()
        str += `${i}`.repeat(i)
        str += `\n`
        // str += `${i}\n`+`${i}`+`${i}`
    }
    // for loop will print each number by itself to create the sequence
    // concatenate the numbers into a string
    // create a new line with \n and start the new line in the sequence
    str = str.substring(0, str.length - 1)
    return str
   }

   pattern(11)