






/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/
// PREP
// I will take in a string of letters and nums. I must find the largest grouping of numbers within the given string. I will return that number as a number

// P: Numbers will not lead with 0. Inputs will always be valid. Letters are always lower case. string could be any length.

// R: Return largest grouping of nums as number type

// E: 'eh52sha691ndja2245' ----> returns 2245 as that is the largest grouping of numbers




function solve(s){
    // P:
    //  the Math.max function/method
    // use .match method
    // regex to return largest set of nums

    return Math.max(...s.match(/\d+|$/g))
    
};

solve('eh52sha691ndja2245') // ---> 2245
