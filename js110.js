/* 
You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/


// P:
// Assuming Languages will always be valid and capitalized
// Assuming there will always be at least one of each language?



// R: I will return a boolean value based on whether or not the coding meetup is language diverse or not. If a language appears more than 2 times the amount as another, it will return false, else return true



// E: Examples

/* 

Example 1:
[
{name:'John', lanugage:'JavaScript'},
{name:'John', lanugage:'JavaScript'},
{name:'John', lanugage:'Ruby'},
{name:'John', lanugage:'Python'},
{name:'John', lanugage:'Python'}
]
This would return true because the languages appear 2 or less times more often than the most unpopular language

Example 2:
]
{name:'John', lanugage:'JavaScript'},
{name:'John', lanugage:'Ruby'},
{name:'John', lanugage:'Python'},
{name:'John', lanugage:'Python'},
{name:'John', lanugage:'Python'}
]
This would return false because it is not diverse enough. Python appears more than twice the amount as the others
*/

var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'Python' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];


function isLanguageDiverse(list) {
    // P:
    // Take in array of objects as parameter
    // loop through array and keep track of amount of times each language shows up
    // compare languages - find min and max num
    // if max num is more than 2 times the amount of min num, return false else return true

    let js = 0;
    let python = 0;
    let ruby = 0;
    
    for(let i = 0; i < list.length; i++){
        if(list[i].language === 'JavaScript'){
            js++
        }else if(list[i].language === 'Ruby'){
            python++
        }else if(list[i].language === 'Python'){
            ruby++
        }
    }

    let min = Math.min(...[js, python, ruby])
    let max = Math.max(...[js, python, ruby])

    return max/min > 2 ? false : true 

}

console.log(isLanguageDiverse(list1))




