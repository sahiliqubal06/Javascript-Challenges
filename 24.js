// Implement a private variable using closures.

function createCounter() {
  // Private Variable
  let count = 0;

//   Inner Function (closure)
  function increament() {
    count++;
    console.log("Count:", count);
  }
  return {
    increamentCounter: function () {
      increament();
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increamentCounter();
counter.increamentCounter();
counter.increamentCounter();
counter.increamentCounter();
console.log(counter.getCount());
