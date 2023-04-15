function addNumbers(a, b, c, ...others) {
    console.log(others);
    return a + b + c;

}
console.log(addNumbers(2, 6, 9, 5, 7, 1))

//spread
let names = ["amity", "Tanisha", "lotta"]

function getNames(names1, names2, names3) {
    console.log(names1, names2, names3);

}
getNames(...names)

// in case of objects
let students = {
    name: "ajay",
    age: "67",
    hobbies: ["cricket", "singing", "swimming"]
}

// const age = student.age
// const { name, age } = students
// console.log(name, age);
const {...rest } = students
console.log(rest);