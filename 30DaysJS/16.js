 // Simple Interest (SI) calculation function

function SI(P, T, R) {
  return (P * T * R) / 100;
}

console.log("SI:", SI(1000, 5, 1));

// if total amount then

function totalAmount(P, T, R) {
  const SI = (P * T * R) / 100;
  return {
    I: SI,
    A: P + SI,
  };
}

console.log(totalAmount(1000, 5, 1));
