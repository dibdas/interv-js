/*
  let user = {}
  user.name="john"
  user.surname = "smith"
  user.name ="Pete"
 delete user.name
  console.log(user.surname)
  user.age = 25
  console.log(user.age)

  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  for(code in codes){
      console.log(code)
  }

  const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
   }
  }
  console.log(myObject["obnoxious property"] )
*/
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

function printName(player) {
  console.log(player.name);
}

console.log(playerOneName);
console.log(playerTwoName);

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// const player = new Player('steve', 'X')
// console.log(player.name)

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayname = function () {
    console.log(name);
  };
  this.symbol = function () {
    console.log(marker);
  };
}

const player = new Player("adam", "O");
const player1 = new Player("aloo", "X");
player.sayname();
player.symbol();
player1.sayname();
player1.symbol();

function Book(title, author, pages, read) {
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.author = author;
  this.info = function () {
    console.log(title + " " + author + " " + pages + " " + read);
  };
}

const book = new Book("jjjj", "j.k", "13", "not yet");
book.info();

//In JavaScript, objects have a special hidden property [[Prototype]]
//(as named in the specification), that is either null or references another object.
// That object is called “a prototype”:

// When we read a property from object, and it’s missing, JavaScript automatically
// takes it from the prototype. In programming, this is called “prototypal inheritance”.
// And soon we’ll study many examples of such inheritance, as well as cooler
// language features built upon it.

// The property [[Prototype]] is internal and hidden, but there are many ways to set it.

// One of them is to use the special name __proto__, like this:
/*
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
*/

// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it
// from animal.
/*
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)
*/
// we can find both properties in rabbit now:
// alert( rabbit.eats ); // true (**)
// alert( rabbit.jumps ); // true
// console.log(rabbit.eats)
// console.log(rabbit.jumps)

// Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically
//inherits from animal".

// So if animal has a lot of useful properties and methods, then they become automatically
// available in rabbit. Such properties are called “inherited”.

// If we have a method in animal, it can be called on rabbit:

/*
let animal = {
  eats: true,
  walk() {
    // alert("Animal walk");
    console.log("animal walk")
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk


let animal = {
  eats: true,
  walk() {
    // alert("Animal walk");
    console.log("Animal walk");
  }
};


let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
// alert(longEar.jumps); // true (from rabbit)
console.log(longEar.jumps)
*/

// Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit,
// and then in animal.

// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__
// in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

// __proto__ is a historical getter/setter for [[Prototype]]
// It’s a common mistake of novice developers not to know the difference between these two.

// Please note that __proto__ is not the same as the internal [[Prototype]] property.
// It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters,
// for now let’s just keep it in mind, as we build our understanding of JavaScript language.

// The __proto__ property is a bit outdated. It exists for historical reasons,
//modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf
// functions instead that get/set the prototype. We’ll also cover these functions later.

// By the specification, __proto__ must only be supported by browsers. In fact though, all
//environments including server-side support __proto__, so we’re quite safe using it.

// As the __proto__ notation is a bit more intuitively obvious, we use it in the examples.

// Writing doesn’t use prototype
// The prototype is only used for reading properties.

// Write/delete operations work directly with the object.

// In the example below, we assign its own walk method to rabbit:

/*
let animal = {
  eats: true,
  walk() {
    ///this method won't be used by rabbit 
   
  }
};

let rabbit = {
  __proto__: animal
};

 rabbit.walk = function() {
  // alert("Rabbit! Bounce-bounce!");
   console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
*/

// If we had other objects, like bird, snake, etc., inheriting from animal,
// they would also gain access to methods of animal. But this in each method call would
// be the corresponding object, evaluated at the call-time (before dot), not animal.
// So when we write data into this, it is stored into these objects.

// As a result, methods are shared, but the object state is not.
/*
let animal = {
  eats: true
};

let rabbit = {
  __proto__: animal,
  jumps: true,
  //__proto__: animal
};

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) 
//alert(prop); // jumps, then eats
console.log(prop)
*/

