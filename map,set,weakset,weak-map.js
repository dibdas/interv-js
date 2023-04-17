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

// map
let myMap = new Map([
  ["a1", "ajay"],
  ["a2", "amit"],
  ["a3", "vikas"],
]);
console.log(myMap);
myMap.set("a2", "ajay");
myMap.set("a4", "vikas");
myMap.set("a3", "vikrant");
console.log(myMap.get("a4"));
console.log(myMap);
console.log(myMap.get("a2"));
myMap.delete("a2");
console.log(myMap);
for (let [key, value] of myMap) {
  console.log(`key ${key} value ${value}`);
}
myMap.forEach((key, value) => {
  console.log(`key ${key} value ${value}`);
});

// weakSet
// 1. add(value): Adds a new value to the set.
// 2. delete(value): Removes a value from the set.
// 3. has(value): Returns true if the set contains the given value, otherwise false.
// 4. size: Returns the number of values in the set.
// 5. Weak references: Like WeakMap, the values in a WeakSet are also weakly referenced and do
// not prevent garbage collection of the value objects.
// 6. no iteration

let ws = new WeakSet();
console.log(ws);
let ob5 = { name: "ajay" };
let ob6 = { name: "ajay" };
ws.add(ob5);
ws.add(ob6);
console.log(ws.has(ob5), ws.has(ob6));

// Weak Map
// 1. set(key, value): Sets the value for the given key in the map.
// 2. get(key): Returns the value associated with the given key in the map, or undefined if the key
//   does not exist.
// 3. delete(key): Removes the entry for the given key from the map.
// 4. has(key): Returns true if the map contains the given key, otherwise false.
// 5. Weak references: The keys in a WeakMap are weakly referenced, which means that they do not
//  prevent garbage collection of the key objects. If the key object is no longer referenced from
//  anywhere else in the program, it will be eligible for garbage collection, and the corresponding
//  entry in the WeakMap will be removed automatically.

let wm = new WeakMap();
let ob4 = { name: "amit" };
let ob7 = {};
wm.set(ob4, "private");
wm.set(ob7, "private data ");
console.log(wm);
console.log(wm.has(ob4));
