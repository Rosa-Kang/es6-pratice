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


