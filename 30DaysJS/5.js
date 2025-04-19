// function to reverse a string

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("sahil Iqubal"));
console.log(reverseString("656555"));

// function to reverse a string using built-in methods
function revString(str) {
  return str.split("").reverse().join("");
}

console.log(revString("reverse a string in JavaScript"));

