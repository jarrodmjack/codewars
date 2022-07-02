/* 
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input 
*/



// PREP
// I will write a function that takes in an array of integers which will act as a queue, where each value represents the time it takes for that customer to check out and function takes in an integer which indicates how many tills there are. I want to calculate the total time it will take for the customers to cash out, and return that value




// P:
// Array of integers with each value meaning the time it will take that customer to cash out
// an integer indicating the amount of tills available to that queue
// All inputs will be valid arrays / till counts
// All integers will be greater than 0
// if it is 1 till, I can just reduce the array
// Front person in the queue proceeds to a till as soon as it becomes free




// R: I will return a single integer indicating the total amount of time it took for the line to cash out





// E: 
/* For example:
if I was given arguments of ([5, 2, 3, 4], 1) ---> since the till count is only one, I just reduce the array into a sum and return that. So in this case I would return 14 (5 + 2 + 3 + 4)

if I was given arguments of ([15, 2, 5, 7], 2) ---> this would return 15 since the 15 is at the start and 2 + 5 + 7 = 14 so they were all able to cash out before 15


if I was given arguments of ([2,3,10], 2) ---> this would return 12 because there are 2 tills. 2 begins, 3 moves to the open til and then 10 stacks up with 2. 10 + 2 = 12.


*/




// function queueTime(customers, n) {
// // P:
// // if till count === 1, I can just reduce the array into a sum and return that.
// // if till count is greater than customers array length, I will find the max value from the array and return
// // I will need to loop through the array
// // create array with a length == n
// // on each loop, I want to subtract 1 from each item in the array. if a spot frees up, aka length is less than n, I want to push the next number from the original array into the till array
// // I also will implement a count variable to count how many times it must loop before completing

// let tillArr = []
// // tillArr.length = n
// let count = 0;
// console.log(tillArr)

// let curr = 0;
// while(customers.length > 0){
//     // push an item from the customers array while length is less than 10
//     // add 1 to the count for each iteration
//     // remove 1 from each value inside of the array at that time
//     curr = customers.shift()
//     tillArr.push(curr)

//     count ++
//     console.log(tillArr)
// }
// console.log(count)
// }


// queueTime([10, 2, 3, 3], 2)












let staff = {
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
}




function boredom(staff) {
   
    let arr = [];
    let sum = 0;

    for(const key in staff){
        if(staff[key] === 'accounts'){
            sum += 1    
        }else if(staff[key] === 'finance'){
            sum += 2
        }else if(staff[key] === 'canteen'){
            sum += 10
        }else if(staff[key] === 'regulation'){
            sum += 3
        }else if(staff[key] === 'trading'){
            sum += 6
        }else if(staff[key] === 'change'){
            sum += 6
        }else if(staff[key] === 'IS'){
            sum += 8
        }else if(staff[key] === 'retail'){
            sum += 5
        }else if(staff[key] === 'cleaning'){
            sum += 4
        }else if(staff[key] === 'pissing about'){
            sum += 25
        }
    }


    if(sum <= 80){
        return 'kill me now'
      }else if(sum < 100 && sum > 80){
        return 'i can handle this'
      }else if(sum >= 100){
        return 'party time!!'
      }

}


boredom(staff)