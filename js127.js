


// function isVow(a) {
//     //   make object of ascii values (hardcoded) 
//     //   loop through a
//     //   if object of ascii values includes current array item, change that item to it's corresponding letter
//     //   return new array

//     let ascii = {
//         97: 'a',
//         101: 'e',
//         105: 'i',
//         111: 'o',
//         117: 'u',
//     }




//     let result = a.map((item, i) => {
//         if(item in ascii){
//             return item = ascii[item]
//         }else{
//             return item
//         }
//     })

//     console.log(result)

    

// }

// isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])










function findMissing(arr1, arr2) {
    // let obj1 = arr1.reduce((acc,c) => {
    //   if(!acc[c]){
    //     acc[c] = 0
    //   }
    //   acc[c]++
    //   return acc
    // }, {})

    // let obj2 = arr2.reduce((acc,c) => {
    //     if(!acc[c]){
    //       acc[c] = 0
    //     }
    //     acc[c]++
    //     return acc
    //   }, {})

      if(arr1.length < arr2.length){
        sort1 = arr1.sort((a,b) => a - b)
        sort2 = arr2.sort((a,b) => a - b)
        for(let i = 0; i < sort2.length; i++){
            if(sort1[i] !== sort2[i]){
                return sort2[i]
            }
        }      
      }else{
        sort1 = arr1.sort((a,b) => a - b)
        sort2 = arr2.sort((a,b) => a - b)
        for(let i = 0; i < sort1.length; i++){
            if(sort2[i] !== sort1[i]){
                return sort1[i]
            }
        }
      }

  }

//   findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])
  findMissing([3, 6, 6, 1, 2], [6, 1, 3, 6, 8, 2])