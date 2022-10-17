const singleNumber = (nums) => {

    let numObj = {}
    for(let num of nums){
      if(numObj.hasOwnProperty(num)){
        delete numObj[num] // if num shows up twice, we can just delete!!
      }else{
        numObj[num] = 1
      }
    }
    return Object.keys(numObj)[0]
  }