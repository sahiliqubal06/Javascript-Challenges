// function to find the biggest number in an array

function BiggestNum(arrOfNum) {
  let bigNum = arrOfNum[0];
  for (let i = 1; i <= arrOfNum.length; i++) {
    if (arrOfNum[i] > bigNum) {
      bigNum = arrOfNum[i];
    }
  }
  return bigNum;
}

console.log(BiggestNum([100, 2, 30, 4, 50]));


// function to find the biggest number in an array using Math.max()
function BiggestNum1(arrOfNum) {
  console.log(`Biggest number is: ${Math.max(...arrOfNum)}`);
}

BiggestNum1([100, 2, 30, 4, 50]);
