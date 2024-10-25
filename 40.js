// Create a class representing a Book with properties like title,author, and year.
// Add a method to the Book class to get the book's age(Current year-year of publication).

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getAge(){
    let currentYear = new Date().getFullYear();
    return currentYear-this.year;
  }
}

const book1 = new Book("The Journey of Being Human", "OSHO", 2001);
console.log(book1.title); 
console.log(book1.author); 
console.log(book1.year); 
console.log(book1.getAge());

