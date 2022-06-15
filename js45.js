

/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

*/



// PREP
// I will write a function gets sum of integers from all even indices, then I will multiply that number by the last number of the array and return the total value


// P:
// testing for invalid input? No
// testing 0s in array? 
// if last number is 0, am I to return 0?


// R: I will return the end result of adding all numbers of even indices and then multiplying that number by the last item in the array


// E: [5,10,20,35,10] ----> 5 + 20 = 25. 25 * 10(last num in array) = 250




function evenLast(numbers) {
    // P:
    // create sum variable
    // for loop
    // check if index is even
    // if even, add to sum
    // multiply  sum by last item in the array
    // return that number

    if(numbers.length === 0){
        return 0
    }

    for(let i = 0; i < numbers.length; i++){
        if(i % 2 === 0){
            sum += numbers[i]
        }
    }



    return sum * numbers[numbers.length - 1]


  }


  evenLast([2, 3, 4, 5, 5]) //should be 55