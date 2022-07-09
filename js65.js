

/* 

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


// PREP

// I will write a function that returns an object consisting of the values of a string as they key, and their occurences as the value for that key



// P: 
// Testing for empty string, in which case an empty object literal will be returned
// Assuming string will contain only letters, although if it did have string numbers, it should work also
// assuming string will be lower case O.o
// string can have multiple words so need to test for that
// will test for any other gotchas as they arise




// R: I will be returning an object, in which the keys will be the characters in the string and the values will be the amount of time that letter occurs in the given string 


// E:
// Example 1 - 'apple' 
// returns: {a:1, p:2, l:1, e:1}

// Example 2 - ''
// returns: {}

// Example 3 - 'i love carrots'
// returns: {i:1, l:1, o:2, v:1, e:1, c:1, a:1, r:2, t:1, s:1}







// function count (string) {  


//     // test IF string is empty, if true, return an empty object literal, otherwise do the following:

//     // create variable to store -->  split string into separate words, then join together, then split again into array of letters
//     // put occurences into an object using the .reduce method on the array
//     // return object of occurences

//     if(!string || string.length === 0){
//         return {}
//     }


//     let letters = string.split(' ').join('').split('')

//     let occurences = letters.reduce((acc, c) => {
//         if(!acc[c]){
//             acc[c] = 0
//         }
//         acc[c]++
//         return acc
//     }, {})

//     console.log(occurences)


//      return {};
//   }

//   count('apple')







function sayHello(number) { //creating a function

    if(number % 2 === 0){ //if condition is true (if number is even)
        // do this
        return 'Even'
        
    }else{ //if its odd
        // do this
       return 'Odd'
    }


}


sayHello(10) //argument is the value put into the function call