// Write a function that calculates the factorial of a given number.

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorial(4));


// Basics to be known for factorial

// 1. Factorial of 0 = 1;
// 1. Factorial of 1 = 1;
// 1. Factorial of 5 = 5*4*3*2*1=120


