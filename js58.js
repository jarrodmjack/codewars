/* 
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/




// PREP
// I will create a function that takes in an array of integers and an integer n. The array of integers may contain duplicates, but the amount of duplicates that can be shown will be decided by n. 

// P:
// Assuming all numbers are greater than 0 (but it shouldnt matter since we are just doing comparison)
// Assuming array will be a valid length each time, and n will be a valid integer greater than 0
// Elements can show up a large amount of times so must account for bigger arrays
// Any other gotchas?


// R: I will return a new array with the modifications made, removing duplicates but leaving the amount <= n



// E:
/* for example:
If I am given an array of the following: [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5] and given n as 2, I would return the following array
[1, 1, 2, 2, 3, 4, 4, 5, 5]. As you can see, I have removed the 3rd occurence of 2, and the third occurence of 5, without switching the order of the items
*/




// function deleteNth(arr,n){

//     // use reduce method on arr and log / store each instance of an item into an object
//     // loop through the object to remove any items that show more than n
//     // push back into array some how maintaining the indices of the original array
//     // return the new array

//     let numObj = arr.reduce((acc, c) => {
//         if(!acc[c]){
//             acc[c] = 0
//         }
//         acc[c] ++
//         return acc
//     }, {})

//     console.log(numObj)


//     // let uniq = [...new Set(arr)]
    
    
    


// }

// deleteNth([1, 2, 5, 2, 3, 3, 3, 4, 2, 4, 5, 3, 5], 2)
// // This above should end up returning the following array ---> [1, 2, 2, 3, 3, 4, 4, 5, 5]





/*
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

function longestWord(stringOfWords){
   let arr = stringOfWords.split(' ')
   console.log(arr)
   let arrOfLengths = stringOfWords.split(' ').map(item => item.length)
   let biggest = Math.max(...arrOfLengths)
   console.log(biggest)

   let reversed = arr.reverse()
   let longestWord = reversed.find(item => item.length === biggest)
   console.log(longestWord)

//    for(let i = 0; i < arr.length; i++){
//     if(arr[i]){

//     }
//    }
  }

  longestWord('cat dog monkey zebra')