// If that’s not what we want, and we’d like to exclude inherited properties,
// there’s a built-in method obj.hasOwnProperty(key): it returns true
// if obj has its own (not inherited) property named key.

// So we can filter out inherited properties (or do something else with them):
/*
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    // alert(`Our: ${prop}`); // Our: jumps
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
    
  }
}
*/

// Here we have the following inheritance chain: rabbit inherits from animal,
// that inherits from Object.prototype (because animal is a literal object {...},
// so it’s by default), and then null above it:

// Almost all other key/value-getting methods ignore inherited properties
// Almost all other key/value-getting methods, such as Object.keys,
// Object.values and so on ignore inherited properties.

//They only operate on the object itself. Properties from the prototype are not taken into account.
// Summary

// In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object
//or null.
// We can use obj.__proto__ to access it (a historical getter/setter, there are other ways,
// to be covered soon).
// The object referenced by [[Prototype]] is called a “prototype”.
// If we want to read a property of obj or call a method, and it doesn’t exist,
// then JavaScript tries to find it in the prototype.
// Write/delete operations act directly on the object, they don’t use the prototype
// (assuming it’s a data property, not a setter).
// If we call obj.method(), and the method is taken from the prototype, this still references obj.
// So methods always work with the current object even if they are inherited.
// The for..in loop iterates over both its own and its inherited properties.
// All other key/value-getting methods only operate on the object itself.

/*
let animal = {
  jumps: null
};
let rabbit = {
  //__proto__: animal,
  jumps: true,
  __proto__: animal,
  
};

// alert( rabbit.jumps ); // ? (1)
console.log(rabbit.jumps)

delete rabbit.jumps;

//alert( rabbit.jumps ); // ? (2)
console.log(rabbit.jumps)

delete animal.jumps;

//alert( rabbit.jumps ); // ? (3)
console.log(rabbit.jumps)
*/
/*
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table
};

let pockets = {
  money: 2000,
  __proto__:bed
};
console.log(pockets.pen)
console.log(bed.glasses)
*/

// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses?
// Benchmark if needed.

// In modern engines, performance-wise, there’s no difference whether we take a property
// from an object or its prototype. They remember where the property was found and reuse it
// in the next request.

// For instance, for pockets.glasses they remember where they found glasses (in head),
// and next time will search right there. They are also smart enough to update internal caches
// if something changes, so that optimization is safe.

// Where does it write?
// importance: 5
// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
/*
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};
*/
// The answer: rabbit.

//That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

// Property lookup and execution are two different things.

// The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

// rabbit.eat();
//console.log(rabbit.eat())

function dog(name, breed, color) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.brark = function () {
    return "whoof!!";
  };
}
const dog1 = new dog("daisy", "labrador", "golden");
console.log(dog1);
console.log(dog1.__proto__);
const dog2 = new dog("allo", "glodie", "black");
console.log(dog2);

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

// alert(admin.fullName); // John Smith (*)
console.log(admin.fullName);

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

// alert(admin.fullName); // Alice Cooper, state of admin modified
console.log(admin.fullName);
console.log(user.fullName);
// alert(user.fullName); // John Smith, state of user protected
console.log(user.fullName);
console.log(admin.fullName);

// Here in the line (*) the property admin.fullName has a getter in the prototype user, so it is called.
// And in the line (**) the property has a setter in the prototype, so it is called.

// The value of “this”

// An interesting question may arise in the example above: what’s the value of this inside set fullName(value)? Where are the properties this.name and this.surname written: into user or admin?

// The answer is simple: this is not affected by prototypes at all.

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

// So, the setter call admin.fullName= uses admin as this, not user.

// That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.

// For instance, here animal represents a “method storage”, and rabbit makes use of it.

// The call rabbit.sleep() sets this.isSleeping on the rabbit object:

let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();
animal.sleep();

// alert(rabbit.isSleeping); // true
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping);
console.log(rabbit.sleep());
console.log(animal.sleep());
// alert(animal.isSleeping);

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.goToProm = function () {
  // eh.. go to prom?
};

