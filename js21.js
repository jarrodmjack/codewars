

/* 
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/


// PREP
/*  I will receive an object with names/values attached. I must get the values of the names,
 add them together and then divide that by the number of people in the room. If the end result
 is <= 5, I return 'Get out now' else I return 'Nice Work Champ!' as string values*/

//P: an object with a list of names/values will always be passed in. Values will all be >= 0. No decimal numbers, no string numbers
// Boss value is worth DOUBLE, but still only counts as one person

//R: I will return the sum from the values divided by the total number of people in the room

//E: 
// John: 3, Amy: 2, Jim: 5
// I will sum the values 3 + 2 + 5 and divide by number of people (3) and if final product is greater <= 5 return 'get out' else 'nice work'
// {'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), -->'Get Out Now!')

function outed(meet, boss){
//P:
// create a variable to hold the sum
// loop through the object and add the values.
// IF the name is === boss name, double that value
// get length of Object
// divide that sum by num of people
// if <= 5, return 'Get Out Now!'
// else return 'Nice Work Champ!'
// console.log(meet.length)
let sum = 0;
let length = Object.keys(meet).length
for(const key in meet){
    if(key === boss){
        sum += meet[key] * 2
    }else{
        sum += meet[key]
    }
}

sum = sum / length

return sum  <= 5 ? 'Get Out Now!' : 'Nice Work Champ!' 

}

console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'))

