

let input = [
    "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
    "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
];




function sortReindeer(reindeerNames) {
    
    // let names = reindeerNames.sort(name => {
    //     console.log(name.split(' '))
    // })
    // console.log(splitNames)

    let names = []
    for(let i = 0; i < reindeerNames.length; i++){
        let item = reindeerNames[i].split(' ').reverse().join(' ')
        names.push(item)
    }

    let sorted = names.sort()
    let result = []

    // console.log(sorted)
    for(let i = 0; i < sorted.length; i++){
        result.push(sorted[i].split(' ').reverse().join(' '))
    }
    
    console.log(result)

}

// let output = [
//     "Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall",
//     "Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"
//   ];


sortReindeer(input)