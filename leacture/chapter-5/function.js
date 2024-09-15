let num = 3;
function evenNumber() {
  if (num % 2 == 0) {
    console.log(`${num} is a even number`);
  } else {
    console.log(`${num} is a odd number`);
  }
}
evenNumber(); //invoking / calling function
num = 4;
evenNumber();
num = 9;
evenNumber();
num = 10;
evenNumber();

//Return function

function generateRandomNumber() {
  let random = Math.random();
  return random * 3; //direct return
  // return randomMove;   //last return
}
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());
console.log(generateRandomNumber());

function generateOTP(length) {   //parameters function
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp = otp + Math.floor(Math.random() * 10).toString();
  }
  console.log(`OTP is ${otp}`);
}
generateOTP(4);

function sum(a, b) {
  //function parameter
  return a + b;
}

console.log(sum(5, 5)); //argument function
console.log(sum(5, 50));
console.log(sum(5, 6));
console.log(sum(5, 20));
