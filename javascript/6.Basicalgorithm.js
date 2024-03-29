//1. Reverse String
console.log(reverseString (str));

function reverseString (str) {
    return str
            .split('')
            .reverse()
            .join('');
}

//my answer was;
function reverseString(str) {
  let empty = []
  let newStr = str.split("") //split(' ') Error 
  newStr.map((ns)=> empty.unshift(ns))
  return empty.join(''); //join(' ') Error
}

//2. REDUCE !!! Factorialize a number
console.log(factorialize(5));

function factorialize(num) {
    for (var product=1; num>0; num--) {
      product *= num;
    }
    return product;
}

//my answer was
function factorialize(num) {
  let numArr= [];
  for(let i=num; i>0; i--){
      numArr.push(num)
      num = num -1
  }
  let result = numArr.reduce((pre, curr) => pre * curr, 1) // last number to 1
  return result;
}

//3. SORT !!!! Find the Longest Word in a String
findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
  let arr= str.split(' ');
  let maxLength =0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
 return maxLength;
}

//my answer was

function findLongestWordLength(str) {
  let arr= str.split(' ');
  let empty = [];
  for (let i=0; i <arr.length; i++) {
       empty.push(arr[i].length);
  }
  let newArr = empty.sort((a,b)=> b - a)
  return newArr[0];
}

//4. SORT !!! b-a LargestNumber in Arrays 
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
function largestOfFour(arr) {
  let bigArr = [];
  arr.map((num)=> { 
     num.sort((a,b)=> b-a)
     bigArr.push(num[0]);
     })
  return bigArr;
}

// solution
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}


//5. Slice 
// Slice (a,b)  일때, a는 시작. b는 끝보다 한자리 뒤
confirmEnding("Bastian", "n");
function confirmEnding(str, target) {
 let a = str.length
 let b = target.length
 let c = str.slice(a-b,a)
  return c == target;
}

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

//6. Repeat Str
function repeatStringNumTimes(str, num) {
  let a = [];
  for (num; num > 0; num--){
     a.push(str);
  }
  return a.join('');
}

repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
 let aStr = "";
 while (num >0) {
   aStr += str;
   num--;
 }
  return aStr;
  
}

//7.Truncate a String

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function truncateString(str, num) {
 return str.length > num ? str.slice(0, num) + "..." : str;
}

//my answer
function truncateString(str, num) {
  let a = str.length
  if(a < num ) {
    return str
  } else {
  return str.slice(0,num)+'...';
  }
}

//8. Finders Keepers
findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement(arr, func) {
  return arr.find(func);
}

//my answer
function findElement(arr, func) {
  return arr.find((num)=> func(num));
}

//9. Check if a value is classified as a boolean primitive. Return true or false
function(bool) {
  return typeof bool === 'boolean';
}

//10. Capitalize
titleCase("I'm a little tea pot");

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L=> L.toUpperCase());
}

//easier answer to me
function titleCase(str) {
  let a = str.toLowerCase().split(' ');
  let b = a.map((w)=> w.replace(w.charAt(0), w.charAt(0).toUpperCase));
  return b.join(' ');
}

//11. Slice and Splice
//Slice does copy and not mutate the original array that is called upon
const array = [1,2,3,4,5];
const result = array.slice(1,4); //slice(start index, end index) result should be [2,3,4]
const another = array.slice(-3); // reversed order the another should be [3,4,5] 
const rest = array.slice(2); //all the items starting from the index // [3,4,5]

//Splice mutate the original array
const numbers = [1,2,3,4,5]

const second = numbers.slice();
const newNum = numbers.slice(); //copy numbers array into newNum so that numbers won't be mutated.
newNum.splice(2,3); // (index, how many will you delete) newNum will be [1,2]
second.splice(2,0,6,7); // (index, how many will you delete, what will added)
// from index 2, not remove but add 6,7

frankenSplice([1, 2, 3], [4, 5, 6], 1);
function frankenSplice(arr1, arr2, n) {
    let a = arr2.slice(); //copy
    a.splice(n, 0, ...arr1);
    return a;
}

//12. [Filter] Falsy Bouncer
bouncer([7, "ate", "", false, 9]);

function bouncer(arr) {
  return arr.filter(Boolean);
}

//13. Find the IndexOf certain info.
getIndexToIns([40, 60], 50);
function getIndexToIns(arr, num) {
  return arr
          .concat(num)
          .sort((a,b) => a-b)
          .indexOf(num);
}

