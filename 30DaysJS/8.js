// function to calculate the sum of digits of a number

function sumofDigit(num) {
  let stringNum = num.toString();
  let splitNum = stringNum.split("");
  let sumOfDigits = 0;
  splitNum.forEach((n) => {
    sumOfDigits += parseInt(n);
  });
  return sumOfDigits;
}

console.log(sumofDigit(1234));
console.log(sumofDigit(123456789));
console.log(sumofDigit(85883));

//using Math.floor and % operator
function sumofDigit1(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumofDigit1(456));
console.log(sumofDigit1(1234567890));
