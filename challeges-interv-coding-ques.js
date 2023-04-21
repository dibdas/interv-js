function addData(data) {
  let str = data.toString();
  //   console.log(typeof str);
  console.log(typeof str.split(",")); // object
  let numberArray = str.split("").map((data) => {
    return Number(data);
  });
  console.log(numberArray);
  //   console.log(typeof numberArray);

  let addNumber = numberArray.reduce((total, num) => {
    total = total + num;
    // console.log(total);
    return total;
  }, 0);
  if (addNumber >= 10) {
    addData(addNumber);
  } else {
    console.log(addNumber);
  }
}
addData(93421);
// 5+4+3+2+1 =15
//1+5 =6
// 6

// 9+3+4+2+1 =1
