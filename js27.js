/* 
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/

// PREP
/* I must determine the winner of the fight. Whoever has health <= 0 is dead and the other wins. */

// P: fighter class with 3 values passed in as arguments. Name, health and damagePerAttack. All arguments will be valid/truthy. Not testing for edge cases/gachas. Each fighter will be an instance of the Fighter class

// R: I must return a string with the name of the character that wins

// E:

/* 
Create an instance of each fighter.
Lew attacks Harry; Harry now has 3 health
Harry attacks Lew; Lew now has 0 health
Harry wins
*/


// // fighter class
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

// let red = new Fighter('Red', 10, 3) //red has 3 attack
// let blue = new Fighter('Blue', 10, 1) //blue has 1 attack

// // function to declare winner takes in both fighters and first attacker
// function declareWinner(fighter1, fighter2, firstAttacker){
//     // creating variables to store end result for health / damagePerAttack
//     let fighter1Hp = fighter1.health / fighter2.damagePerAttack
//     let fighter2Hp = fighter2.health / fighter1.damagePerAttack
//     // conditional for IF one fighters HP is greater than the other
//     if(fighter1Hp > fighter2Hp){
//         return fighter1.name
//     }else if(fighter2Hp > fighter1Hp){
//         return fighter2.name
//     }else{
//         return firstAttacker
//     }
// }

//   console.log(declareWinner(red, blue, red)) // ------ > red


// Create an instance of each fighter. 
// if one of the fighters health <= 0
//  return winners name


















/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

// PREP
// I will be given an array of numbers, I must return a string where the numbers given correspond with the letters of the alphabet. 

// P: all inputs will be valid so may need to test for gachas. Numbers need to correspond with position of letters in alphabet
// do I need to test for 0 values?
// '!' = 27, '?' = 28, ' ' = 29


// E: Example, I am given an array of ['1', '2', '3'] , this would return 'abc'



function switcher(x){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz!? '
    
    let final = []
    // split string into array and map as numbers
    // compare number to letter position in alphabet
    // push items into an array and join together
    // return a string

    let arr = x.map(Number)

    for(let i = 0; i < arr.length; i++){
              final.push(alphabet.indexOf(arr[i]))  
        
    }
    console.log(final)

    

    }


    switcher(['24', '12', '23', '22', '4', '26', '9', '8'])






    // compare number item of array to index position of item in a string