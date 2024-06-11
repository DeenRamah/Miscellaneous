//Primality testing is the task of determining whether a given number is prime or composite. Randomized algorithms like Miller-Rabin offer a probabilistic approach to primality testing

function isPrime(n: number, k: number): boolean{
    if(n <= 1) return false;
    if(n <= 3) return true;

    let d = n -1;
    while (d % 2 ===0){
        d/=2;
    }

    //perform Miller-Rabin primarily test k time

    for(let i=0; i<k; i++){
        const a = 2 + Math.floor(Math.random() * (n-3));
        let x = Math.pow(a,d) % n;

        if(x === 1|| x == n -1) continue;

        let prime = false;
        for (let r=1; r<d; r *=2){
            x =(x * x) % n;
            if(x ===1) return false;
            if(x ===n -1){
                prime = true;
                break;
            }
        }

        if(!prime) return false;
    }
    return true;
}


const numberToTest = 7919;
const k = 5;
console.log(`${numberToTest} is prime:`, isPrime(numberToTest, k))
