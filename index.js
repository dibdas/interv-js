//console.log(a)
// function satement aka function declaration
function a() {
    console.log("a is called ")
}




// function expression 
// var b = function() {
//console.log("b is called")
// }
// anonymous function 
// A function that has no identity 
//function () {

//}


// named function expression
// giving a name to anonymous function becomes anonymous function
// giving name to a function and putting that to an expression
var g = function xyz() {
    console.log("called")
}
a()
g()
xyz() // Error:Uncaught ReferenceError: xyz is not defined xyz is not created in global scope but created as a local variable