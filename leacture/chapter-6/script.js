let user = {
  name: "Adarsh chaubey",
  course: "BCA",
  age: 18,
};
console.log(user);
console.log(user.name); //key access using dot(.) operator.
console.log(user.age);
console.log(user.course);
user.name = "ansh chaubey";
console.log(user);
console.log(user["course"]); //key access using bracket operator.

delete user.age;
console.log(user);

let product = {  // method of object
  company: "Zara",
  price: 1599,
  item_name: "T-shirt",
  displayPrice: function () {
    return `price of the T-shirt is ${product.price}`;
  },
};
console.log(product.displayPrice());

// Example of object method
console.log();
typeof console;
("object");
typeof console.log;
("function");
// Math.random();
typeof Math;
("object");
typeof Math.random;
("function");

//Autoboxing

console.log("This is my first Autoboxing".length);
console.log("This is my first Autoboxing".toUpperCase());
console.log("This is my first Autoboxing".toLowerCase());
console.log("This is my first Autoboxing".replace("my", "our"));

//destructring

let product1 = {
  company: "Zara",
  price: 1599,
  item_name: "T-shirt",
};
let { price } = product;
console.log(price);
