//Primality testing is the task of determining whether a given number is prime or composite. Randomized algorithms like Miller-Rabin offer a probabilistic approach to primality testing.
function isPrime(n: number): boolean{
    if(n <= 1) return false;
    if(n <= 3) return true;

    //write n as 2^r * d + 1
    let d = n - 1;
    while (d % 2 === 0){
        d /= 2;
    }
    for(let i = 0; i < k; i++){
        const a = 2 + Math.floor(Math.random() * (n - 3));
        let x = Math.pow(a, d) % n;

        if(x === 1 || x === n - 1) continue;

        let prime = false;
        for(let r = 1; r < d; r *= 2){
            x = (x * x) % n;

            if(x === 1) return false;//composite
            if(x === n - 1){
                prime = true;
                break;
            }
        }
        if(!prime) return false; //composite

    }
    return true;

}

const numberTotest = 7919;//A prime number
const k = 5; //number of iterations
console.log(`${numberTotest}`, isPrime(numberTotest));
