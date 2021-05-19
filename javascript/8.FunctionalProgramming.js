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
