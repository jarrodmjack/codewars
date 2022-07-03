


// function wave(str) {
//     if (!str) {
//         return []
//     }
//     // if there is two words
//     let doubleCheck = str.trim().split(' ')
//     if (doubleCheck.length > 1) {
//         let mexicanWaveTwo = []
//         let firstWord = doubleCheck[0]
//         let secondWord = doubleCheck[1]

//         let firstArr = doubleCheck[0]
//         let secondArr = doubleCheck[1]
//         for (let i = 0; i < firstArr.length; i++) {
//             mexicanWaveTwo.push(`${firstWord.slice(0, i)}${firstArr[i].toUpperCase()}${firstWord.slice(i + 1)} ${secondWord}`)
//         }
//         for (let i = 0; i < secondArr.length; i++) {
//             mexicanWaveTwo.push(`${firstWord} ${secondWord.slice(0, i)}${secondArr[i].toUpperCase()}${secondWord.slice(i + 1)}`)
//         }
//         return mexicanWaveTwo
//     }
//     let arr = str.split(' ').join('').split('')

//     if (str.split(' ').length === 1 && str.trim() === str) {
//         let mexicanWave = [];

//         for (let i = 0; i < arr.length; i++) {
//             mexicanWave.push(`${str.slice(0, i)}${arr[i].toUpperCase()}${str.slice(i + 1)}`)
//         }
//         return mexicanWave
//     }
//     if (str.trim !== str) {
//         str = str.trim()
//         let mexicanWaveGap = [];
//         for (let i = 0; i < arr.length; i++) {

//             mexicanWaveGap.push(` ${str.slice(0, i)}${arr[i].toUpperCase()}${str.slice(i + 1)} `)
//         }
//         return mexicanWaveGap
//     } 


// }

// console.log(wave('hello'))




// function wave(str){
//     let newArr = []; //create an array
//     for (let i = 0; i < str.length; i++) { //loop through string
//       let copy = str.split(''); //creating a copy of the string and split into an array
//       if(copy[i] !== ' ') { //this checks for gaps around the outside of string
//       copy[i] = copy[i].toUpperCase() //make uppercase
//       newArr.push(copy.join('')) //push copy.join('')
//       }
//     }
//     return newArr
//   }


// function wave(str){
//     let arr = []
//     for(let i = 0; i < str.length; i++){
//         let copy = str.split('')
//         if(copy[i] !== ' '){
//             copy[i] = copy[i].toUpperCase()
//             arr.push(copy.join(''))
//         }
//     }
//     return arr
// }

    // function wave(str){
    //     let arr = [];
    //     for(let i = 0; i < str.length; i++){
    //         let copy = str.split('')
    //         if(copy[i] !== ' '){
    //             copy[i] = copy[i].toUpperCase()
    //             arr.push(copy.join(''))
    //         }
    //     }
    //     return arr
    // }

    function wave(str){
        let arr = [];
        for(let i = 0; i < str.length; i++){
            let copy = str.split('')
            if(copy[i] !== ' '){
                copy[i] = copy[i].toUpperCase()
                console.log(copy.join(''))
            }
        }
    }

  console.log(wave('hello'))





// let string1 = ' apple '
// let string2 = 'apple'

// string1.trim() === string2 ? console.log(true) : console.log(false)