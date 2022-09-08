
/* 
Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

// P:
// Will there only ever be 4 types of materials?
// Is the object gauranteed to have at least one material?
// For items with 2 materials, I am sorting the items based on when they show up
// Assuming otherwise inputs will be valid
// will object types be unique - in a sense that they won't show up multiple times?
// will there be at least 1 item per material bin array?

// R: I will return an array of arrays with the types listed and put into each material bin. If the item has 2 materials, list them in order of which they appear


// E:
/*

this is the order of bins:
paper, glass, organic, and plastic.

Lets say I am given this array of items :


[
{"type": "beer bottle", "material": "glass", "secondMaterial": "paper"},
{"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
{"type": "water bottle", "material": "plastic"},
{"type": "carboard box", "material": "paper"},
]

this would output : 

[
['beer bottle', 'cardboard box'],
['beer bottle'],
['out of date yogurt']
['out of date yogurt', 'water bottle'],
]


*/

// let array = input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]



// function recycle(array) {
// //   P:
// //   create 4 arrays, 1 for each "bin"
// //   if item material or item second material === paper, plastic, organic, glass etc.. push type to the specific array
// //   do this for all items, arrays should be sorted out
// // put all 4 arrays into a containing array and return

//   let paperBin = [];
//   let glassBin = [];
//   let organicBin = [];
//   let plasticBin = [];

//   for(let i = 0; i < array.length; i++){
//     for(const key in array[i]){
//       if(key === 'material' && array[i][key] === 'paper' || key === 'secondMaterial' && array[i][key] === 'paper'){
//           paperBin.push(array[i].type)
//       }else if(key === 'material' && array[i][key] === 'glass' || key === 'secondMaterial' && array[i][key] === 'glass'){
//          glassBin.push(array[i].type)
//       }else if(key === 'material' && array[i][key] === 'organic' || key === 'secondMaterial' && array[i][key] === 'organic'){
//          organicBin.push(array[i].type)
//       }else if(key === 'material' && array[i][key] === 'plastic' || key === 'secondMaterial' && array[i][key] === 'plastic'){
//          plasticBin.push(array[i].type)
//       }
//     }
//   }


//   console.log(paperBin)
//   console.log(glassBin)
//   console.log(organicBin)
//   console.log(plasticBin)
//   return [paperBin, glassBin, organicBin, plasticBin]

// }

// recycle(array)

let array = input = [
    { "type": "rotten apples", "material": "organic" },
    { "type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic" },
    { "type": "wine bottle", "material": "glass", "secondMaterial": "paper" },
    { "type": "amazon box", "material": "paper" },
    { "type": "beer bottle", "material": "glass", "secondMaterial": "paper" }
]

function recycle(arr) {
    let paper = [], glass = [], organic = [], plastic = [];

    arr.forEach(obj => {
        if (obj.material === 'paper' || obj.secondMaterial === 'paper') paper.push(obj.type)
        if (obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
        if (obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
        if (obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
    });
    return [paper, glass, organic, plastic]
}
