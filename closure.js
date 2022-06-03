function x(){
let a =7
    function y(){
        console.log(a)
    }
    y()
}
x() //7

function x(){
    let a =7
        function y(){
            console.log(a)
        }
        return y // the whole closure is returned 
    }
var z = x()
console.log(z) //output:- ƒ y(){ // the whole closue is coming
    //console.log(a)
//}
z()


// same as the previous one different syntax
function x(){
    let a =7
        return function y(){ // same as before different syntax 
            console.log(a)
        }
        return y // the whole closure is returned 
    }
var z = x()
console.log(z) //output:- ƒ y(){ // the whole closue is coming
    //console.log(a)
//}
z()