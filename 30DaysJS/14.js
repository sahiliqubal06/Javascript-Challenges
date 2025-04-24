// // Function to find all factors of a given number

function factor(num) {
  if (num < 1) {
    return console.log("Number must be greater than 0");
  }

  let result = [];
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
      console.log(i);
    }
  }
  return result;
}

console.log(factor(25));

function fact(n) {
  let i = 1;
  const result = [];
  while (i <= n) {
    if (n % i === 0) {
      result.push(i);
      console.log(i);
    }
    i++;
  }
  return result;
}

console.log(fact(6));
