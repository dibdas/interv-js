// let name1 = {
//   firstname: "akshay",
//   lastname: "mionu",
//   printFullName: function () {
//     console.log(this.firstname + " " + this.lastname);
//   },
// };
// name.printFullName();

let name1 = {
  firstname: "akshay",
  lastname: "mionu",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};

let name2 = {
  firstname: "amit",
  lastname: "kanoj",
};

// function borrowing
// name.printFullName.call(name2);

// call is used to invoke the function directly by passing the reference which points to the this variable inside
// the method

// printFullName.call(name2, "mumbai", "maharashtra");
// printFullName.call(name1, "kolkata", "west bengal");

// same as that of the call , take second argument as the array list
// printFullName.apply(name2, ["mumbai", "maharashtra"]);

// printFullName.apply(name1, ["kolkata", "west bengal"]);

// bind the copy of the exact same method that  can be invoked later on

let newPrint = printFullName.bind(name2, "mumbai", "maharashtra");
let newPrint2 = printFullName.bind(name1, "kolkata", "west bengal");
newPrint();
newPrint2();
