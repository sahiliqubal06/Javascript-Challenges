//This function calculates the average of an array of numbers

function avgSum(arrOfNum) {
  let sum = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    sum += arrOfNum[i];
  }
  return sum / arrOfNum.length;
}

console.log(avgSum([1, 2, 3, 4, 5]));
console.log(avgSum([2, 4, 5]));

function AverageOfSum(arr) {
  if (arr.length === 0) return "array is empty";
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

console.log(AverageOfSum([10, 20, 30]));
console.log(AverageOfSum([10, 20, 30, 10, -2]));
console.log(AverageOfSum([]));
