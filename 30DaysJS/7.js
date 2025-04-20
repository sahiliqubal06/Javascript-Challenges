// function to find a year is leap year or not

function isLeapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(isLeapyear(2025));
console.log(isLeapyear(2024));
console.log(isLeapyear(2000));
console.log(isLeapyear(1900));

