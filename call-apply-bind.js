let userDetails = {
  name: "ajay",
  age: "98",
  designation: "engineer",
  details: function (params) {
    console.log(this);
    console.log(this.age);
  },
};

userDetails.details();

let userDetails1 = {
  name: "ajay",
  age: "98",
  designation: "engineer",
  details: function (params) {
    console.log(this);
    console.log(this.age);
  },
};
