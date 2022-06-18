/* 
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.

*/




// PREP
// I will create a program that takes in two parameters. One array of the file sizes as integers and one number specifying the capacity of the hard drive


// P:
// Will the array length always be greater than 0?
// Will any of the inputs be invalid? (ie testing null / undefined values or unwanted string values?) 
// Will this be one end result as an integer?


// R: I will return the number of files that can be saved on the hard drive as an integer.



// E: Example
// Arg1 = [4, 4, 4, 3, 3], Arg2 = 12. Basically, I want to see how many integers from Arg1 can fit into Arg2. For each item that can fit into Arg2 , we will add 1 to a counter. We will return the counter at the end



function save(sizes, hd) {
// P:
// create count variable
// loop through array using reduce method? on each loop iteration, I will compare Arg2 to the current value being reduced.
// if adding the next item to the counter takes size above Arg2, I will return count - 1, else keep looping until the value is <= Arg2 but won't go over
// return the counter

let count = 0
let sum = 0
let numDump = 0


for(let i = 0; i < sizes.length; i++){
    if(sum < hd){
    sum += sizes[i]
    count ++
        if(sum > hd){
            sum -= sizes[i]
            count -= 2
        }
    }
}


}

save([4,4,4,3,3], 11)
