


function isVow(a) {
    //   make object of ascii values (hardcoded) 
    //   loop through a
    //   if object of ascii values includes current array item, change that item to it's corresponding letter
    //   return new array

    let ascii = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u',
    }




    let result = a.map((item, i) => {
        if(item in ascii){
            return item = ascii[item]
        }else{
            return item
        }
    })

    console.log(result)

    

}

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])