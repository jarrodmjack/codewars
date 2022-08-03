/* 
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/


// PREP

// I will write a function that takes in two different objects, one object will be the ingredients it takes to make the cake, the second will be the available ingredients. I must figure out how many cakes Pete can make the the ingredients he has compared to what it takes to make the cake


// P:
// Assuming both objects will be valid with ingredients
// Cake ingredients may be something Pete doesn't have, in which case the answer would be 0




// R: I will return an integer value which will be equal to how many cakes Pete can make with the ingredients he has.




// E: Examples:
/* 
Example 1: cakeReqs{flour: 10, eggs: 3, sugar: 50}, peteIngredients{flour: 50, eggs: 9, sugar: 200} --> Pete can make 3 cakes
Example 2: cakeReqs{flour: 100, eggs: 20, sugar: 400}, peteIngredients{flour: 100, eggs: 20, sugar: 350} ---> Pete can make 0 cakes (not enough sugar)
*/



function cakes(recipe, available) {

    let cakes = [];

    // loop through both objects to compare keys
    for(let key in recipe){
        if(recipe.hasOwnProperty(key)){
            if(key in available){
                cakes.push(Math.floor(available[key] / recipe[key])); // how many times recipe value can be divided by available value - per key
            }else{
                return 0; 
            }
        }
    }

    return Math.min(...cakes) //return smallest number 

}
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5 }));











