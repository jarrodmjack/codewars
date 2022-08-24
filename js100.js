/* 
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

See Examples Test Cases for more examples.
*/


// PREP
// I will write a function that takes in 3 params. An array of names, an array of random weights (index corresponds to index of names from first array) and a rank. I will calculate a persons score by adding the length of their name to the weight of their name according to each letters position in the alphabet. I will then search for the first person at the "rank" parameter.


// P:
// Array of names could be empty so must test for empty value
// If array of names is populated, array of weights will be at LEAST the same length as array of names but could be longer
// n could be greater than number of particpants must test for this
// two people could have same "winning number"


// R: returns
/* 
  If array of names is empty, return "No participants"
  If n is greater than the number of participants, return "Not enough participants"
  else
  return the name of the person that meets the criteria
*/

/* 
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
*/


// function rank(st, we, n) {
//   //p:
//   // if participant array length is 0, return "No participants"
//   // if n > participant array length, return "Not enough participants"
//   // loop through array of names
//   // create a sum variable and add the length of the name, + the weight of each letter in the name according to the alphabet
//   // push each weight to a new array. must keep track of index of weight according to index of name in participants array
//   // find the person at rank n in the weights array and find that participant
//   // return participant

  


//   let alphabet = ".abcdefghijklmnopqrstuvwxyz"
//   let upperAlphabet = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//   let parts = st.split(',')


//   if (parts.length === 0) {
//     return 'No participants'
//   } else if (n > parts.length) {
//     return 'Not enough participants'
//   }

//   let partsIdxs = {}
//   let partsObj = {}

//   for (let i = 0; i < parts.length; i++) {
//     partsIdxs[parts[i]] = i
//     partsObj[parts[i]] = parts[i].split('').map((ltr, i) => {
//       let sum = 0;
//       if (upperAlphabet.includes(ltr)) {
//         sum += upperAlphabet.indexOf(ltr)
//       } else if (alphabet.includes(ltr)) {
//         sum += alphabet.indexOf(ltr)
//       }
//       sum += 1
//       return sum
//     }).reduce((acc, c) => acc + c)
//   }

//   console.log(partsObj)

//   let weights = [];
//   for(const key in partsObj){
//     weights.push(partsObj[key] * key.length)
//   }

//   console.log(weights)
//   weights.sort((a, b) => b - a)

//   // console.log(weights)

//   let win = weights[n - 1]

//   // console.log(win)

//   let res = [];
//   for(const key in partsObj){
//     if(partsObj[key] === win){
//       res.push(key)
//     }
//   }

//   // console.log(res)

//   if(res.length > 1){
//     res.sort()
//     return res[0]
//   }else{
//    return res[0]
//   }

//   // console.log(res)
  

//   // console.log(res)
//   // return res[0]

//   // if(res.length === 1){
//   //   return res[0]
//   // }else if(res.length > 1){
    
//   // }



//   // let parts = st.split(',')
//   // const length = parts.length
//   // let soms = []

//   // for(let i = 0; i < parts.length; i++){
//   //   let sum = 0;
//   //   for(let j = 0; j < parts[i].length; j++){
//   //     if(upperAlphabet.includes(parts[i][j])){
//   //       sum += upperAlphabet.indexOf(parts[i][j])
//   //     }else if(alphabet.includes(parts[i][j])){
//   //       sum += alphabet.indexOf(parts[i][j])
//   //     }
//   //   }
//   //   // sum += parts[i].length
//   //   soms.push(sum)
//   // }

//   // let weights = we.slice(0, length).map((num, i) => num *= soms[i]).sort((a, b) => b - a)

//   // const comp = weights[n - 1]

//   // console.log(soms)
//   // // console.log(comp)

//   // // colin, joseph, paul, amandba, amandab, carol

//   // let first = weights.indexOf(comp)
//   // let last = weights.indexOf(comp)

//   // // if only one occurence of the number we've targeted
//   // if(first === last){

//   // }


// }

function rank(st, we, n) {
  //p:
  // if participant array length is 0, return "No participants"
  // if n > participant array length, return "Not enough participants"
  // loop through array of names
  // create a sum variable and add the length of the name, + the weight of each letter in the name according to the alphabet
  // push each weight to a new array. must keep track of index of weight according to index of name in participants array
  // find the person at rank n in the weights array and find that participant
  // return participant

  // console.log(st, we, n)

  let alphabet = ".abcdefghijklmnopqrstuvwxyz"
  let upperAlphabet = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  let parts = st.split(',')

  if (!st || st.length === 0) {
    return 'No participants'
  } else if (n > parts.length) {
    return 'Not enough participants'
  }

  let partsIdxs = {}
  let partsObj = {}

  for (let i = 0; i < parts.length; i++) {
    partsIdxs[parts[i]] = i
    partsObj[parts[i]] = parts[i].split('').map((ltr, i) => {
      let sum = 0;
      if (upperAlphabet.includes(ltr)) {
        sum += upperAlphabet.indexOf(ltr)
      } else if (alphabet.includes(ltr)) {
        sum += alphabet.indexOf(ltr)
      }
      sum += 1
      return sum
    }).reduce((acc, c) => acc + c) * we[i]
  }


  let weights = [];
  for(const key in partsObj){
    weights.push(partsObj[key])
  }
  weights.sort((a, b) => b - a)


  let win = weights[n - 1]
  let res = [];

  for(const key in partsObj){
    if(partsObj[key] === win){
      res.push(key)
    }
  }
  res.sort()
  return res[n - weights.indexOf(win) - 1] 


}

console.log(rank("Elijah,Ethan,Emma,Olivai,Sophia,Sofia,Emily,Avery,Abigail,Aiden,Natalie,Madison,Aubrey,Ella,Benjamin,Mason,Jayden,Jacob,Matthew", [
  3, 1, 5, 4, 4, 5, 1,
  6, 2, 5, 2, 6, 6, 3,
  6, 5, 2, 4, 1
], 4))
// console.log(rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [ 1, 3, 5, 5, 3, 6 ], 2))
// console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4))
// console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4))
// console.log(rank("Ella,Sophia,Mia,Isabella,William,Abigail,Ethan,Robert,Noah,Elizabeth,Natalie,Naoh,Willaim,Avery,Daniel,Ava,James,Olivia,Chloe,Michael,Aubrey,Lily,Mason,Joshua,Emily,David,Emma", [
//   5, 1, 4, 1, 3, 2, 1, 1,
//   6, 6, 1, 1, 3, 6, 1, 6,
//   6, 5, 1, 2, 1, 1, 1, 5,
//   5, 6, 4
// ], 8))

// let alphabet = ".abcdefghijklmnopqrstuvwxyz"
// let upperAlphabet = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// let colin = "COLIN"
// let amandba = "AMANDBA"
// let amandab = "AMANDAB"
// let carol = "CAROL"
// let paul = "PAUL"

// let sum = 0;
// for(let i = 0; i < paul.length; i++){
//   sum += upperAlphabet.indexOf(paul[i])
// }

// sum+=paul.length
// console.log(sum)



// let names = ["PauL", "JOSEPH"]

// console.log(names.sort((a,b) => a - b))