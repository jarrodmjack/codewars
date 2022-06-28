


/*

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/



// PREP
// I am going to write a function that builds a pyramid shaped tower inside of an array


// P:
// number of floors will always be greater than 0
// I am working inside of an array
// not testing for invalid argument



// R:
// I will return an array that includes the pyramid blocks ordered in the way the pyramid would go.




// E:
/*  lets say I am given nFloors of 3
I would want to build an array that ends up looking like this:
['  *  ', 
 ' *** ', 
 '*****'
] 
*/





function towerBuilder(nFloors) {
// P:

// create a variable to store tower in
// for loop used to create an array element consisting of the * character
// each element will have *s that increment by 2 on each level
// each element will have spaces on the outside of the asterisks except the last one
// to calculate the spaces, I will take the number of *s from the bottom floor and subtract the number of *s on the current floor. That number will be used to put spaces evenly on each side of the * character
// I will return the modified array of tower blocks

let tower = [];
let block = '*'
tower[0] = '*'



for(let i = 1; i <= nFloors - 1; i++){
    block += '**'
    tower.push(block)

}

let leftSpaceCount = (tower[tower.length - 1].length - 1) / 2
let rightSpaceCount = (tower[tower.length - 1].length - 1) / 2

let leftSpace = ` `.repeat(leftSpaceCount)
let rightSpace = ` `.repeat(rightSpaceCount)

for(let i = 0; i < tower.length - 1; i++){
    tower[i] = `${leftSpace}${tower[i]}${rightSpace}`

    leftSpaceCount -= 1
    rightSpaceCount -= 1
    console.log(rightSpaceCount)
    console.log(leftSpaceCount)

    leftSpace = ` `.repeat(leftSpaceCount)
    rightSpace = ` `.repeat(rightSpaceCount)


}

return tower

}

towerBuilder(1)

