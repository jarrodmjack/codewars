









/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/












function divCon(arr){


    let arr1 = arr.filter(item => typeof item === 'string').map(Number)
    let arr2 = arr.filter(item => typeof item === 'number')
    // console.log(arr2)
    return arr2.reduce((acc, c) => acc + c) - arr1.reduce((acc, c) => acc + +c)
    // console.log(arr1.reduce((acc, c) => Number(acc + c)))
  }

  divCon([9, 3, '7', '3'])