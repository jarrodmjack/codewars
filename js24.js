/* 
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/




// PREP
// I will receive an object. I must sort through the object and sum the total amount of people per programming language that will be attending. I will then return an object with the name: count format.



//P: Given an array of objects. Objects will always be filled out. Order of the languages does not matter when returning object. count values will be nums. Input array will always be in a valid format (dont need to check for nulls/undefined)


//R: returning an object in this format {languageName: count} for each language all in one object


//E: if I am given some objects like this : I

/*
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
*/

// I will return an object with the following : {C: 2, JavaScript: 1, Ruby: 1}


// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
//   ];


var list1 = [
    {"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
    {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Python"},
    {"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}
]

function countLanguages(list) {
   //P:
    // loop through initial array of objects and target language names
    // push language names into another array
    // sum the occurences of each.
    // put into object 
    // return said object

    let langs = list.map(item => item.language)
    // console.log(langs)

    let totals = langs.reduce((obj, item) => {
        if(!obj[item]){
            obj[item] = 0
        }
        obj[item]++
        return obj
    }, {})
    console.log(totals)
  }

  countLanguages(list1)

