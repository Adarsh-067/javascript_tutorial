let btn = document.querySelector('#btn');
let body = document.getElementsByTagName("body");
btn.onclick=()=>{
    console.log('btn was clicked');
}

let div = document.querySelector("#box");
let button = document.querySelector(".btn");
button.onclick = (evt) => {
   console.log(evt);
   console.log(evt.type); 
  console.log(evt.target);
}

let div2 = document.querySelector(".div2");
let btnn = document.querySelector(".button");
btnn.addEventListener("click",()=>{
   console.log("welcome to my channel!");
});


let div3 = document.querySelector(".div3");
let bttn = document.querySelector(".butt");
bttn.addEventListener("dblclick",()=>{
div3.Style.color = "yellow"
});