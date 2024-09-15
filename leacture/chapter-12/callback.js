//Callback function

function hello() {
  console.log("Hello!");
};

let get = () => hello();
get(hello);

//callback function chaining.

function getData(id, nextGetData) {
  console.log(`Featching Data ${id}....`);
  setTimeout(() => {
    console.log("Data", id);
    if (nextGetData) {
      nextGetData();
    }
  }, 3000);
};
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5);
      });
    });
  });
});
