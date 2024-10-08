// let user={
//     username:"adarsh",
//     work:"study",

//     welcomeMessage(){
//         console.log(`${this.username} welcome to javascript`);
//         console.log(this);
//     },
// }

// user.welcomeMessage();
// user.username = "Ansh"
// user.welcomeMessage();
// user.work = "frontend developer";
// user.welcomeMessage();

// function chai() {
//     username = "ansh";
//     console.log(this.username);
// }

// chai();

// let two = function(){
//     username = "ansh";
//     console.log(this.username);
// }

// // two();

// let one = () => ({namee: "adarsh"});
// var name1 = one();
// console.log(name1);


// // Immediately invoked function expressions IIFE

// (function hello() {
//     console.log("DB connected");
// })();

// ( () => { 
//     console.log("DB connected two");
// } )()


// let user= {
//     username:"mohit",
//     logincount:8,

//     greeting(){
//         console.log(`welcome back ${this.username}`);
//     },
// }

// function constr(username , logincount , islogined){
//     this.username = username;
//     this.logincount = logincount;
//     this.islogined = islogined;
// }

// const usern = constr("adarsh",2,true);
// console.log(usern);

// const obj = new constr("shatvik" , 8 , true);
// console.log(obj);


// class car {
//     constructor(carname , price) {
//         this.carname = carname;
//         this.price = price;
//     }

//     introduce(){
//         console.log(`Hello, my name is ${this.carname}`);
//     }
// }

// const obj2 = new car("swift",5000);
// console.log(obj2.carname);
// console.log(obj2.price);
// obj2.introduce();

// const obj3 = new car("thar",10000);
// console.log(obj3);



// function multipleBy5(num) {
//     return num*5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(5))
// console.log(multipleBy5.power)
// console.log(multipleBy5.prototype)

// function createUser(username,price) {
//    this.username = username;
//    this.price = price;   
// }

// createUser.prototype.increment = function(){
//     this.price++;
// }

// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.price}`);
// }

// const chai = new createUser("chai",25);
// const tea = new createUser("tea",250);

// chai.printMe();

// let name = "adrsh chaubey     " 

// String.prototype.trueLenght = function(){
//     console.log(`True length is: ${this.trim().length}`);
// }

// name.trueLenght();

// Object.prototype.hello = function(){
//     console.log("Hello, Adarsh")
// }

// name.hello();

// chai.hello();

//==========================================  inheritance  ===========================================\\

// let user = {
//     name:"chai",
//     email:"chai@google.com",
// }

// let student = {
//     work:"study",
// }

// student.__Proto__= user;
// console.log(student);


// class user {
//     constructor(name,email,password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     greeting() {
//         console.log(`Hello, ${this.name}`)
//     }
// }

// const first = new user("Ashu","ashu@google.com",1203);
// console.log(first)
// console.log(first.email)
// first.greeting();

// class employee extends user{
//     constructor(name, email, password){
//         super(name,email,password);
//         super.greeting;
//     }
// }

// const emp1 = new employee("Ankit","ankit@fb.com",1302);
// emp1.greeting();
// console.log(emp1)

// class user{
//     constructor(name,email,password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     static greeting() {
//         console.log(`Hello, motorola`)
//     }

//     static passwordd(){
//         console.log(this.password);
//     }
// }

// const first = new user("Ankit","ankit@gmail.com",1023);
// first.passwordd();
// first.greeting();

/*function yo(username) {
    this.username = username;
}

function yoyo() {
    yo.call(this,'hello');
}

console.log(yoyo());*/

// let app = {
//     id: 101,
//     model: 'Hello!'
// }

// // console.log(Object.getOwnPropertyDescriptor(app, 'id'))
// Object.defineProperty(app, 'id', {
//     writable: false,
//     enumerable: false,
//     configurable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(app, 'id'));

// app.id = 102;
// app.id = 105;

// console.log(app.id)


// class user {
//     constructor(email,password) {
//         this.email = email;
//         this.password = password;
//     }
//     get email(){
//         return this._email.toUpperCase();
//     }
//     set email(value){
//         this._email = value;
//     }

//     get password(){
//         return this._password + 'adi';
//     }
//     set password(value){
//         this._password = value;
//     }
// }

// const first = new user("bg@chai.com", 'abc');
// console.log(first.password);
// console.log(first.email);

// const sec = new user("sec@gm.com", 321);
// console.log(sec.email);
// console.log(sec.password);


// function based getter and setter//

function user(email, password) {
    this._email = email;
    this._password = password;

   Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
             this.email = value;
        }
    })

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()+'102';
        },

        set: function(value){
             this.password = value;
        }
    });
}

const shiv = new user("shiv@google.com", 'shiv');
console.log(shiv.email);
console.log(shiv.password);


const som = new user('som@fb.com', 'som');
console.log(som.email);
console.log(som.password);

