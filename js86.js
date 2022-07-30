

/* 
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/


function encode(string) {

    let res = [];
    let arr = string.split(' ')
    let farr = arr.map(item => item.split(''))

    for (let i = 0; i < farr.length; i++) {

        for (let j = 0; j < farr[i].length; j++) {
            if (farr[i][j] === 'a') {
                farr[i][j] = '1'
            } else if (farr[i][j] === 'e') {
                farr[i][j] = '2'
            } else if (farr[i][j] === 'i') {
                farr[i][j] = '3'
            } else if (farr[i][j] === 'o') {
                farr[i][j] = '4'
            } else if (farr[i][j] === 'u') {
                farr[i][j] = '5'
            } else {
                farr[i][j] = farr[i][j]
            }
           
        }
       farr[i] =  farr[i].join('')
    }

    console.log(farr.join(' '))

}

encode('hello')





  function decode(string) {
    let arr = string.split('')
    let res = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '1'){
            res.push('a')
        }else if(arr[i] === '2'){
            res.push('e')
        }else if(arr[i] === '3'){
            res.push('i')
        }else if(arr[i] === '4'){
            res.push('o')
        }else if(arr[i] === '5'){
            res.push('u')
        }else{
            res.push(arr[i])
        }
    }
    console.log(res.join(''))
  }

  decode('h2ll4 th2r2')