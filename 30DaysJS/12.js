// function to calculate the power of a number using the exponentiation operator
function power(a, b) {
  return a ** b;
}

console.log(power(2, 3)); // 8
console.log(power(0, 0));
console.log(power(2, 10));

// function to calculate the power of a number using a for loop

function powerOf(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(powerOf(2, 10));
