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


// fighter class
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

let red = new Fighter('Red', 10, 3) //red has 3 attack
let blue = new Fighter('Blue', 10, 1) //blue has 1 attack

// function to declare winner takes in both fighters and first attacker
function declareWinner(fighter1, fighter2, firstAttacker){
    // creating variables to store end result for health / damagePerAttack
    let fighter1Hp = fighter1.health / fighter2.damagePerAttack
    let fighter2Hp = fighter2.health / fighter1.damagePerAttack
    // conditional for IF one fighters HP is greater than the other
    if(fighter1Hp > fighter2Hp){
        return fighter1.name
    }else if(fighter2Hp > fighter1Hp){
        return fighter2.name
    }else{
        return firstAttacker
    }
}

  console.log(declareWinner(red, blue, red)) // ------ > red


// Create an instance of each fighter. 
// if one of the fighters health <= 0
//  return winners name










