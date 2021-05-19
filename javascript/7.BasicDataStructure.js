//multi-dimensional, or nested array with five level
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
];

//Add Key-Value Pairs to JavaScript Objects
//At their most basic, objects are just collections of key-value pairs. 
//In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). 

//notations to access the information we need. Set the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};


userActivity.data.online = 45

console.log(userActivity);

//access to property names with bracket notation
console.log(checkInventory("apples"));
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
   return foods[scannedItem]
  // Only change code above this line
}

//hasOwnProperty : Check if an Object has a Property
console.log(isEveryoneHere(users));

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
    if(
        obj.hasOwnProperty('Alan') &&
        obj.hasOwnProperty('Jeff') &&
        obj.hasOwnProperty('Sarah') &&
        obj.hasOwnProperty('Ryan')
    ) {
        return true;
    }
   return false;
  }

//Or

function isEveryoneThere(obj) {
    let names = ['Alan','Jeff','Sarah','Ryan'];

    return names.every((name)=> obj.hasOwnProperty(name));
}


//return the number of users whose online property is set to true. 
function countOnline(usersObj) {
  let result =0;
  for(let user in usersObj) {
    if(usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}

const usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

countOnline(usersObj);

//Object.keys() method generates an array which contains all the keys stored in an object 
console.log(getArrayOfUsers(users));

function getArrayOfUsers(obj) {
   return Object.keys(obj);
}

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

//Modify an Array Stored in an Object
console.log(addFriend(user, 'Pete'));
function addFriend(userObj, friend) {
  // Only change code below this line
   let list = userObj.data.friends;
   list.push(friend)
   return list;
  // Only change code above this line
}

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};