// P
// can s be empty?
// if s is empty, is it technically a palindrome?
// what types of characters could the input have
// how long is the input
// does space or time matter for this question?

// R: Return a boolean value depending on whether or not the input is a palindrome


// E:
// 'racecar' ---> true
// 'tacocat' ---> true
// '' ---> true
// 'cheese' ---> false



const isPalindrome = function(s){

    s = s.toLowerCase().split('').filter(item => { 
      if(item >= 'a' && item <= 'z'){
        return item
      }else if(item >= '0' && item <= '9'){
        return item
      }
    })

    for(let i = 0; i < s.length/2; i++){
      let front = s[i]
      let back = s[s.length-1-i]
  
      if(front!== back){
        return false
      }
      
    }
  
    return true
    
  }

  // turned string to lower case and filtered out any items that were not valid (punctuation, etc)
//   looped through half of the array length, assigning a front and back pointer
// on each iteration I checked to see if they would be equal to eachother.
// if they aren't equal to eachother, that would mean its not a palindrome so the loop would break and return false
// otherwise the loop will complete and return true