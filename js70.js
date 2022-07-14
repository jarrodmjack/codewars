




// function flatten(arr){

//    let count = 0;

function deepCount(items) {
    const flat = [];
    
    items.forEach(item => {
      if (Array.isArray(item)) {
        flat.push(...deepCount(item));
        count += 1
      } else {
        flat.push(item);
        count += 1
      }
    });
  

    console.log(count)
    return flat;
  }
    

    
    
// }

 
console.log(deepCount([[[[[[[[]]]]]]]]))




// const arr = [[1,2],[3,[4,[5]]]];
 
// const flattened = deepCount(arr);
// console.log(flattened);


// deepCount([1, 2, [3, 4, [5]]])
