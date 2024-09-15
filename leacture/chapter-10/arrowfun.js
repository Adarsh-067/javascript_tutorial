//---------------------------------------- function --------------------------------------//

function getTable(num) {  //Normal method of function
  for (let i = 1; i <= 10; i++) {
    table = num * i;
    console.log(table);
  }
}
getTable(2);

//---------------------------------Anonymous function-------------------------------------//

let getTable1 = (num) => {  //Arrow function this method using multiple line of code.
  for (let i = 1; i <= 10; i++) {
    table = num * i;
    console.log(table);
  }
};
getTable1(3);

//Arrow function without curly braces and return.This method using single line of code.

let sum = (num1, num2) => num1 + num2;

console.log(`sum = ${sum(10, 10)}`);

//Arrow function without function bracket.

let print = (arg) => console.log(`Hello ${arg}` + "!"); //This method using single argument of function.
print("Adarsh");

let print1 = () => console.log("Say Hi!");   //Arrow function using without any argument.
print1();

//--------------------------------------- function as a argument to another function-----------------------------//

let sum3 = (first, second, third) => {    //sum of three digit
  let total = sum(first, second) + third;
  return total;
};
console.log(sum3(5, 5, 2));
