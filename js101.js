function getOrder(input) {
    //   P:
    // loop through string, on each iteration, check if a word from the dictionary has been created
    //   if it has, push to new array and clear string
    //   if not, continue looping
    //   that should bring me to having an array of strings
    //   I will have to capitalize each letter
    //   I will also need to compare against the dictionary and sort the array by order in dictionary
    //   join array together by spaces and return
      
    
      
      
     let dict = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
      let comparisonString = ''
      let resultArray = [];
      
     for(let i = 0; i < input.length; i++){
       comparisonString += `${input[i]}`
       if(dict.includes(comparisonString)){
         resultArray.push(comparisonString)
         comparisonString = ''
       }
    } 
      
    
      let sorted = resultArray.sort((a, b) => {
        return dict.indexOf(a) - dict.indexOf(b)
      })
      
      return sorted.map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ')
      
    
    }
    console.log(getOrder("burgerfriesmilkshakefriescokepizzaburgerfries"))
    
    
    console.log('apple'.includes('a'))