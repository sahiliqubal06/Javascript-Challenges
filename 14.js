// Create a function that generates a random number between a given range.

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1)) +min;
}

console.log(getRandomNum(50,100));
