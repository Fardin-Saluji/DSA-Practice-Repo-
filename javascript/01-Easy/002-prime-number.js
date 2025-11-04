function isPrime(number) {
    if (number <= 1) {
        console.log("Not Prime");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Not Prime");
            return;
        }
    }

    console.log("Prime");
}


isPrime(7);  
isPrime(10); 

