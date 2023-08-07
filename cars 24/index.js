// function cars() {
//   console.log(a, b, c);
//   var a = 8;
//   const b = 8; // hoisted at temporal deadzone
//   let c = 6; // hoisted at temporal deadzone
// }
// cars();

// var obj = {
//   name: "piyush",
//   display: function () {
//     console.log(this.name);
//   },
// };

// var obj1 = {
//   name: "ABC",
// };
// // obj.display();// piysuh
// obj.display.call(obj1); // ABC

// using display as arrow function

var obj = {
  name: "piyush",
  display: () => {
    console.log(this); // window object as arrow function is being used
    console.log(this.name); // empty as there is no name variable in the window object
  },
};

var obj1 = {
  name: "ABC",
};
obj.display(); // giving the window object
// obj.display.call(obj1); // ABC

console.log("a");
setTimeout(() => console.log("settimout"), 0);
Promise.resolve(() => console.log("res")).then((res, rej) => res());
console.log("b");

// a
// b
// res
// settimepout

// infinite currying
// infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(8)(3)(7)(6)());

// implement tye code
const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this; // the whole object is returned so that more functions can be accessed
  },
  multiply(b) {
    this.total = this.total * b;
    return this;
  },
  substract(c) {
    this.total = this.total - c;
    return this;
  },
};

const result = calc.add(4).multiply(7).substract(2);
console.log(result.total);
