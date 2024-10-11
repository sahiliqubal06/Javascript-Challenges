// Create a function that displays current Date and Time in a specific format.

function getCurrDateTime() {
  let currDate = new Date();
  return currDate.toLocaleString();
}

console.log(new Date());
console.log(getCurrDateTime());
