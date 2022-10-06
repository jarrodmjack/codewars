/* 
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/

// P:
// function takes in 2 strings
// string 1 must be able to somehow make up string 2 (check if each.includes ??)
// strings can contain characters that arent letters (apostrophes, periods, etc)
// string 1 may be the exact same as string 2 in order


// R:
// If first and second are equal, return -1
// if first does not pass the includes check, return -1 (I will use a boolean)
// return the number of times the first string must be shifted in order to match the second string


// E:
/* 
first = 'coffee'
second = 'ffeeco'

iteration 1:
'ecoffe'
check if same as second string

iteration 2:
'eecoff'
check if same as second string

iteration 3:
'feecof'
check if same as second string

iteration 4:
'ffeeco'
check if same as second string
It is the same, so we break loop and return iteration count
*/


function shiftedDiff(first, second) {

    // check if first is equal to second and return -1
    // check if all items in first are included in second, return 1- 
    //else
    // new string variable to track new string (move front letter to back)
    // count variable to store iterations
    // for loop
    // on each iteration, move front letter to back, check if === second    

    if (first === second) {
        return 0
    }
    //check if they have same letters
    const same = sameLetterCheck(first, second)

    if (!same) {
        return -1
    }

    let count = 0
    let arr1 = first.split('')
    let arr2 = second.split('')

    let end = ''
    let string = arr1.join('')

    while (string !== second) {
        end = arr1.pop()
        arr1.unshift(end)
        string = arr1.join('')
        count++
        if (string === second) {
            return count
        }
    }


}


function sameLetterCheck(first, second) {
    let same = true
    for (let i = 0; i < first.length; i++) {
        if (!second.includes(first[i])) {
            same = false
        }
    }
    return same
}

console.log(shiftedDiff("Esham", "Esham"))