// Create a prototype for a product object with properties like name,price and quantity.Add a method to the product protoype to calculate total value

function Product(name, quantity, price) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}
Product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};
const product1 = new Product("XYZ", 10, 5);
const totalValue1 = product1.calculateTotalValue();

const product2 = new Product("ABC", 6, 10);
const totalValue2 = product2.calculateTotalValue();

console.log(`Total value of ${product1.name}: ${totalValue1}`);
console.log(`Total value of ${product2.name}: ${totalValue2}`);

console.log(Product.prototype);
console.log(product1);
