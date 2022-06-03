//Now, we've just been using constructor functions (function Dog() { ... }), which is still 
// valid JavaScript. However, ES6 actually introduced an easier syntax for constructor 
// functions and working with prototypes: classes!

// Classes are only syntactical sugar for constructor functions.
// Everything still works the same way!

// We write classes with the class keyword. A class has a constructor function, which is basically 
// the constructor function we wrote in the ES5 syntax! The properties that we want to add to the 
// prototype, are defined on the classes body itself.

/*
function dog(name,breed,color){
    this.name= name
    this.color = color
    this.breed = breed
    this.brark = function(){
      return "whoof!!"
    }
  }
  const dog1 = new  dog("daisy","labrador","golden")
  console.log(dog1)
  console.log(dog1.__proto__)
  const dog2 = new dog("allo","glodie","black")
  console.log(dog2)

*/

/*
class Dog {
    constructor(name,breed,color){
    this.name= name
    this.color = color
    this.breed = breed
    }
    brark(){
      return "whoof!!"
    }
  }
  
*/

/* 
  Another great thing about classes, is that we can easily extend other classes.

Say that we want to show several dogs of the same breed, 
namely Chihuahuas! A chihuahua is (somehow... 😐) still a dog. 
To keep this example simple, I'll only pass the name property to the 
Dog class for now instead of name,
breed and color. But these chihuahuas can also do something special, they have a small bark. 
Instead of saying Woof!, a chihuahua can also say Small woof! 🐕

In an extended class, we can access the parent class' constructor using the super keyword.
The arguments the parent class' constructor expects, 
we have to pass to super: name in this case.

*/


class Dog {
    constructor(name,breed,color){
    this.name= name
    this.color = color
    this.breed = breed
    }
    brark(){
      return "whoof!!"
    }
}

class Chihuahuas extends Dog {
    // constructor(name,_breed){
      // or
    constructor(name,breed){

        // super(name,_breed)
         //   or
        super(name,breed)
    }
        smallBrak(){
            return "small whoff!"

        }
}
const myPet = new Chihuahuas("daniel","labrador")
console.log(myPet)

// Since Chihuahua.prototype has the smallBark function, and Dog.prototype has the bark function,
// we can access both smallBark and bark on myPet!

// Now as you can imagine, the prototype chain doesn't go on forever. 
// Eventually there's an object which prototype is equal to null: the Object.prototype object in 
// this case! If we try to access a property that's nowhere to be found locally or on the prototype
// chain, undefined gets returned.

// Although I explained everything with constructor functions and classes here,
// another way to add prototypes to objects is with the Object.create method. With this method,
// we create a new object, and can specify exactly what the prototype of that object should be! 💪🏼

// We do this, by passing an existing object as argument to the Object.create method.
// That object is the prototype of the object we create!




const person ={
  name:"Lindya",
  age:21
}
const me = Object.create(person)
console.dir(me)

// We didn't add any properties to the me object,
// it simply only contains the non-enumerable __proto__ property! 
// The __proto__ property holds a reference to the object we defined as the prototype: 
// the person object, which has a name and an age property. Since the person object is an object,
// the value of the __proto__ property on the person object is Object.prototype 
// (but to make it a bit easier to read, I didn't expand that property in the gif!)

