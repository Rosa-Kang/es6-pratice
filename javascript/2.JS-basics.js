//----JavaScript Objects---
// What is Object?
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

var myDog = {
// Only change code below this line
 "name":"lian",
 "legs":4,
 "tails":1,
 "friends":["malan", "chris"]
// Only change code above this line
};

-----Push the odd numbers from 1 through 9 to myArray using a for loop.

// My answer was:
// for(var i=1; i<10; i++) {
//   if (i % 2 !== 0) {
//     myArray.push(i)
//   } else i++;
// }


//correct answer is:


var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

------Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
var myArr = [ 2, 3, 4, 5, 6];
var total=0;
for (var i=0; i<myArr.length; i++) {
  total = total+ myArr[i];
}
// Only change code below this line


----for loop
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foies"]
    }
];


function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}


lookUpProfile("Akira", "likes");

//----Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random()*(myMax-myMin +1))+myMin;
  // Only change code above this line
}



-------------Countup
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
[1, 2, 3, 4, 5]


---------Countdown 
function countdown(n){
  if(n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }  
}
// Only change code above this line

------Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum-startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}