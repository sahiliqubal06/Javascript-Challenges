// Write a function that checks if a given number is even or odd and returns even or odd accordingly.

function checkEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(21));
console.log(checkEvenOrOdd(54));
