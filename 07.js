// Create a program that check if a given year is a leap year.

let isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};


console.log(isLeapYear(2032))