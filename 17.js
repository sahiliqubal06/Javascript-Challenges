// Find the largest element in an array using the `reduce()` method.
let arr = [10, 33, 2, 87, 54, 32, 11];

function largestElement(arr) {
  return arr.reduce((max, current) => (current > max ? current : max));
}

let reduce = largestElement(arr);
console.log(reduce);

// Find the Smallest element in an array using the `reduce()` method.

const numbers = [10, 33, 2, 87, 54, 32, 11];

function findSmallestElement(acc, curr) {
  return acc < curr ? acc : curr;
}

let smallest = numbers.reduce(findSmallestElement);
console.log(smallest);
