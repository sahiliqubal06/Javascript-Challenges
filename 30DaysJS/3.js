// function to find even odd

function findEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}


// function to find even odd using ternary operator
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(findEvenOdd(4));
console.log(findEvenOdd(7));
console.log(findEvenOdd(-1));

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(-1));