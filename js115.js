

function Sort(str) {

    // create empty string variable
    let char = ''
    let arr = str.toLowerCase().split('').sort().map(letter => {
        if(letter != char){
            char = letter
            return letter.toUpperCase()
        }
        return letter
    })
   console.log(arr)
  }

Sort('beeeEBb')