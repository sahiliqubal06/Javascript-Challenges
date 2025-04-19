// function to calculate the factorial of a number

function fact(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(fact(4));
console.log(fact(1));
console.log(fact(0));
console.log(fact(-5));

// function to calculate the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));
console.log(fact(0));
console.log(fact(-5));

