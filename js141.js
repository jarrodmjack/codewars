
/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/


// two params, pattern = string of letters, s = string of words, string will be non empty, pattern length and amount of words in s may differ, assume at least one word in s


// return a boolean based on whether or not pattern matches


/* 
Example 1: 
pattern = "adda"
s = "taco burrito burrito taco"
return true

Example 2:
pattern = "abbc"
s = "naan butterChicken butterChicken coconutCurry"
return true

Example 3:
pattern = "ttyy"
s = "dog cat dog cat"
return false

*/



var wordPattern = function(pattern, s) {
    // create hashmap
    // split s into array
    // first time seeing letter in pattern, assign a value of matching index word in s
    // if I come across letter in pattern a second time, check if the corresponding index in s is same as hashmap value
    // if above is false, return false
    // return true
  
    s = s.split(' ')
    if(s.length !== pattern.length){
      return false
    }
    
    let hashmap1 = {}
    let hashmap2 = {}
    //   a            b                b                    c
    // naan      butterChicken    butterChicken            naan
    for (let i = 0; i < pattern.length; i++) {
      if (!hashmap1[pattern[i]] && !hashmap2[s[i]]) {
        hashmap1[pattern[i]] = s[i]
        hashmap2[s[i]] = pattern[i]
      } else {
        if (hashmap1[pattern[i]] !== s[i]) {
          return false
        }
      }
    }
    return true
  };
  
  
  console.log(wordPattern("adda", "taco burrito burrito taco"), true)
  console.log(wordPattern("abbc", "naan butterChicken butterChicken naan"), false)
  console.log(wordPattern("ttyy", "dog cat dog cat"), false)
  
  
  