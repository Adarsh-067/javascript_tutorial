//Async Await

function getData(id, nextGetData) {
    return new Promise((resolve, reject) => {
      console.log(`Featching Data ${id}....`);
      setTimeout(() => {
        console.log("Data", id);
        resolve("success");
      }, 2000);
    });
  };
  

  async function getAllData() {
      await getData(1);
      await getData(2);
      await getData(3);
      await getData(4);
  };