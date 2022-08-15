/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/



// PREP
// I will write a function that takes in an array of 5 values from a 6 sided dice(randomized), I must return a score based on the parameters described above




// P:
// Array will always have 5 values
// values will be from 1 to 6 (6 sided die)
// 2/3/4/6 on their own, give no points at all, only when there are at least 3 of them
// play params 
/* 
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
*/
// assuming array will never be null/missing




// R: I will return a total score from gathering the points from the dice roll. I will return as an integer




// E:Example:
/*
dice = [1, 1, 1, 3, 5] ---> returns 1050 because three 1's equals 1000 points, a single 3 provides no points and a single 5 provides 50 points
dice = [3, 4, 6, 2, 3] ---> returns 0 because none of the items here have 3 occurences and none provide value on their own single occurence
*/


function score(dice) {
    // P:
    // create score variable
    // loop through array using reduce and get an object of occurences
    // loop through object and check occurences
    // check win conditions based on the following :
    /* 
    Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point
    */
    // add accordingly to total score
    // once calculated, return score as integer

    let obj = dice.reduce((acc, c) => {
        if(!acc[c]){
            acc[c] = 0
        }
        acc[c]++
        return acc
    }, {})
    
    let score = 0;
    console.log(obj)
    for(const key in obj){
       
        // if key is greater than 3
        if(obj[key] === 4){
            if(key === '1'){
                score += 1100
            }else if(key === '2'){
                score += 200
            }else if(key === '3'){
                score += 300
            }else if(key === '4'){
                score += 400
            }else if(key === '5'){
                score += 550
            }else if(key === '6'){
                score += 600
            }
        }

        // if value === 5
        if(obj[key] === 5){ 
            if(key === '1'){
                score += 1200
            }else if(key === '2'){
                score += 200
            }else if(key === '3'){
                score += 300
            }else if(key === '4'){
                score += 400
            }else if(key === '5'){
                score += 600
            }else if(key === '6'){
                score += 600
            }
        }

         // if key is equal to 3
        if(obj[key] === 3){
            if(key === '1'){
                score += 1000
            }else if(key === '2'){
                score += 200
            }else if(key === '3'){
                score += 300
            }else if(key === '4'){
                score += 400
            }else if(key === '5'){
                score += 500
            }else if(key === '6'){
                score += 600
            }
        }
        // if key is less than 3
        if(obj[key] < 3){
            if(key === '1'){
                score += 100 * obj[key]
            }else if(key === '5'){
                score += 50 * obj[key]
            }
        }


    }

    console.log(score)

}







    // const options = {
    //     method: 'GET',
    //     url: `https://bing-news-search1.p.rapidapi.com/news/search`,
    //     params: { q: `cryptocurrency`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
    //     headers: {
    //     'X-BingApis-SDK': 'true',
    //     'X-RapidAPI-Key': 'db3e8ae18bmshd7bb610557d438fp1e9721jsneadf0cccb21c',
    //     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    // }
    // };
    
    // fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));


        // const options = {
        //     method: 'GET',
        //         url: `https://bing-news-search1.p.rapidapi.com/news/search`,
        //         params: { q: `cryptocurrency`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
        //         headers: {
        //         'X-BingApis-SDK': 'true',
        //         'X-RapidAPI-Key': 'db3e8ae18bmshd7bb610557d438fp1e9721jsneadf0cccb21c',
        //         'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        //     }
        // };
        
        // fetch('https://bing-news-search1.p.rapidapi.com/news?category=ScienceAndTechnology&safeSearch=Off', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));