alert("hello");
console.log(window);
window.console.log("hello");
window.alert("hello ");

// ------------------------------------DOM manipulation---------------------------

console.dir(window.document);
console.dir(document.body);
console.log(document.body);

let button = document.getElementsByClassName("btn");
console.dir(button);
let para1 = document.getElementsByTagName("p");
console.dir(para1);
let heading = document.getElementById("heading");
console.dir(heading);

console.log(document.querySelector(".btn"));

// ----------------------------------------Element properties---------------------------------------

let div1 = document.querySelector("div");
console.dir(div1);
// div.innerText = 'hello'
// div.innerHTML = "div"
console.log(heading.textContent);
console.log(list.innerText);
console.log(list.innerHTML);

// -------------------------------------------Atribute------------------------------------------------------

let div = document.querySelector("#box");
console.log(div.getAttribute("Id"));
console.log(div.getAttribute("style"));

let para = document.querySelector(".para");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class", "newpara"));

let div2 = document.querySelector("#box2");
div2.style.backgroundColor = "blue";
div2.style.color = "white";
div2.style.border = "5px dotted black";
div2.innerText = "Hello!";

// ------------------------------------------------Insert Element--------------------------------------------

let newDiv = document.createElement("div");
// document.querySelector("body").append(newDiv);
document.querySelector("body").prepend(newDiv);
// document.querySelector("body").after(newDiv);
// document.querySelector("body").before(newDiv);

newDiv.innerText = "Hi, i am new!";
newDiv.innerHTML = "<i>Hi, i am new italic!</i>";

newDiv.setAttribute("class", "nwdiv");

let btn = document.createElement("button");
btn.innerText = "click me!";
console.dir(btn);

newDiv.append(btn);
btn.setAttribute("Id", "btnn");

let h1 = document.createElement("h1");
h1.innerHTML = "<i>He, i am new heading!</i>";
console.log(h1);

newDiv.prepend(h1);

// ---------------------------------------------remove element--------------------------------------------

h1.remove();
btn.remove();
newDiv.remove();
