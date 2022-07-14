

/* Create a function to check if a number is a  prime number*/


function prime(number) {


    let isPrime = true;

    if (number > 1) {
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                isPrime = false
            }
        }
    }

    return isPrime



}





console.log(prime(4))