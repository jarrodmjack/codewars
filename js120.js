
// message = 'test'
// alphabet map
// 'abcdefghijklmnopqrstuvwxyz'
// conditional for letter casing

//  u v w x y z a b c d e f g 


// z  a b c d e f g h i  j k  l  m
// 26 1 2 3 4 5 6 7 8 9 10 11 12 13
// counter cant go over 26

// get index of current letter

//   alphabetLength = 26
//   only manipulate item if it is included in alphabet -done
//   t is index 20 + 13 = 33
//   if current letter index + 13 > 26
//   currentletter index - alphabetLength
//    else get letter in alphabet at current index
//   grab 7th letter of alphabet

function rot13(message) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetLength = 26;
    let str = ''
  
    for (let i = 0; i < message.length; i++) {
      if (!/^[a-zA-Z]+$/.test(message[i])) {
        str += message[i]
        continue
      } else {
        let curIdx = alphabet.indexOf(message[i].toLowerCase())
        let ltrInAlpha = alphabet.charAt(curIdx)
        let isCapitalized = message[i] === ltrInAlpha
        let newIdx = curIdx + 13
        
        if (newIdx >= alphabetLength) {
          newIdx = newIdx - alphabetLength
        }
        let result = alphabet.charAt(newIdx)
        if (!isCapitalized) {
          str += result.toUpperCase()
        }else{
          str += result
        } 
      }
    }
    return str
  }
    rot13('Te!st')
  // ["Te!st", "Gr!fg"]