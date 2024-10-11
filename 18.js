// Remove all occurences of a specific element from an array.

const arr = [10, 22, 34, 54, 10, 18, 10, 23, 43];
let target = 10;

function removeElement(arr, target) {
  return arr.filter((item) => item !== target);
}

let removed = removeElement(arr, target);
console.log(removed);
