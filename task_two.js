// Summing the First N Natural Numbers with JavaScript While Loop


let N = 10; 
let sum = 0;
let i = 1; 

while (i <= N) { 
    sum += i; 
    i++; 
}

console.log(sum);

// Trying to declare N as a global variable to see hoe it behave in a function

let n = 10; 

function sumNaturalNumbers(n) {
    let sum = 0;
    let i = 1;

    while (i <= n) { 
        sum += i;
        i++;
    }

    return sum;
}

console.log(sumNaturalNumbers(n));

