/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/


// PREP
// I will write a function that converts a string from dash format to camelcase format, or underscore to Pascal case depending on if the first word already has a capital letter or not



// P: 
// Assuming all inputs will be valid strings in the dash format of 'this-is-a-string' or  with capital on first word 'This-is-a-string'
// Assuming strings will not contain any string numbers.
// String can be any length greater than 1.
// String will only have 1 dash or underscore between words


// R: I will return the string formatted 1 of 2 ways. Either camelCase format or PascalCase format depending on if the first word in the string is capitalized



//E: Examples
/* 
Example 1: "my-name-is-jarrod" ---> myNameIsJarrod (camelCase)
Example 2: "Hello-my_name-is-jarrod" ---> HelloMyNameIsJarrod (pascalCase)
*/




function toCamelCase(str){
// P:
// check if string has dashes or underscores /
// split according to which character it has (either dash or underscore) and store in array /
// check IF the first item is capitalized or not.
// if it is capitalized run a loop to turn the string into PascalCase
// otherwise run a loop to turn the string into camelCase
// return string

let result = [];

if(str.includes('-')){
   let arr = str.split('-')
    for(let i = 1; i < arr.length; i++){
        result.push(`${arr[i][0].toUpperCase()}${arr[i].slice(1)}`)
    }
    result.unshift(arr[0])
}else if(str.includes('_')){
    let arr = str.split('_')
    for(let i = 1; i < arr.length; i++){
        result.push(`${arr[i][0].toUpperCase()}${arr[i].slice(1)}`)
    }
    result.unshift(arr[0])
}


console.log(result.join(''))






}

toCamelCase('My-name-is-jarrod')






