const user = {
  name: "roadside coder",
  age: 34,
  // adding a property with spaces i between
  "like this": true,
};

console.log(user);
user.name = "piyush agarwal";
console.log(user.age);
// looping through the objects
for (let key in user) {
  console.log(user[key]);
}

// accessing the property where space is in between
console.log(user["like this"]);
delete user["like this"];
delete user.age;
console.log(user);

const func = (function (a) {
  // delete keyword is used to delete the properties from object
  // delete is invalid for local variable
  delete a;
  return a;
})(5);
console.log(func); // 5

// adding the properties dynamically to objects
const property = "name";
const name = "piyush";
const surname = "surname";
const value = "agarwal";
const userObj = {
  [property]: name,
  [surname]: value,
};
console.log(userObj); // {name: 'piyush', surname: 'agarwal'}
console.log(userObj.name); // piyush
console.log(userObj.surname); // agarwal

const obj2 = { a: "one", b: "two", a: "three" };
console.log(obj2); // {a: 'three', b: 'two'}

let nums = { a: 100, b: 200, title: "my name" };
function multiply(obj) {
  for (let key in obj) {
    typeof obj[key] === "number" ? (obj[key] *= 2) : obj[key];
  }
}
multiply(nums);
console.log(nums);

const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
// a[b] it tries to convert { key: "b" } into string thats why a["[object Object]"]
a["[object Object]"] = 123;
a[c] = 678;
a["[object object]"] = 678;
console.log(a); // {[object Object]: 678}
console.log(a[b]); //678

const userObj1 = {
  name: "piyush",
  age: 87,
};

const strObj = JSON.stringify(userObj1);
// usage of string is to save the item in local storage
console.log(strObj);
console.log(JSON.parse(strObj));
localStorage.setItem("test", strObj);
console.log(JSON.parse(localStorage.getItem("test"))); // turning into an object and getting from thelocal storage

console.log([..."lijndia"]); // ['l', 'i', 'j', 'n', 'd', 'i', 'a']

const user1 = { name: "lyndia", age: 87 };
const admin = { admin: true, ...user1 };
console.log(admin);

const settings = {
  username: "piyus",
  level: 9,
  health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]); // {"level":9,"health":90}
console.log(data); //{"level":9,"health":90}
console.log(JSON.stringify(settings, ["level", "health", "username"])); // {"level":9,"health":90,"username":"piyus"}

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
  //   in arrow function this always poinst or refer to the window object
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); //NaN

let user2 = {
  name: "piyush",
  age: 76,
  fullname: {
    first: "anand",
    last: "das",
  },
};
const {
  name: name1,
  fullname: { first, last },
} = user2;
console.log(name1);
console.log(first, last);

function getItems(first, second, ...third) {
  // .. third is the rest operator , which should always be at the lastin the parameter list
  return [...first, ...third, second];
  //   ...third is spread operator and can be used in between
}
console.log(getItems(["banana", "apple"], "peer", "orange", "pineapple"));

let d = { greeting: "hey" };
let e;
e = d;
d.greeting = "hello";
console.log(d); // hello
console.log(e); // hello
e.greeting = "banter";
console.log(d); // banter
console.log(e); // banter
console.log(d === e); // true

// objects are equal only when they refer particular are in the memory
console.log({ a: 2 } == { a: 2 }); // false
// { a: 2 } { a: 2 } both of them are different objects, both of have different space in the memeory
console.log({ b: 3 } === { b: 3 }); // false
// { b: 3 } === { b: 3 }both of them are different objects, both of have different space in the memeory
