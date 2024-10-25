// Destructure an object to get its properties.

const person ={
    fName: 'John',
    lName: 'Doe',
    age:22,
    occupation: 'Software Engineer',
    city:"Birgunj"
}

console.log(person);

const {fName,lName,...city}=person;
console.log(fName);
console.log(lName);
console.log(city);