




// var splitInParts = function(s, partLength){
//     var parts = [];
//     var array = s.split('');
//     while(array.length) {
//       parts.push(array.splice(0,partLength).join(''));
//     }
//     return parts.join(' ');
//   }


  const splitInParts = (s, partLength) => {
    // P: 
    // create variable to store empty array
    // split string and store in variable
    // while loop --> while array.length
    // push array.splice(start, deleteCount) --> join together after splice
    // join together with spaces and return array with new items
    let parts = [];
    let array = s.split('')
    while(array.length){
        parts.push(array.splice(0, partLength).join(''));
    }
    console.log(parts.join(' '))

  }


  splitInParts('hahahahahaha', 3)