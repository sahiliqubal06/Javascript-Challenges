// Write a regular expression to validate an Email Address.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(email){
    return emailRegex.test(email)

}

const email="sahil06@gmail.com";
console.log(validate(email));
