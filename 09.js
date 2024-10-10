// Create an object representing a car with properties like make, model, and year. Add a method to the car object to start the engine

let car = {
  make: "TATA",
  model: "Nano",
  year: 2012,
};
// Add a method to the car object to start the engine
car.startEngine = function () {
  console.log("Engine Started");
};

// console.log(car)
car.startEngine();
