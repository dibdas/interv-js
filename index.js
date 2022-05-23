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
    console.log(xyz)
}
a()
g()
xyz() // Error:Uncaught ReferenceError: xyz is not defined 
    //xyz is not created in global scope but created as a local variable


// parametrs and arguments 
function abc(params1, params2) {
    console.log("prams")

}
// params1, params2 are known as parameters.. parameters are locals .. they are access locally
// parameters are those which accept the values 
// 1 & 5 are known as arguments 
// arguments are those through  which value are being passed
abc(1, 5)