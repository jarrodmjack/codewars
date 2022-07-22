/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/



// PREP
// I will write a function that takes in a string and splits it into pairs. if pair is not completed (aka it was an odd string length) I will append an underscore(_) on the end of that non completed pair



// P:
// assuming string can be any length
// string can be even or odd length
// I am not using regex




// R: I will return an array of paired strings. If the last pair is not completed, I will append an underscore to that string.





// E: Examples:
/* 
'abcdef' ---> ['ab', 'cd', 'ef']
'abcde' ---> ['ab', 'cd', 'e_']
*/

function solution(str){
    if(str.length === 0 || !str){
      return []
    }
  
    let arr = str.match(/(..?)/g)
    // console.log(arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < 2){
            arr[i] = `${arr[i]}_`
        }
    }

    return arr

}

solution('abcde')




