// Finding the Largest Digit in a Number Using While Loop

let n = 1234564;

function ftLd(n) {
    let largest = 0; 
    while (n > 0) {
        let digit = n % 10; 
        if (digit > largest) {
            largest = digit; 
        }
        n =(n / 10)>>0;
    }
    return largest;
}



console.log(ftLd(n));
