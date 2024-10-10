// Find the sum of all elements in an array

let arr = [20, 18, 20, 8, 3, 5];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// Also

let array = [40, 20, 88, 23, 43];

let add = 0;
// i<5 not a good way for large no of array so we use (arr.length) method as shown above
for (let i = 0; i < 5; i++) {
  add += array[i];
}

console.log(add);
