/* 
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

*/



//I will write a function that takes in an array of objects. I will find any objects that have a property with a value of null and then for that object, create a question property with a key in the format of `Hi, could you please provide your ${property name}?`


// Do I need to preserve the order of the original list?
// How long will the list be?
// Are there any gachas such as null entry, undefined arrays, 0 array length etc?
// Will every object have a property that has a value of null or just some?
// just return developers who have the null value on one of the properties
// could more than 1 property have a null value?



// return a new array of objects, where the only objects that show up are the ones that had a property with a value of null. I will add a question property to each of those objects and the value will be`Hi, could you please provide your ${missing property name}?`


/* 
[
{name: 'John', occupation: 'Developer', age: 23},
{name: null, occupation: 'Developer', age: 23},
{name: 'Tim', occupation: 'Developer', age: 23},
{name: 'Steve', occupation: 'Developer', age: null},
]

would return 
[
    {name: null, occupation: 'Developer', age: 23, question: `Hi, could you please provide your ${name}?`},
    {name: 'Steve', occupation: 'Developer', age: null, question: `Hi, could you please provide your ${age}?`},
]

*/

var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


function askForMissingDetails(list) {

    // list
    // create a result array
    // loop through list
    // loop through each object
    // if a keys value is null
    // Add a question property/value
    // push to result array
    // return the result array

    let result = [];

    for(let i = 0; i < list.length; i++){
        for(const key in list[i]){
            if(list[i][key] === null){
                list[i].question = `Hi, could you please provide your ${key}?`
                result.push(list[i])
            } 
        }
    }

    console.log(result)

  }

askForMissingDetails(list1)



/* 
expected [ 
    { firstName: null,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
    question: 'Hi, could you please provide your firstName' },
    { firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null,
    question: 'Hi, could you please provide your language' }
    ]
    to deeply equal

    [ 
    { firstName: null,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
    question: 'Hi, could you please provide your firstName.' },
    { firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null,
    question: 'Hi, could you please provide your language.' } ]
*/