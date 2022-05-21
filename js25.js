





/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/


//PREP
// I must loop through an array and look for the first case of 'O', which would mean the meeting room is empty. If there
// is no meeting room, I will return a string value of 'None available!'

//P: Passed in an array. Array will always have a length. Array values could be anything

//R: Return first index of 'O'. If no 'O', return 'None available!'


//E:
// [x, x, x, o] ---> index of 3 || [x, x, x, x] ---> 'None available!'






function meeting(x){
// P:
// Loop through array.
// check for index of item
// if returned and not -1, return the index
// Else return string

let index = x.indexOf('O')

return index >= 0 ? index : 'None available!'


}


console.log(meeting(['X', 'X', 'X', 'X', 'X']))