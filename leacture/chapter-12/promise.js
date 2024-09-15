//promise

let promise = new Promise((resolve, reject) => {
  console.log("successfully");
  // resolve('success');
  reject("Technical error");
});

promise.then(() => {
  console.log("hello");
});
promise.catch(() => {
  console.log("error");
});

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 8000);
});

//promise chaining

function getData(id, nextGetData) {
  return new Promise((resolve, reject) => {
    console.log(`Featching Data ${id}....`);
    setTimeout(() => {
      console.log("Data", id);
      resolve("success");
    }, 5000);
  });
}

getData(1).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
    getData(3).then(() => {
      console.log(res);
    });
  });
});

getData(1).then((res) => {
  return getData(2).then((res) => {
    return getData(3).then((res) => {
      console.log(res);
    });
  });
});
