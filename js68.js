



// function diamond(n) {

//     //     let initialDiamond = ''
//     //     let astCount = 1;
//     //     let spaceCount = n;
//     //     let loopCount = Math.ceil(n / 2);
//     //     let remLoop = n - loopCount

//     //    for(let i = 1; i <= loopCount; i++){
//     //     initialDiamond += ' '.repeat(spaceCount) + '*'.repeat(astCount) + ' '.repeat(spaceCount) + '\n' ;
//     //     spaceCount -= 1
//     //     astCount+=2
//     //    }


//     //    initialDiamond += ' '
//     // astCount -= 2;
//     // // let endSpace = spaceCount;

//     //    for(let i = 0; i < remLoop; i++){

//     //     astCount -= 2 ;
//     //     spaceCount+=1;
//     //     // endSpace += 4;
//     //     initialDiamond  += ' '.repeat(spaceCount) + '*'.repeat(astCount) + ' '.repeat(spaceCount) + `\n`
//     //     spaceCount += 1;
//     //    }


//     // console.log(initialDiamond)






// }


// diamond(11)



// function diamond(n) {

//     let plusTwo = 0;
//     let str = '*';


//     for (let i = 0; i < n; i++) {

//         console.log(str.repeat(plusTwo))


//         // str = str + '**'

//         // console.log(str)

//         // console.log('*'.repeat(plusTwo))
//         plusTwo += 1

//         // console.log(str)
//     }


// }


// diamond(11)



// function diamond (n) {
//     if (n <= 0 || n % 2 === 0) return null
//     str = ''
//     for (let i = 0; i < n; i++) { 
//       let len = Math.abs((n-2*i-1)/2)
//       str += ' '.repeat(len)
//       str += '*'.repeat(n-2*len)
//       str += '\n'
//     }
//     return str
//   }


//   

//   function diamond(n){
//     str = ''
//     for(let i = 0; i < n; i++){
//         let len = Math.abs((n-2*i-1)/2)
//         str += ' '.repeat(len)
//         str += '*'.repeat(n-2*len)
//         str += '\n'
//     }
//     return str
//   }


// console.log(diamond(5))
















function validBraces(braces) {
    //   if item at current index and item at +1 index are equal OR if item at current index and item return true, else false

    const parensLeft = '(' ,parensRight = ')' ,squareLeft = '[' ,squareRight = ']' ,squiglyLeft = '{' ,squiglyRight = '}'

    let squiglyCheck = false ,parensCheck = false ,squareCheck = false, overallCheck = false;

    let count = 0;

    for(let i = 0; i < braces.length; i++){
        if (braces[i] === parensLeft && braces[i + 1] === parensRight || braces[i] === squareLeft && braces[i + 1] === squareRight || braces[i] === squiglyLeft && braces[i + 1] === squiglyRight) {
            count += 2
        }
        
    }
  
    if(count === braces.length){
        return true
    }


    if(!overallCheck){

        for (let i = 0; i < braces.length; i++) {

            if (braces[i] === parensLeft && braces[braces.length - (i + 1)] === parensRight) {
                parensCheck = true;
            }
    
            if (braces[i] === squareLeft && braces[braces.length - (i + 1)] === squareRight) {
                squareCheck = true;
            }
    
            if (braces[i] === squiglyLeft && braces[braces.length - (i + 1)] === squiglyRight) {
                squiglyCheck = true;
            }
    
        }
    
        console.log(parensCheck)
        console.log(squareCheck)
        console.log(squiglyCheck)
    
        if (parensCheck && squareCheck && squiglyCheck) {
            return true
        }else{
            return false
        }
    }




   


 

}

console.log(validBraces('()))'))