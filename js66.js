





function toWeirdCase(string) {
    let arr = string.split(' ')

    const weirdArray = [];



    arr.forEach(item => {
        
        let weirdString = '';

        for(let i = 0; i < item.length; i++){
            if(i === 0 || i % 2 === 0){
                weirdString += item[i] = item[i].toUpperCase()
            }else{
                weirdString += item[i] = item[i]
            }
        }


        weirdArray.push(weirdString)



    })

    console.log(weirdArray.join(' '))


}

toWeirdCase('Weird string case')