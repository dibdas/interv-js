// function Addition(a, b, c) {
//     return a + b + c
// }

// let res = Addition(3, 5, 7)
// console.log(add);

function Addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let res = Addition(3);
let data1 = res(6);
let data2 = data1(5);
console.log(res);
// ƒ (b) {
//     return function(c) {
//         return a + b + c

//     }
// }
console.log(data1);
// ƒ (c) {
//     return a + b + c

// }
console.log(data2); // 14
let res1 = Addition(2)(6)(5);
console.log(res1);

// in practical scenario

userObj = {
  name: "anuj",
  age: "67",
};

function userInfo(obj) {
  return function (userinfo) {
    return function (info) {
      return obj[userinfo], obj[info];
    };
  };
}
let res6 = userInfo(userObj);
console.log(res6("name")("age"));

// infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(8)(3)(7)(6)());
