//Functional Programming is another popular approach to software development. 
//In Functional Programming, code is organized into smaller,
//basic functions that can be combined to build complex programs.

//pure functions, how to avoid mutations, and how write cleaner code with methods like .map() and .filter()

//Understand the Hazards of Using Imperative Code Imperative : 명령의
// splice changes the original array it is called on, 
//so the second call to it used a modified array, and gave unexpected results.
var Window = function(tabs) {
    this.tabs = tabs;
}

Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow);
    return this;
};

Window.prototype.tabOpen = function() {
    this.tabs.push('new tab');
    return this;
}

Window.prototype.tabClose = function(index) {
    // var tabBefore = this.tabs.splice(0, index);
    // var tabAfter = this.tabs.splice(index+1);

    var tabsBeforeIndex = this.tabs.slice(0, index);
    var tabsAfterIndex = this.tabs.slice(index +1 );

    this.tabs = tabBefore.concat(tabAfter);

    return this;
}

var finalTabs = socialWindow
                .tabOpen()
                .join(vide.tabClose(2))
                .join(work.tabClose(1).tabOpen());

var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var social = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
var video = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

//Avoid Mutations and Side Effects Using Functional Programming
//One of the core principles of functional programming is to not change things. 
//Changes lead to bugs. It's easier to prevent bugs knowing 
//that your functions don't change anything, including the function arguments or any global variable.

// in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
//recall A function, ideally, should be a pure function, meaning that it does not cause any side effects.

//Another principle of functional programming is to always declare your dependencies explicitly. 

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

// Use the map Method to Extract Data from an Array
const ratings = data.map(w => ({
      title: w["Title"], 
      rating: w["imdbRating"]

}));

let json = JSON.stringify(ratings)
console.log(json);

//8. Remove Elements from an Array Using slice Instead of splice
//splice('where to start', 'how many remove') --> mutate the original array and return the spliced value
//slice('where to start', 'where to end') --> does not mutate the original array, returns a new array
//that can be saved into a variable.
let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}

//9.Return Part of an Array Using the slice Method
let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

function sliceArray (anim, beginSlice, endSlice) {
  return   anim.slice(beginSlice, endSlice)
  }

//10.Implement the filter Method on a Prototype
console.log(filteredList);
let filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);

  //11.Implement map on a Prototype
  var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  for (let i =0; i<this.length; i++){
    newArray.push(callback(this[i]))
  }
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

//12. Combine Two Arrays Using the concat Method
nonMutatingConcat(first, second);

function nonMutatingConcat(original, attach) {
  
   return original.concat(attach)
}

const first = [1, 2, 3];
const second = [4, 5];

//13. Filter, Reduce to find Average Ratings of Christopher Nolan's movies
// string to number : Number(value);
getRating(watchList);

function getRating(watchList){
  let ratings = watchList
                    .filter((li)=> li.Director === "Christopher Nolan")
                    .map((chris)=> Number(chris.imdbRating)) ; // Number is an api function in JavaScript
  let averageRating = ratings.reduce((prev, curr)=> prev + curr, 0) / rating.length;

  return averageRating;
}

//15. Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// Higher order function is such as map, filter, and reducers that returns a new array by looping through an original array without having to use loop functions like for, while or forEach.
//should return a new array containing the squares of only the positive integers (decimal numbers are not integers) 
//when determining decimal ; use num % parseInt(num) === 0 ***
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

const squareList = arr => {

  let filtered = arr.filter((ar) => ar >0 && ar % parseInt(ar) === 0)
                    .map((int)=> int * int) // or you can use .map((int)=> Math.pow(int, 2)) 
                    //The Math.pow() function returns the base to the exponent power, as in base^exponent. x의 n제곱을 영어로 the power of x to the n
  return filtered;
}

//16. Sort an Array Alphabetically using the sort Method
// When transferring a string array in AlphabeticalOrder, we should use callback function inside sorting method.
// the callback should be ; (a,b) => a ===b ? 0 : a>b ? 1:-1
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

function alphabeticalOrder(arr) {
  let sorted = arr.sort((a,b) => a ===b ? 0 : a>b ? 1:-1);
  return sorted ;
}

