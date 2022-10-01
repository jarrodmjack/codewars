

// a = beginning range
// b = end range
// output array of numbers that are a eureka number
// Eureka numbers are numbers that each digit to the power of i+1 (i incrementing with each digit)



/* 
a = 1
b = 100
[1,2,3,4,5,6,7,8,9,89]


a = 75
b = 140
[89,135] <--- eureka numbers within the range

*/


function sumDigPow(a, b) {

    let eurekaNums = [];

    for (let i = a; i <= b; i++) {
        let sum = 0;
        let expIncrement = 1;
        let modifiedNum = String(i).split('').map(Number)

        if(modifiedNum.length === 1){
            eurekaNums.push(i)
        }else{
            for(let j = 0; j < modifiedNum.length; j++){
                sum += modifiedNum[j] ** expIncrement
                expIncrement++
            }
        }
        if(sum === i){
            eurekaNums.push(sum)
        }
    }
    console.log(eurekaNums)

}


sumDigPow(1,100)


let num1 = 8
let num2 = 9

// console.log(8**1)
// console.log(9**2)