//14. Every Method
// look for every element in the array and look for one that didn't meet the condition
// when you want to make sure that every element in the array meets the condition
//indexOf will give you -1 if the current letter is missing.
mutation(["hello", "hey"]);

function mutation(arr) {
  return arr[1]
          .toLowerCase()
          .split('')
          .every((l)=> arr[0].toLowerCase().split('').indexOf(l) != -1)
}

//using every, filter arrays from nested array that doenst have and elem.
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);
function filteredArray(arr, elem) {
 let newArr = [];

 for(let i=0; i<arr.length; i++){
   if(arr[i].every((ar)=> ar !== elem )) {
     newArr.push(arr[i])
   }
 }
 return newArr;
}



//15. divide an array into two dimensional array
function chunkArrayInGroups(arr, size) {
  let a = [];
  while(arr.length >0 ) {
    a.push(arr.splice(0, size))
  }
  return console.log(a)
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//16.Palindrome Checker
// to remove empty space ; replace(/[\W_]/g, "")
palindrome("race car");

function palindrome(str) {
  let givenStr = str.toLowerCase()
                    .replace(/[\W_]/g,"");
  let test = givenStr.split('')
                    .reverse()
                    .join('');
  return givenStr === test;
}

//17.Roman Numeral Converter
convertToRoman(36);
let romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}

//18.Caesars Cipher [암호]
rot13("SERR PBQR PNZC");
function rot13(str) {
  let a = str.split("")
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let c = a.map((e)=> alphabet.indexOf(e) < 0 ? e : alphabet.indexOf(e))
  let d = c.map((el)=> (typeof(el) !== 'number'? el: el>= 13? el-13 : el+13))
  let result = d.map((dee)=> typeof(dee) === 'number'? alphabet[dee] : dee)
                .join("")
  return result;
}

//19. concat and filter and includes
//Compare two arrays and return a new array with any items 
//only found in one of the two given arrays, but not both.
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(a, b) {
  let c = a.concat(b)
           .filter(!a.includes(el) || !b.includes(el));
           // .filter( a.indexOf(el) === -1  || b.indexOf(el) === -1) --> el is not defined. Error
  return c;
}

//20. includes / indexOf / every

//21. Remove all elements from the initial array that are of the same value as these arguments
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
function destroyer(arr, ...arg) {
  let c = arr.filter((el)=> !arg.includes(el))
  return c;
}

//22. Telephone Number Validator
telephoneCheck("555-555-5555");
function telephoneCheck(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
      rex2 = /^(1\s?)?(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  if (rex1.test(str)) {
    return true;
  }
  else {
    return rex2.test(str) ? true:false
  }
}


//22. Telephone Number Validato

const BILLS = [
  ["ONE HUNDRED", 10000],
  ["TWENTY", 2000],
  ["TEN", 1000],
  ["FIVE", 500],
  ["ONE", 100],
  ["QUARTER", 25],
  ["DIME", 10],
  ["NICKEL", 5],
  ["PENNY", 1]
];

function checkCashRegister(price, cash, cid) {
  var change = cash * 100 - price * 100; // (In pennies)
  var yourCash = {};
  var myCash = {};
  var i = 0;

  // No change? Done.
  if (change === 0) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  // Swap out array for an object
  cid.forEach(money => {
    myCash[money[0]] = parseInt(money[1] * 100);
  });

  // Give bills big -> small until change = 0 or fail
  while(i < BILLS.length && change > 0) {
    var billName = BILLS[i][0];
    var billValue = BILLS[i][1];

    // Can accept && give change
    if (change - billValue > 0 && myCash[billName] > 0) {
      // Set yourCash[billName]
      yourCash[billName] = 0;
      // Give as many of this bill as I can.
      while(change - billValue >= 0 && myCash[billName] > 0) {
        yourCash[billName] += billValue / 100;
        myCash[billName] = parseInt(myCash[billName] - billValue);
        change -= billValue;
      }
    }
    i++;
  }

  if (change === 0) {
    let hasMoney = false;

    Object.keys(myCash).forEach(key => {
      if (myCash[key] > 0) {
        hasMoney = true;
      }
    });

    if (hasMoney) {
      return {
        status: "OPEN",
        change: Object.keys(yourCash).map(key => {
        let obj = [key, yourCash[key]];
        console.log(JSON.stringify(obj));
        return obj;
      })};
    } else {
      console.log("NO Money Left...");
      return {
        status: "CLOSED",
        change: cid
      };
    }
  }
  return {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
}