// Recommended Method for Prototypal Inheritance
// So far you have seen several ways of making an object inherit the prototype from another object.
// At this point in history, the recommended way of setting the prototype of
// an object is Object.create (here is the documentation for that method).
// Object.create very simply returns a new object with the specified prototype and any additional
// properties you want to add. For our purposes, you use it like so:

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}, Am I human..? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "amit";
me.isHuman = true;
person.name = "himal";

console.log(me.printIntroduction());
console.log(person.printIntroduction());
console.log(me.printIntroduction());

/*
function Student(){

}
Student.prototype.sayName = function(){
  console.log(this.name)
}
function Eightgrader(name){
  this.name = name
  this.age= 8
}
Eightgrader.prototype = Object.create(Student.prototype)
const carl = new Eightgrader("carl")
carl.sayName()


console.log(carl.age)
//You can probably figure out what’s going on here. After creating the constructor for EighthGrader,
// we set its prototype to a new object that has a copy of Student.prototype.

// A warning… this doesn’t work:
EighthGrader.prototype = Student.prototype

// because it will literally set EighthGrader’s prototype to Student.prototype 
// (i.e. not a copy), which could cause problems if you want to edit something in the future. 
// Consider one more example:
*/

function Student() {}
Student.prototype.sayName = function () {
  console.log(this.name);
};
function Eightgrader(name) {
  this.name = name;
  this.age = 8;
}
// dont do this
Eightgrader.prototype = Student.prototype;

function Ninthgrader(name) {
  this.name = name;
  this.age = 9;
}
// noooo! not again!
Ninthgrader.prototype = Student.prototype;

Ninthgrader.prototype.sayName = function () {
  console.log("HAAA HAAA");
};
const car = new Ninthgrader("carl");
car.sayName();
car;

// If we had used Object.create in this example, then we could safely edit the
// NinthGrader.prototype.sayName function without changing the function for EighthGrader as well.

//coding challenge
function subsequence(k, arr) {
  let count = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    console.log(i);

    for (let j = i; j < i + k; j++) {
      console.log(j + "j");

      sum += arr[j];
      console.log(sum + "sum");
    }

    if (sum % 2 == 0) {
      count++;
    }
  }

  return count;
}
console.log(subsequence(2, [1, -3, 0, 5, 7]));

let set = new Set();
set.add(5);
set.add("5");
set.add(5);
console.log(set.size);

console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));
console.log(Object.is(1, 1));
console.log(Object.is(1, "1"));

function SetOperations(set1, set2) {
  let OperationOnSet = new Set(set1);
  for (let i of set2) {
    OperationOnSet.delete(i);
  }
  return OperationOnSet;
}
/*
const setA = new Set(['red', 'yellow', 'green']);
const setB = new Set(['blue', 'red', 'violet']);

const result = SetOperations(set1, set2);

console.log(result);
*/

var add = {
  x: 10,
  sum: function () {
    return this.x;
  },
};

console.log(add.sum());

function hackerearth_func() {
  var hack1 = (hack2 = 100);
}

hackerearth_func();
console.log(typeof hack1 == "undefined");
console.log(typeof hack2 !== "undefined");

//this.abc = "Something";
//console.log(window.abc);
for (var hack = 0; hack < 6; hack++) {
  setTimeout(() => console.log(hack), 0);
}

let text = "hello";
console.log(text.split("").reverse().join(""));

let arr = [1, 3, -65, -9];
console.log(arr.sort());

let input = { jack: "three", jill: "ui", And: "one" };
for (let [key] of Object.entries(input)) {
  key.toUpperCase();
  // console.log(input)
}
console.log(input);
const new_arr = arr.map((object) => {
  console.log(object);
});

function findNumber(arr, k) {
  // Write your code
  let found = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k == arr[i]) {
      console.log("YES");
      break;
    } else {
      console.log("No");
      break;
    }
  }
}

findNumber([2, 3, 4, 5, 1], 5);

var js = (function (v) {
  return v * v;
})(10);
console.log(js);
