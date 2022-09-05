
/* 
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
*/
// PREP
// I will write a function that takes in a list of objects. I must determine if at least one person from each continent will be attending


// P:
// Will the input always be a list of objects?
// How long will the list be?
// Will input ever be null?
// Continents will always be uppercase


// R: If there is at least one person from each continent, I will return true, else return false



// E: Examples
/* 
    {name: 'Craig', continent: 'Americas'},
    {name: 'Jeff', continent: 'Africa'},
    {name: 'Clark', continent: 'Europe'},
    {name: 'Tim', continent: 'Oceania'},
    {name: 'Bob', continent: 'Asia'},


    this would return true since there is a developer from each continent


      {name: 'Craig', continent: 'Americas'},
    {name: 'Jeff', continent: 'Americas'},
    {name: 'Clark', continent: 'Europe'},
    {name: 'Tim', continent: 'Oceania'},
    {name: 'Bob', continent: 'Asia'},


    this would return false since there is no developer from Africa


*/




var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

var list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

var list3 = [{
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript'
},
{
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Clojure'
},
{
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure'
}]

const list4 = [{
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'Ruby'
},
{
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby'
}]


const list5 = [{
    firstName: 'Sofia',
    lastName: 'P.',
    country: 'Italy',
    continent: 'Europe',
    age: 41,
    language: 'Clojure'
},
{
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript'
},
{
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Python'
},
{
    firstName: 'Rimas',
    lastName: 'C.',
    country: 'Jordan',
    continent: 'Asia',
    age: 44,
    language: 'Java'
}]

const list6 = [{
    firstName: 'Alexander',
    lastName: 'F.',
    country: 'Russia',
    continent: 'Europe',
    age: 89,
    language: 'Java'
},
{
    firstName: 'Fatima',
    lastName: 'K.',
    country: 'Saudi Arabia',
    continent: 'Asia',
    age: 21,
    language: 'Clojure'
},
{
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript'
},
{
    firstName: 'Nikola',
    lastName: 'H.',
    country: 'Serbia',
    continent: 'Europe',
    age: 29,
    language: 'Python'
},
{
    firstName: 'Jakub',
    lastName: 'I.',
    country: 'Slovakia',
    continent: 'Asia',
    age: 28,
    language: 'Java'
},
{
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Americas',
    age: 89,
    language: 'JavaScript'
},
{
    firstName: 'Luka',
    lastName: 'J.',
    country: 'Slovenia',
    continent: 'Oceania',
    age: 29,
    language: 'Clojure'
},
{
    firstName: 'Mariam',
    lastName: 'B.',
    country: 'Egypt',
    continent: 'Africa',
    age: 89,
    language: 'Python'
}]

const list7 = [{
    firstName: 'Margret',
    lastName: 'M.',
    country: 'Iceland',
    continent: 'Europe',
    age: 28,
    language: 'Java'
},
{
    firstName: 'Noel',
    lastName: 'O.',
    country: 'Albania',
    continent: 'Europe',
    age: 23,
    language: 'Python'
},
{
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 21,
    language: 'Clojure'
},
{
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 19,
    language: 'C'
},
{
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript'
},
{
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 30,
    language: 'C'
},
{
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 38,
    language: 'Ruby'
},
{
    firstName: 'Sofia',
    lastName: 'W.',
    country: 'Moldova',
    continent: 'Europe',
    age: 29,
    language: 'Ruby'
},
{
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'PHP'
},
{
    firstName: 'Sofia',
    lastName: 'A.',
    country: 'Denmark',
    continent: 'Europe',
    age: 19,
    language: 'Python'
},
{
    firstName: 'Viktoria',
    lastName: 'W.',
    country: 'Bulgaria',
    continent: 'Europe',
    age: 28,
    language: 'PHP'
},
{
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 89,
    language: 'Clojure'
},
{
    firstName: 'Precious',
    lastName: 'G.',
    country: 'South Africa',
    continent: 'Africa',
    age: 22,
    language: 'JavaScript'
},
{
    firstName: 'Seoyeon',
    lastName: 'J.',
    country: 'South Korea',
    continent: 'Asia',
    age: 29,
    language: 'Ruby'
},
{
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby'
},
{
    firstName: 'Alexander',
    lastName: 'F.',
    country: 'Russia',
    continent: 'Europe',
    age: 89,
    language: 'Java'
},
{
    firstName: 'Jakub',
    lastName: 'I.',
    country: 'Slovakia',
    continent: 'Europe',
    age: 28,
    language: 'Java'
},
{
    firstName: 'Mohamed',
    lastName: 'F.',
    country: 'Morocco',
    continent: 'Africa',
    age: 40,
    language: 'Ruby'
},
{
    firstName: 'Gabriel',
    lastName: 'T.',
    country: 'Luxembourg',
    continent: 'Europe',
    age: 28,
    language: 'Java'
},
{
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript'
},
{
    firstName: 'Krishna',
    lastName: 'G.',
    country: 'Nepal',
    continent: 'Asia',
    age: 22,
    language: 'Java'
},
{
    firstName: 'Emily',
    lastName: 'A.',
    country: 'Northern Ireland',
    continent: 'Europe',
    age: 32,
    language: 'JavaScript'
},
{
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C'
},
{
    firstName: 'Mohammad',
    lastName: 'N.',
    country: 'United Arab Emirates',
    continent: 'Asia',
    age: 39,
    language: 'C'
},
{
    firstName: 'Noa',
    lastName: 'A.',
    country: 'Israel',
    continent: 'Asia',
    age: 40,
    language: 'Ruby'
},
{
    firstName: 'Marian',
    lastName: 'N.',
    country: 'Colombia',
    continent: 'Americas',
    age: 55,
    language: 'Python'
},
{
    firstName: 'Maria',
    lastName: 'I.',
    country: 'Greece',
    continent: 'Europe',
    age: 32,
    language: 'C'
},
{
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript'
},
{
    firstName: 'Artem',
    lastName: 'O.',
    country: 'Ukraine',
    continent: 'Europe',
    age: 29,
    language: 'Java'
},
{
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 21,
    language: 'C'
}]


function allContinents(list) {

    americas = false,
        africa = false,
        asia = false,
        europe = false,
        oceania = false




    // Create variable for each continent to hold a boolean value
    // Loop through list
    // for now, hard code to check ...
    // if americas exists && africa exists && oceania exists && europe exists && asia exists
    // run every loop, if every item is true, return true, else false

    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Africa') {
            africa = true
        } else if (list[i].continent === 'Americas') {
            americas = true
        } else if (list[i].continent === 'Asia') {
            asia = true
        } else if (list[i].continent === 'Europe') {
            europe = true
        } else if (list[i].continent === 'Oceania') {
            oceania = true
        }
        // console.log(list[i].continent)
    }

    let zones = [
        americas,
        africa,
        asia,
        europe,
        oceania
    ]

    if (zones.length >= 5) {
        return zones.every(item => item)
    }

    return false




}

console.log(allContinents(list1))
console.log(allContinents(list2))
console.log(allContinents(list3))
console.log(allContinents(list4))
console.log(allContinents(list5))
console.log(allContinents(list6))
console.log(allContinents(list7))