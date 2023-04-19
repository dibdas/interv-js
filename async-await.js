const datas = [
  {
    name: "amit",
    profession: "engineer1",
  },
  {
    name: "ajay",
    profession: "engineer2",
  },
];

// .. output was getting delayed without using callback

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newdata) {
//   setTimeout(() => {
//     datas.push(newdata);
//   }, 3000);
// }
// createData({ name: "vivek", profession: "engineer3" });
// getData();

// using callback

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newdata, callback) {
//   setTimeout(() => {
//     datas.push(newdata);
//     callback();
//   }, 3000);
// }
// createData({ name: "vivek", profession: "engineer3" }, getData);

//  using promises
function getData() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 4000);
}

function createData(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("something is wrong");
      }
    }, 3000);
  });
}
// as soon promise gets resolve then function will be called i.e getData will be called
createData({ name: "vivek", profession: "engineer3" })
  .then(getData)
  .catch((err) => console.log(err));
