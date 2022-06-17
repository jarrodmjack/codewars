




// PREP
// I must compare the two strings by comparing the sum of the character value (ASCII Value). If equal I will return true, else return false


// P:
// Will letters be uppercase or lowercase or both? Uppercase
// Will all inputs be valid? No, testing for null / empty values
// Will the strings include string numbers? Yes



// R: I will return true if equal, else I will return false



// E: 'AD', 'BC' ---> True as the total ascii values are equal.
// E: 'zz1', '' ----> true as both would be considered empty, since the first string contains a number
// E: 'AD', 'GS' ---> false as values are not equal


function compare(s1, s2) {
    // // P:
    // // get ascii values from both strings, make sure to turn each string to uppercase per our parameters
    // // if empty string or the string contains a string number, they will be considered 0
    // // compare values
    // // if equal, return true, else return false
        let nums = [...'123456789']
        let arr1 = s1.split('')
        let arr2 = s2.split('')
        
        let hasNumsS1 = false;
        let hasNumsS2 = false;

        arr1.forEach(item => {
            if(nums.includes(item)){
                hasNumsS1 = true
            }
        })
        arr2.forEach(item => {
            if(nums.includes(item)){
                hasNumsS2 = true
            }
        })
     
        // if(hasNumsS1 === true && hasNumsS2 === true){
        //     return true
        // }else if(){

        // }
      
        if(s1 === '' || s2 === ''){ //if strings are empty, return true
            return true
        }else if(s1 === '' && hasNumsS2 === true || s1 === '' && hasNumsS2 === true || s2 === '' && hasNumsS1 === true || s2 === '' && hasNumsS2 === true){
            return true
        }else if(hasNumsS1 === true && hasNumsS2 === true){
            return true
        }else if(hasNumsS1 === true && hasNumsS2 === false || hasNumsS2 === true && hasNumsS1 === false){
            return false
        }


    
        let firstSum = s1.split('').map(item => item.toUpperCase().charCodeAt(0)).reduce((acc, c) => acc + c)
        let secondSum = s2.split('').map(item => item.toUpperCase().charCodeAt(0)).reduce((acc, c) => acc + c)
     
        
        return firstSum === secondSum ? true : false
    
    }

console.log(compare('zz1', ''))