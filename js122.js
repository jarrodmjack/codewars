/* 
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element

The second element 12 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2


*/
// PREP


/*
P: 
product array must be same size as initial array
cannot multiply number by itself, only by other numbers in array
array/list size is at least 2
repetition of nums could occur
numbers will be positive only
*/

/* 
R:
I will return a product array that will be the same size as the initial array, but contain all of the elements in the initial array multiplied by all other elements in the array except for itself
*/

/*
E:
[2,3,5] ---> [15, 10, 6]

[3,27,4,2] ---> [216, 24, 162, 324]

*/






function productArray(numbers) {
    /* 
    create result product array
    for loop to loop through numbers array once
    create a product variable
        nested foor loop to loop through all numbers again.
        if inner index is the same as outer loop index, continue
        else multiply elements into to product variable 
        // close inner loop
    push product variable to result array
    // close outer loop
    return resulting array
    */

    let productArr = []

    for(let i = 0; i < numbers.length; i++){
        let product = 1;
        for(let j = 0; j < numbers.length; j++){
            if(j === i){
                continue
            }else{
               product *= numbers[j]
                console.log(product)
            }
        }
        productArr.push(product)
    }

    console.log(productArr)
}

productArray([3,27,4,2])

// [3,27,4,2] ---> [216, 24, 162, 324]