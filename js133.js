
// // The "every" method checks if every item within an array meets a specific condition.


// let words = ['taco', 'cat', 'apple', 'jarrod']

// let hasLetterA = words.every(word => word.includes('a'))
// // console.log(hasLetterA)
// let hasLetterB = words.every(word => word.includes('b'))
// console.log(hasLetterB)















// The reduce method is used to reduce (or sum) an array into a single value.


//  5 + 5 + 5 + 5 = 20
let numbers = [5,5,5,5] 

let sum = numbers.reduce((acc,c) => acc + c, 0)
console.log(sum)

/* 
c = 5

first loop
acc = 0
acc += c

second loop
acc = 5
acc += c

third loop
acc = 10
acc += c

fourth loop
acc = 15
acc += c

finish
sum = 20
*/