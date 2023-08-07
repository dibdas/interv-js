var person = {
  name: "roadside coder",
  hello: function (thing, another) {
    console.log(this.name + " " + thing + " " + another);
  },
};

var alterEgo = {
  name: "piyush",
};

person.hello("none");
person.hello.call("world", alterEgo); // undefined[object][object] // wont work
person.hello.call(alterEgo, "world", "hello"); // piyush world
person.hello.apply(alterEgo, ["world"], ["hello"]); // piyush world undefined
person.hello.apply(alterEgo, ["world", "hello"]); // piyush world hello
const p1 = person.hello.bind(alterEgo);
console.log("p1");
p1("world", "hello");
console.log(typeof null);
console.log(typeof undefined);
let a;
console.log(a); // undefined
// console.log(b); // not defined
console.log(null == undefined); // true matches only the entity
console.log(null === undefined); // false matches the entity as well as the type

// map v/s foreach
const arr = [3, 5, 7, 8, 1];

// returns a modified new array and chain methods to it
const mapresult = arr
  .map((ele) => {
    return ele + 2;
  })
  .sort();

// changes the original array , cant chain any methods to it
const forEachResult = arr.forEach((ele, i) => {
  arr[i] = ele + 5;
});

console.log(mapresult, forEachResult, arr);

// flattened array
let array = [1, 5, [6, 4], [5, 6, [9, 5], 3], [10, 11, 13]];
let flattened = [].concat(...array);
console.log(flattened);
console.log(array.flat(2));
