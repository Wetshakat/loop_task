// Print all even numbers up to and including N. Don't include 0.

let myfigure = 29


for (let i = 2; i <=myfigure ; i += 2) {
  console.log(i);
}

// or

for (let i = 1; i <= myfigure; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  