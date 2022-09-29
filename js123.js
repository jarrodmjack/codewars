function catMouse(x, j){


let dogIdx = x.indexOf('D')
let catIdx = x.indexOf('C')
let mouseIdx = x.indexOf('m')
let catMouseDistance = Math.abs(catIdx - mouseIdx) - 1
// console.log(dogIdx)
console.log(catMouseDistance)

if(catMouseDistance <= j){

    if(dogIdx === -1 || mouseIdx === -1 || catIdx === -1){
        console.log('Boring without all three')
    }else if(mouseIdx > catIdx && dogIdx < catIdx || mouseIdx > catIdx && dogIdx > mouseIdx || catIdx > mouseIdx && dogIdx > catIdx || catIdx > mouseIdx && dogIdx < mouseIdx){
        console.log('Caught')
    }else if(dogIdx > mouseIdx && dogIdx < catIdx || dogIdx > catIdx && dogIdx < mouseIdx){
        console.log('Protected')
    }
}else if(catMouseDistance > j){
    console.log('Escaped')
}

}
catMouse('..m........C....D..', 8)