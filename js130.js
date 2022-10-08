

function scramble(str1, str2) {

    let letters = {}

    for(let i = 0; i < str2.length; i++){
        if(!letters[str2[i]]){
            letters[str2[i]] = 0
        }
        letters[str2[i]] ++
    }

    for(let i = 0; i < str1.length; i++){
        if(str1[i] in letters){
            letters[str1[i]] --
        }
    }

    for(const key in letters){
        if(letters[key] > 0){
            return false
        }
    }
return true
}

scramble('rkqodlw', 'world')
