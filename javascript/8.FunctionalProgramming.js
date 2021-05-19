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
