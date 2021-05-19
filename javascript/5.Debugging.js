//Debugging ~ Data Structures
//Issues in code generally come in three forms:
//1. syntax errors
//2. runtime errors
//3. logical errors

//Data Structures.
//Common Data Structure in JS are arrays & objects

//1. Copy of Array with Spread Operator
//The function is supposed to return a new array made up of num copies of arr. 
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    
    newArr.push([...arr]);
    
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//2.Splice
//splice() to remove the first two elements of the array 
//and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
function htmlColorNames(arr) {
   arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//3.Slice
//Rather than modifying an array, slice() copies or extracts 
//a given number of elements to a new array, leaving the array it is called upon untouched. 
function forecast(arr) {
   return arr.slice(2,4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));