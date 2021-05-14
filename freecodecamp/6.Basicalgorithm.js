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
          .ever((l)=> arr[0].toLowerCase().split('').indexOf(l) != -1)
}

//15. 