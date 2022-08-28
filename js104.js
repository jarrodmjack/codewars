/* 
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above and will never be empty.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/



// PREP
// I will write a function that takes in an array of objects. I must find the developer that is the oldest. If there are more than 1 of the same oldest age, I will return them in order of which they appear.


// P:
// Function takes in array of objects
// Object will always have an age property
// find oldest age
// The input array will always be valid and formatted as in the example above and will never be empty
// If only one developer meets the criteria, do I need to put them into an array or just return the object?


// R: If there is only one developer at the highest age, I will return that object. If there are more than 1 I will return an array of objects of all the developers that meet the criteria but put in the order I see them.




// E: Example:
/* 
lets say I am given this array
var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 42, language: 'PHP' },
]

I will return { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' }
because Gabriel is the oldest and he is the only one at that age.


For cases where multiple people have the same age:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 32, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age:42, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 42, language: 'PHP' },
]

I will return an array as follows.
[
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age:42, language: 'Python' },
     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 42, language: 'PHP' },
]

I returned this because Odval and Sou both have the highest age of 42, and Odval appears in the original array before Sou so he is first in the return array


*/





function findSenior(list) {
    // create ages array
    // create result array to be returned
    // loop through list of developers and push their ages to the ages array
    // find highest age in ages array
    // loop through developers again and push any developer who meets the age criteria into an array
    // return array

    let ages = [];
    let result = [];

    for(const item in list){
        // console.log(list[item])
        ages.push(list[item].age)
    }

    let oldest = Math.max(...ages)

    for(const item in list){
        if(list[item].age === oldest){
            result.push(list[item])
        }
    }

    console.log(result)

  }

  var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

  findSenior(list1)


  