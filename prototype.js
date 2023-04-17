const obj = {
  name: "Ajay Singh",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};
console.log(obj);

const obj1 = {
  roll: 1,
  __proto__: obj,
  name: "vivek",
};

// if name:"vivek" is not there inside obj1

console.log(obj1.getName()); // vivek if vivek is not there in obj1 then "Ajay Singh"
console.log(obj1.name); // vivek vivek if vivek is not there on obj1 then "Ajay Singh"
console.log(obj1.getRoll());
console.log(obj1.roll);

console.log(obj1.class); // undefined
// console.log(obj3);

const obj3 = {
  class: "MCA",
  __proto__: obj1,
};
console.log(obj3);
console.log(obj3.getRoll());
console.log(obj3.roll);
console.log(obj3.getName()); // vivek if vivek is not there in obj1 then its "Ajay Singh"

const array = ["ajay singh"];
console.log(array);

const obj5 = new Object();
console.log(obj5);

const array3 = new Array();
console.log(array3);
