
let N = 8;
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0]; 
    
       let a = 0, b = 1; 
    let sequence = [a, b]; 
    let i = 1; 

    while (i < n) {  
        let Ptf= a + b; 
        sequence.push(Ptf); 
        a = b;
        b = Ptf; 
        i++; 
    }

    return sequence;
}


console.log(fibonacci(N));
