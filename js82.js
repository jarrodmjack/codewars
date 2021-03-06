/* 
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/



// PREP
// I will write a function that formats a duration in seconds into a human readable way. 


// P:
// More significant units of time appear before less significant (eg. years, months, days etc)
// last unit will be separated by "and"
// units will be plural if more than one of that specific unit
// always a positive integer
// unit must be returned so if seconds was equal to 61, it would not just show 61 seconds, it would show 1 minute and 1 second
// if a unit ends up being 0, it will not be shown
// 31,536,000 seconds in a year
// 2,628,000 seconds in a month
// 86,400 seconds in a day
// 3600 seconds in an hour
// 60 seconds in a minute


// R: I will return a human readable format of a time given in seconds in the format below


// E: Examples
/* 
61 ---> 1 minute and 1 second
120 ---> 2 minutes
"1 year, 4 months, 5 days, 13 hours, 52 minutes and 51 seconds"
*/



// function formatDuration(seconds) {
//     const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//         res = [];

//     if (seconds === 0) return 'now';

//     for (let key in time) {
//         if (seconds >= time[key]) {
//             var val = Math.floor(seconds / time[key]);
//             res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//             seconds = seconds % time[key];
//         }
//     }

//     return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
// }

// function formatDuration(seconds){

// const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }, res = []

// if(seconds === 0) return 'now';

// for(let key in time){
//     if(seconds >= time[key]) {
//         let val = Math.floor(seconds /  time[key]);
//         res.push(val += val > 1 ? ` ${key}s` : ` ${key}`)
//         seconds = seconds % time[key]
//     }
// }

// return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]



// }

// function formatDuration(seconds){

//     const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }, res = []

//     if(seconds === 0) return 'now';


//     for(let key in time){
//         if(seconds >= time[key]){
//             let val = Math.floor(seconds / time[key])
//             res.push(val += val > 1 ? ` ${key}s` : ` ${key}`)
//             seconds = seconds % time[key]
//         }
//     }

//     return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ` and` + `$1`) : res[0]



// }




// console.log(formatDuration(159195342))














String.prototype.camelCase = function(str){

    let arr = this.split(' ')
    let res = [];    
    for(let i = 0; i < arr.length; i++){
        res.push(`${arr[i][0].toUpperCase()}${arr[i].slice(1)}`)
    }


    console.log(res.join(''))


}

'say hello'.camelCase()










