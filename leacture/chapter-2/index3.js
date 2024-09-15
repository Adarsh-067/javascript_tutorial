// for loop
for (let i = 0; i < 5; i++) {
  //   console.log(i);
  console.log("Hello!");
}
for (let index = 0; index < 5; index++) {
  console.log("finalValue"[index]);
}

for (let i = 0; i < 10; i++) {
  // Print odd Number from 0 to 10 using for loop.
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
let i = 0; // while loop
while (i < 5) {
  console.log(i);
  i++;
}
let index = 0; // Do while loop

do {
  console.log("hello");
  index++;
} while (index < 5);

let obje = "mohit"; // for of loop.
for (const iterator of obje) {
  console.log(iterator);
}
let obj = {
  // for in loop.
  Name: "mohit chai",
  Roll: "101",
};
for (const value in obj) {
  const element = obj[value];
  console.log(element);
  // console.log(key);
}
