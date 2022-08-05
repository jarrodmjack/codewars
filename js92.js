















function mostMoney(students) { // taking in students array of objects
    let arr = [];
    for (let i = 0; i < students.length; i++) { // for loop through array
        let sum = [students[i].fives, students[i].tens, students[i].twenties]
        arr.push(sum)
    }
    
    console.log(arr)
    let res = [];
    for(let i = 0; i < arr.length; i++){
        let amount = arr[i].reduce((acc, c, idx) => {
            // console.log(idx)
            if(idx === 0){
                acc += (c * 5)
            }else if(idx === 1){
                acc += (c * 10)
            }else if(idx === 2){
                acc += (c * 20)
            }
            return acc
        }, 0)
        res.push(amount)
    }
    console.log(res)
 
    if(res.every( (val, i, arr) => val === arr[0]) === true){
        console.log('All')
    }else{
        let k = res.indexOf(Math.max(...res))
        console.log(students[k].name)
    }

    // let k = res.indexOf(Math.max(...res))
    // console.log(students[k])
  

}

mostMoney([
    { name: 'Andy', fives: 0, tens: 0, twenties: 2 },
    { name: 'Stephen', fives: 0, tens: 4, twenties: 0 },
    { name: 'Eric', fives: 6, tens: 1, twenties: 0 },
    { name: 'David', fives: 4, tens: 0, twenties: 1 },
    { name: 'Phil', fives: 0, tens: 4, twenties: 1 }
])