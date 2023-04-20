let multiply = function (x) {
  return function (y) {
    console.log(`x ${x} y ${y}`);
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(3);
multiplyByTwo(2);
let multiplyByFour = multiply(7);
multiplyByFour(4);
