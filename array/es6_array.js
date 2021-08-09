//1. Filter  : filter the city with a length greater than 6
// * find method returns the first item that fulfill the condition whereas, filter will return every items matches requirement

let cities = ["Toronto", "Vancouver", "Nyc", "Dubai", "LA", "Austin"];
// let lengthy = cities.filter((city)=> city.length > 6);
//  console.log(lengthy);

//2. MAP : Map through the famous people and return the first and last names.

const famousPeople = [
  {
    first: "Oprah",
    last: "Winfrey",
    city: "Chicago",
  },
  {
    first: "Barak",
    last: "Obama",
    city: "Washington",
  },
  {
    first: "Ariana",
    last: "Grande",
    city: "LA",
  },
];

// const fullName = famousPeople.map(people => `${people.first} ${people.last}`);
// console.log(fullName);

// 3. REDUCE : Sum up all numbers in the array

let arr2 = [10, 12, 23, 34];

// let result = arr2.reduce((prev, curr) =>
//     prev + curr
// , 0);
// console.log(result);

// 4. For each : Add on text 'Day of the week' all of the days in the arr

let arr3 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// let weekDay = arr3.map((day) => `${day} of the week`);
// let weekDays = arr3.forEach((day) => {
//     console.log(`${day} of the Week`);
// })
// console.log(weekDay);
// console.log(arr3);

//5. Ascending order (Sort ();)
let Stu = [8, 5, 6, 9, 3, 8, 2, 4, 6, 10, 8, 5, 6, 1, 7, 10, 5, 3, 7, 6];
// let newStu = Stu.reduce((prev, curr)=> prev+curr, 0);
// let average = newStu/Stu.length;
// console.log(average);

// let ascending = Stu.sort((a, b) => a - b);
// console.log(ascending);
