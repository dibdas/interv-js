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

// adding show function to the Array protoptype
Array.prototype.show = function () {
  return this;
};
const cities = ["kolkata"];
console.log(cities.show());

// adding arrayToObjectConverter function to the Array protoptype
Array.prototype.convertToObject = function () {
  let obj = {};
  this.forEach((element) => {
    obj[element] = element;
  });
  return obj;
};
console.log(cities.convertToObject());

//Myprototype is the constructor
// making th protopty
function MyPrototype(name, roll) {
  this.name = name;
  this.roll = roll;
}

// adding object to the prototype
MyPrototype.prototype = obj;

const myProto = new MyPrototype("priyanka", 8);
console.log(myProto.getName());
console.log(myProto.getRoll());
