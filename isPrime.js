const isPrime = (n) => {
    // todo
    //if(n === 2) return true;
    if(n < 2) return false;

    for (let k = 2; k < n; k++){
        if( n % k == 0){
            return false;
        }
    }
    return true;
};

// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(7))
// console.log(isPrime(8))
// console.log(isPrime(1))
// console.log(isPrime(25))