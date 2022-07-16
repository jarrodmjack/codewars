/* 

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
*/


// PREP

// I will write a function that takes in 3 parameters. Turtle A's speed (feet per hour), turtle B's speed(feet per hour) and however much of a lead Turtle A has on Turtle B represented by G (feet). I will return the hours, mins and seconds in an array in the form of [hour, min, sec] that it takes for turtle B to catch up to Turtle A.






// P:
// if Turtle A's speed > Turtle B's speed, need to return null
// otherwise assuming Turtle B's speed will be faster than Turtle A's speed
// inputs will be integers (v1/v2 == feet per hour, G == feet)




// R: Assuming v2 > v1, I will return an array in the form of [hour, min, sec] that it takes turtle B to catch up to turtle A. Else I will return null




// E:
/* 
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
*/





// P:
// Calculate how long it takes Turtle A to travel lead(70)
// Turtle A speed / lead 
// divide 1 by that number
// decimal number as speed in hours it took to get his lead
// Turtle A speed (TB + decimal number to get lead) = Turtle B Speed * (TB)
// Turtle A speed (TB) + Turtle A speed (decimal to get lead) = turtle B speed (TB)
// 



function race(TAV, TBV, TAL) {

    const talTime = TAV / TAL
    const leadTime = 1 / talTime
    const tavLessLead = TAV * leadTime
    const diff = TBV - TAV


    const timeDec = tavLessLead / diff

    let totalTimeSeconds = timeDec * 3600

    let hoursTracker = 0;
    let minutesTracker = 0;
  


    while(totalTimeSeconds >= 3600){
        totalTimeSeconds -= 3600
        hoursTracker++
    }

    while(totalTimeSeconds >= 60){
        totalTimeSeconds -= 60
        minutesTracker++
    }


    if(totalTimeSeconds >= 59){
        minutesTracker ++
        totalTimeSeconds = 0
    }

    let array = [hoursTracker, minutesTracker, Math.floor(totalTimeSeconds)]
    console.log(array)


}

solve(820, 850, 550)


