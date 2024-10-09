// String Manipulation
// Write a function that takes a string and returns the reserved version of it.

let str = "Hello WOrld";

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString(str));

// Also


// let str = "Hello WOrld";

// function reverseString(str) {
//   return str.split("").reverse();
// }

// console.log(reverseString(str));
