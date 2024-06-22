"use strict"; // treat all code as newer version of js

// alert(3+3)  we r using node js, we have differnet syntax to use alert statement

console.log(typeof null);

// primitive datatypes :(call by value) string, number, bigInt, null, undefined, symbol,Boolean

//non-primitive, (reference): array, object, function

const names=["raman","rahul","dhtr"];

let object = {
    name : "Raman",
    age:20,

}
const myFunction = function(){
    console.log("hello");
}

console.log(typeof myFunction); //function
console.log(typeof object); //object
console.log(typeof names); //object





