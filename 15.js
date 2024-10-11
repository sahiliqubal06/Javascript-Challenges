// Write a function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [23, 22, 11, 25, 13, 15, 26];

// For Even
function filterEvenNum(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// For Odd
function filterOddNum(arr) {
  return arr.
  filter((num) => num % 2 !== 0);
}


console.log(arr);
console.log(filterOddNum(arr));
console.log(filterEvenNum(arr));
