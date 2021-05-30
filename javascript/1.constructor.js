// 1. 
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();


// The string byebye will never display in the console, 
// because the function exits at the return statement.





// Object Oriented Programming
// OOP, or Object Oriented Programming, is one of the major approaches 
// to the software development process. In OOP, 
// objects and classes are used to organize code to describe things and what they can do.

// the basic principles of OOP in JavaScript are the this keyword, prototype chains, constructors, and inheritance.

// Define a Constructor Function
// Constructors are functions that create new objects. 
// They define properties and behaviors that will belong to the new object. 
// Think of them as a blueprint for the creation of new objects.

// Constructors follow a few conventions:

// . Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// . Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// . Constructors define properties and behaviors instead of returning a value as other functions might.


function Dog() {
  this.name= "malang",
  this.color="white",
  this.numLegs= 4
}


// Use a Constructor to Create Objects
// Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. 
This tells JavaScript to create a new instance of Bird called blueBird. 
Without the new operator, this inside the constructor would not point to the newly created object, 
giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;

----
Extend Constructors to Receive Arguments
function Dog(name, color) {
   this.name= name,
   this.color= color,
   this.numLegs= 4
}

var terrier = new Dog('Terrier', 'Brown');

---
Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;


---
Understand Own Properties
In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
name and numLegs are called own properties, because they are defined directly on the instance object. 
That means that duck and canary each has its own separate copy of these properties. 
In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
The console would display the value ["name", "numLegs"].

-----
Use Prototype Properties to Reduce Duplicate Code
Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.
Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);

---------
Iterate Over All Properties
own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);


---DRY
There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

----Object.create(Animal.prototype) !!!
How supertype & constructor are different??

Make an instance of the supertype(or parent)
#1. Using the new operator.
let animal = new Animal();

#2. Using Object.create method
let animal = Object.create(Animal.prototype);

-----Set the Child's Prototype to an Instance of the Parent
Bird.prototype = Object.create(Animal.prototype);

--- Add Methods After Inheritance
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();
beagle.eat();
beagle.bark();


// ------
// Use a Mixin to Add Common Behavior Between Unrelated Objects
// ------
// Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:

// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:
