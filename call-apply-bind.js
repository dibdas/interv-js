let userDetails = {
  name: "ajay",
  age: "98",
  designation: "engineer",
  // details: function (params) {
  //   console.log(this);
  //   console.log(this.age);
  // },
};

// userDetails.details();

let userDetails1 = {
  name: "amit",
  age: "68",
  designation: "engineer 2",
};
let details = function (country, state) {
  console.log(this, country, state);
  console.log(this.age, country, state);
};
// userDetails.details.call(userDetails1);
// details.call(userDetails1, "india", "west bengal");
// details.call(userDetails, "usa", "ny");

details.call(userDetails1, ["india", "west bengal", "cycle"]);
details.call(userDetails, ["usa", "ny", "bike"]);

// apply passing the list of arguments inside an array
details.apply(userDetails1, ["india", "west bengal", "cycle"]);
details.apply(userDetails, ["usa", "ny", "bike"]);

// bind
// call that function pass the objects and additional arguments  and invoke it later
let newFun = details.bind(userDetails, "delhi", "india");
newFun();
