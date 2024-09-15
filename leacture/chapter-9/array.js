let firstArray = [1, 2, 3, 4, 5, 6];
console.log(firstArray);
console.log(firstArray[3]);
console.log(typeof firstArray);
//Array is a special type of object.

let fruits = ["Apple", "orange", "graves", "lichi", "mango"];
console.log(fruits);
console.log(fruits[4]);
console.log(typeof fruits);

//Array methods

let fruits1 = ["Apple", "orange", "graves", "lichi", "mango"];
console.log(Array.isArray(fruits1));
console.log(Array.isArray(fruits1));
console.log(fruits1.length);
fruits1.push("banana");
console.log(fruits1);
fruits1.pop();
console.log(fruits1);
fruits1.unshift("watermelon");
console.log(fruits1);
fruits1.shift();
console.log(fruits1);
fruits1.splice(2, 4);
console.log(fruits1);
// fruits1.slice(3,4);
// console.log(fruits1);

console.log(fruits1.toString());

let num = [6, 5, 4, 3, 2, 1];
console.log(num);
num.sort();
console.log(num);

let num1 = [];
for (let i = 0; i <= 6; i++) {
  const element = num[i];
  console.log(element);
};

