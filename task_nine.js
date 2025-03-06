// Write a program that finds the summation of every number from 1 to N. The number will 
// always be a positive integer greater than 0.

let N = 6;
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log(sum);