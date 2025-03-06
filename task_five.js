// Summing the Digits of a Number with While Loop


let n = 1234

function sumOfNumber(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;  
        n = (n / 10) | 0;  
    }
    return sum;
}


console.log(sumOfNumber(n));
