//Regular expressions, often shortened to "regex" or "regexp",
// are patterns that help programmers match, search, and replace text. 

//1. Using the Test Method : 
//In the last challenge, you searched for the word Hello using the regular expression /Hello/.
//That regex searched for a literal match of the string Hello.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//2.Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; //*this 'i' makes it ignore the case
let result = fccRegex.test(myString);
let result2 = myString.match(fccRegex);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);

//3.Match Numbers and Letters of the Alphabet
//Create a single regex that matches a range of letters between h and s, 
//and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let myRegex = /[^aeiou^0-9]/gi //matches all characters that are not a number or a vowel.
let result = quoteSample.match(myRegex); 

//4.Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". 
//Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result);
//, you can use the ? character to change it to lazy matching. 
//"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

//5. Search for a word at the end of String | first of String
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // at the end of the string
let lastRegex2 = /^caboose/; //at the first of the string
let result = lastRegex.test(caboose);
let result2 = lastRegex2.test(caboose);

//6.Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // 
let nonAlphabetRegex = /\W/g; //to find the number of non-alphanumeric characters
let result = quoteSample.match(alphabetRegexV2).length;