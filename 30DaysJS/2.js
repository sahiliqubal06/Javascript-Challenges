// function to calculate area of rectangele

function AreaOfRect(l, w) {
    if(l<0 || w<0) {
        throw new Error("Length and width cannot be negative")
    }
  const Area = l * w;
  console.log(Area);
}

AreaOfRect(3, 5);
AreaOfRect(-3, 5);
AreaOfRect(3.5, 5);
