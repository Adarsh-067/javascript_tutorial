let student = {
    Name: "Mohit raja",
    Percentage: "85.9%",
    Age: "xyz",
  };
  // console.log(student);

  let Employes = {
    Employe_Department_Name: "Development",
    calTax: function () {
      console.log("Tax Rate is 15%");
    },
  };

  let emp1 = {
    Emp_Name: "Rohit",
    salary: 50000,
  };
  let emp2 = {
    Emp_Name: "mohit",
    salary: 50000,
  };
  let emp3 = {
    Emp_Name: "prohit",
    salary: 50000,
  };
  let emp4 = {
    Emp_Name: "srohit",
    salary: 50000,
    calTax() {
      console.log("Tax Rate is 20%");
    },
  };
  emp1.__Proto__ = Employes;
  emp2.__Proto__ = Employes;
  emp3.__Proto__ = Employes;
  emp4.__Proto__ = Employes;
  // console.log(emp1);

  //-------------------------------Class in javascript------------------------------------

  class ToyotaCar {
    start() {
      console.log("star");
    }

    stop() {
      console.log("stop");
    }

    setBrand(brand) {
      this.brand = brand;
    }
  }

  let fortuner = new ToyotaCar();
  fortuner.setBrand("fortuner");
  let tesla = new ToyotaCar();
  tesla.setBrand("tesla");

  //--------------------------------------constructor---------------------------------------------

  class ToyotaCars {
    constructor(brand, mileage) {
      console.log("creating new object");
      this.brand = brand;
      this.mileage = mileage;
    }
    start() {
      console.log("star");
    }

    stop() {
      console.log("stop");
    }
  }

  let lexus = new ToyotaCars("lexus", 12);

  //------------------------------------------Inheritance-----------------------------------------

  class class1 {
    hello() {
      console.log("Hello Welcome To My World");
    }
  }

  class class2 extends class1 {}
  let obj = new class2();
  console.log(obj);

  class people {
    constructor(name) {
      this.name = name;
    }

    eat() {
      console.log("Eat");
    }

    sleep() {
      console.log("sleep");
    }
  }

  class Enginner extends people {
    constructor(name){
        super(name);
  }
    work() {
      console.log("solve the problem");
    }
  }
  let monty = new Enginner('adarsh');
  console.log(monty);