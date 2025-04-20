// function to print the multiplication table of a given number

function table(num1, num2) {
  for (let i = 1; i <= num2; i++) {
    console.log(`${num1} * ${i} = ${i * num1}`);
  }
}

// table(5, 10);
// table(1, 10);
// table(4, 8);
// table(4, 2);

// function to print the multiplication table of a given number using while loop
function table1(num1, num2) {
  let i = 1;
  while (i <= num2) {
    console.log(`${num1} * ${i} = ${i * num1}`);
    i++;
  }
}
table1(5, 10);
