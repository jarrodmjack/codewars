/* 
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
*/

// PREP
// I will write a function that takes in a 2D square of arrays NxN. I must find the index and cross index of the bomb as coordinates.


// Any array passed in will be a square
// Assuming there will only be one mine
// Assuming all inputs are valid
// first element is the row index, second is column index.
// Arrays are 0 based


// I will return coordinates of the bomb location in the following format [crossIndex, columnIndex]

// Examples
/* 
Example 1:
[
[0,0,0],
[0,0,0],
[0,1,0]
]

returns [2,1]

Example 2:

[
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,1,0]
]

returns [4,3]


*/


function mineLocation(field){
  
    //   create crossIndex variable
    //   create columnIndex variable
    // loop through field array
    // nested for loop
    //   for each time we traverse through the field array, traverse horizontally
    //   if item === 1, return the coordinates of the mine
      
      let columnIndex = 0;
      let crossIndex = 0;
      
      for(let i = 0; i < field.length; i++){
        // console.log(field[i])
        for(let j = 0; j < field[i].length; j++){
          // console.log(field[i][j])
          if(field[i][j] === 1){
            console.log([i,j])
          }
        }
      }
      
      
      
    }
    
    mineLocation([
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0]
    ])
    
    
    