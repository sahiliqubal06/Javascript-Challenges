// function to find smallest number between three numbers

function findSmallestNum(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

console.log(findSmallestNum(-1, 4, -5));
console.log(findSmallestNum(100, 3, 0));
console.log(findSmallestNum(4, 5, 3));
console.log(findSmallestNum(4004, -4045, 0));
console.log(findSmallestNum(0, 0, 0));
console.log(findSmallestNum(3, 3, 3));
