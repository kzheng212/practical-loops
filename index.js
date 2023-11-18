// Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`Fizz Buzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}

// Part 2: Prime Time

let userIntInput = parseInt(prompt(`Enter an Integer: `));
// console.log(userIntInput);
let isNextPrime = false;
let primeNumArray = [];
let currNum = 2;

while (isNextPrime !== true) {
  let isPrime = true;
  let divisor = 2; // Start checking divisibility from 2

  // We use sqrt here to see if the smallest divisor is
  // smaller or equal to the sqrt of the current Number
  // This can be thought as:
  // "Is there a divisor, where >=2 and it is a multiple of currNum?"
  // If so, we know the current number is a composite
  // If no, It is a prime number
  while (divisor <= Math.sqrt(currNum)) {
    if (currNum % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }

  if (isPrime) {
    primeNumArray.push(currNum);

    if (currNum > userIntInput) {
      isNextPrime = true;
      console.log(`Your Next Prime Number: ${currNum}`);
      console.log(`Your Prime Number Array: ${primeNumArray}`);
    }
  }

  currNum++; // If Prime or Composite Always Increment
}

// Part 3: Feeling Loopy

let csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

/* Split csvStrings into Categorical Rows 
& Store each Row in a respective Index
of Rows Array */
const rows = csvString.split(`\n`);

// Split each row into cells
// & Store all of the Cells of the current row into 
// & array called cells
// Prints the current cells for each row iteration
for (const row of rows) {
  const cells = row.split(`,`);
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
