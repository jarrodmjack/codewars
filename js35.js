/* 
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
The questions array is already defined for you and is not the same as the one in the example.
*/




// PREP
// I must add a property to every object in a given array. The value must be set to null. It must work for any length of array

// P: 
// lets assume:
// All inputs will be valid objects
// Each object needs this property to be added
// Value will be set to null


// R: return array of objects with new property added to it..


// E: Example 
/*
const arr = [{question: 'ask question here'}, {question: 'ask question here'}]
would now equal --->
[{question: 'ask question here', usersAnswer: null}, {question: 'ask question here', usersAnswer: null}]
*/ 


var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// function applyProperty(arr){
// // P: 
// // loop through array
// // apply new property usersAnswer: null to each object
// // return new array with modifications made

// arr.forEach((item, i) => item.usersAnswer = null)
// console.log(arr)
// }

// Array.prototype.addProperty = function (arr){
//    return this.forEach((item, i) => item.usersAnswer = null)
// }

// addProperty(questions)
questions.addProperty()



Array.prototype.addProperty = function (){
    this.forEach((item, i) => item.usersAnswer = null)
 }