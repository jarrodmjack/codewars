




/* 

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().



square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
*/



let numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function(){
    let squaredArr = this.map(item => item**2)
    return squaredArr
}

Array.prototype.cube = function(){
    let newArr = this.map(item => item**3)
    return newArr
}

Array.prototype.average = function(){
    if(!this){
        return NaN
    }
    let result = this.reduce((acc, c) => acc + c, 0)
    return result / this.length
}

Array.prototype.sum = function(){
    let sum = this.reduce((acc, c) => acc + c)
    return sum
}

Array.prototype.evens = function(){
    let newArr = this.filter(item => item % 2 === 0)
    return newArr
}

Array.prototype.odds = function(){
    let newArr = this.filter(item => item % 2 !== 0)
    return newArr
}

console.log(numbers.square())
console.log(numbers.cube())
console.log(numbers.average())
console.log(numbers.sum())
console.log(numbers.evens())
console.log(numbers.odds())

// console.log(numbers.prototype.square())