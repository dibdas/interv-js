"use strict";

// set
// It contains unique values
// it has object constructor
let myArray = [1, 2, 2, 3, 3, 4, 8, 8, 5, 5, 6];
let obj = new Set(myArray);
obj.add(10);
obj.add(8);
obj.delete(5);
console.log(obj);

let obj1 = { name: "ajay" };
obj.add(obj1);
console.log(obj1);
console.log(obj);
console.log(obj.has(10));
for (let object of obj) {
  console.log(object);
}
obj.forEach((element) => console.log(element));
obj.clear();
console.log(obj);
