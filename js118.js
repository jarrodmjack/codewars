/* 
The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

Could you help him?

Task
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

Should the last donation be a non positive number (<= 0) John wants us:

to return:

Nothing in Haskell, Elm
None in F#, Ocaml, Rust, Scala
-1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
or to throw an error (some examples for such a case):

IllegalArgumentException() in Clojure, Java
ArgumentException() in C#
echo ERROR in Shell
argument-error in Racket
std::invalid_argument in C++
ValueError in Python
So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

Notes:
all donations and navg are numbers (integers or floats), arr can be empty.
See examples below and "Sample Tests" to see which return is to be done.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
or return `-1` or ERROR or Nothing or None depending on the language.
*/


// PREP

// P:
// list of first n donations (as array)
// newavg is the average we want to achieve after adding an item to the array
// last donation may be 0 or negative
// array can be empty
// all numbers in the array (donations) can be integers or floats

//R: I will return the donation (as an integer) needed to get the average of the array to equal newavg argument. If donation needed is less than or equal to 0, I must return an error


// E: Examples
/* 
Example 1:
donations = [1,2,3,4,5] (avg 3)
newavg = 5
I would return 15 because a donation of 15 is needed to make the new average 5

Example 2:
donations = [10,32,62,83,52,18] (avg 43)
newavg = 50
I would return 93 because a donation of 93 is needed to make the new average 50

*/




function newAvg(arr, newavg) {
  
    let sumOfArray = arr.reduce((acc,c) => acc + c, 0)
    let donation = (newavg * (arr.length + 1)) - sumOfArray
    console.log(donation)

}

newAvg([ 14, 30,  5, 7, 9, 11, 16], 90)
