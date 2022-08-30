function sortTheInnerContent(str){
    //  if word is greater than length of 3
    //   slice the innards of the string
    //   sort those in descending order
    //   join them back together with the original string
      const result = [];
      let arr = str.split(' ')
      
      for(let i = 0; i < arr.length; i++){
          if(arr[i].length > 3){
          let item = arr[i].split('')
          let innerContent = `${item[0]}${item.slice(1, -1).sort().reverse().join('')}${item[item.length - 1]}`
          result.push(innerContent)
        }else{
          result.push(arr[i])
        }
        
        
        
      }
      
      return result.join(' ')
      
    }