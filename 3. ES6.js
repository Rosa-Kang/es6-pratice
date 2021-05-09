// ES6 introduced let, const, and rest parameter, and the spread operator
//With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
//the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
//However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
//const spreaded = ...arr;

// var vs let vs constant
// The biggest difference between var vs let is the scope. While Var is a global scope and Let is Block scope.

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