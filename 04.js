// Create a function to calculate area of a rectangle given its width and height

function areaOfRectangle(width, height) {
  return width * height;
}

let area = areaOfRectangle(13, 12);
console.log(area);

// Using arrow function

let areaOfRect = (width, height) => {
  return width * height;
};
let areaOfRec = areaOfRect(5, 10);
console.log(areaOfRec);

// Also
console.log("Area of Rectangle:" +areaOfRec);

