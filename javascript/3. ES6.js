// ES6 introduced let, const, and rest parameter, and the spread operator
//With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
//the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
//However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
//const spreaded = ...arr;

// var vs let vs constant
// The biggest difference between var global, function vs let block, function. While Var is a global scope and Let is Block scope.
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
 
  const failureItems = [];
  arr.map((array) => {
    failureItems.push(`<li class="text-warning">${array}</li>`);
  })

  return failureItems;
}

const failuresList = makeList(result.failure);
// Hoisting is JavaScript's default behavior of moving declarations to the top.

function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope'; //scope is not defined.
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

console.log(checkScope) ;// will show you 'Block scope i is : block scope', 'Function scope i is : block scope', block scope

//when you use let in the same example
function checkScope() {
    let i = 'function scope';
    if(ture) {
    let i= 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

console.log(checkScope); // will show you 'Block scope i is : block scope', 'Function scope i is : function scope', function scope


//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
//instead of assigning value through object.variable like below
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// now you can assign them by calling object
const {name, age} = user;
// and if you want to assign new variable name, you can do it like this
const {name : newName, age:newAge} = user;
//you can use this concept to destructure values from nested objects.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const {today: {low : lowToday,high: highToday}} = LOCAL_FORECAST;

//A new feature of ES6 is the template literal. 

//Write Concise Object Literal Declarations Using Object Property Shorthand
//ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

//turns -->
const getMousePosition = (x, y) => ({ x, y });

//With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
//becomes
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

//Use class Syntax to Define a Constructor Function
//Create a JavaScript Promise
//A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
//Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {
    if(true) {
    resolve ("Promise was fulfilled")
  } else {
    reject ("Promise was rejected");
  }
});