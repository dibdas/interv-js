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