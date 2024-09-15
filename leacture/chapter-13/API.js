const url =  "https://cat-fact.herokuapp.com";

let getData = async()=>{
    const responce = await fetch(url);
    console.log(responce);
}

let arr = [1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});