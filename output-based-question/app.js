const array = [1, 2, 3];
let result = 0;
for (const value in array) {
  console.log(result);
  result += +value;
}
console.log(result);

try {
    (() => {
var a = 2
console.log(a)
let a = 3
console.log(a)
}

} catch (error) {
    console.log("oop")
}


let v =[56,67,21,78,(1,2,3),(4,5,6)];
let[a,b,...c]=v
console.log(c);

{
    let a = 20;
    {
    const a = 19;
    {
    console.log(a) //19
    }
    }
    }



    const a =[1,2,3,4,5]
console.log(a.filter((i) =>i%2==0).map((i)=>i+1));[3, 5]


let a=20;
{
let a =1;
console.log(a)
}
console.log(a)
// Uncaught SyntaxError: Identifier 'a' has already been 

var a=20;
{
let a =1;
console.log(a) //1
}
console.log(a) //20


{var a=20}
{
let a =1;
console.log(a) //1
}
console.log(a) //1

let a=20;
{
let a =1;
console.log(a)//1
}
console.log(a) //20


{
    let a =1;
    console.log(a)
    }
    console.log(a) // Uncaught ReferenceError: a is not defined

a()
const a = () => {
console.log("a")
}
// VM49:1 Uncaught ReferenceError: a is not defined