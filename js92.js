















function mostMoney(students) { // taking in students array of objects

    let res = [];
    for(let i = 0; i < students.length; i++){
        let sum = 0;
        sum += (students[i].fives * 5)
        sum += (students[i].tens * 10)
        sum += (students[i].twenties * 20)
        res.push(sum)
    }
    
    // if(res.every(item, i => item === item[0]))
    console.log(res)
    if(res.every((item, i, arr) => item === arr[0])){
        return 'All'
    }else{
        let k = Math.max(...res)
        let j = res.indexOf(k)
       return students[j].name
    }

}

console.log(mostMoney([
    { name: 'Andy', fives: 0, tens: 0, twenties: 2 },
    { name: 'Stephen', fives: 0, tens: 4, twenties: 0 },
    { name: 'Eric', fives: 7, tens: 1, twenties: 0 },
    { name: 'David', fives: 4, tens: 0, twenties: 1 },
    { name: 'Phil', fives: 0, tens: 2, twenties: 1 }
]))