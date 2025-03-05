// */{🔹 What is Destructuring?
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables in a concise way.}/*

// 1️⃣ Array Destructuring
// You can extract values from an array into separate variables.

// ✅ Example 1: Basic Array Destructuring

const fruits = ["Apple", "Banana", "Mango"];

//Traditional Way
const firstFruit = fruits[0];
const secondFruit = fruits[1];

//Using Destructuring

const [first, second, third] = fruits;

console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Mango

// ✅ Example 2: Skipping Values

const numbers = [10, 20, 30, 40];

const [firstNumber, , thirdNumber] = numbers;

console.log(first); // 10
console.log(third); // 30

// ✅ Example 3: Default Values

const colors = ["red"];

// Trying to extract second value, but it doesn’t exist
const [color1, color2 = "Blue"] = colors;

console.log(color1); // Red
console.log(color2); // Blue (default value)

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 2️⃣ Object Destructuring

// Extract values from an object into separate variables.

// ✅ Example 1: Basic Object Destructuring

const person = {
  name: "Ankit",
  age: 23,
  country: "India",
};

// Traditional way
const name1 = person.name;
const age1 = person.age;

// Using destructuring
const { name, age, country } = person;

console.log(name); // Ankit
console.log(age); // 23
console.log(country); // India

// ✅ Example 2: Renaming Variables

const user = { userEmail: "user@gmail.com", userName: "user123" };

const { userName: username, userEmail: email } = user;

console.log(username); //user123
console.log(email); // user@gmail.com

// ✅ Example 3: Default Values

const product = {
  title: "Laptop",
};

const { title, price = 1000 } = product;

console.log(title); // Laptop
console.log(price); // 1000 (default value)

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 3️⃣ Nested Destructuring
// You can destructure objects inside objects.

// ✅ Example 1: Destructuring a Nested Object

const student = {
  name: "Ankit",
  marks: {
    math: 90,
    science: 85,
  },
};

const {
  name: user_name,
  marks: { math, science },
} = student;

console.log(user_name); //Ankit
console.log(math); // 90
console.log(science); // 85

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 4️⃣ Function Parameter Destructuring

const userInfo = {
  firstName: "Ankit",
  lastName: "Mishra",
  age: 23,
};

const displayUser = ({ firstName, lastName, age }) => {
  console.log(`Name: ${firstName} ${lastName} , Age : ${age}`);
};

displayUser(userInfo);

// 🔹 Output:
// Name: Ankit Mishra , Age : 23

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 5️⃣ Combining with the Rest Operator
// You can extract some properties and collect the rest using ...rest.

// ✅ Example: Rest Operator with Destructuring

const personDetails = {
  firstName: "Ankit",
  lastName: "Mishra",
  age: 23,
  country: "India",
};

const { firstName, lastName, ...otherDetails } = personDetails;

console.log(firstName); // Ankit
console.log(lastName); // Mishra
console.log(otherDetails); // { age: 23, country: 'India' }

// 🛠️ Practice Task
// Try destructuring the following object and extracting only brand and year, leaving the rest in a separate variable.

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "White",
};

//Solution

const { brand, year, ...seperateVehicle } = car;

console.log(brand);
console.log(year);
console.log(seperateVehicle);

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 1️⃣ Spread Operator (...)
// The spread operator is used to copy, merge, or expand elements of an array or object.

// ✅ Example 1: Copying an Array
const num = [1, 2, 3];
const copiedNumbers = [...num];

console.log(copiedNumbers); // [1, 2, 3]

// ✅ Example 2: Merging Arrays

const old_skill = ["Javascript"];
const new_skill = ["Typescript"];

const skill_sets = [...old_skill, ...new_skill];

console.log(skill_sets); //[ 'Javascript', 'Typescript' ]

// ✅ Example 3: Copying an Object

const details = { name: "Ankit", age: 23 };
const user_details = { ...details };
console.log(user_details); //{ name: 'Ankit', age: 23 }

// ✅ Example 4: Merging Objects

const new_user = { name: "Ankit", age: 23 };
const address = { state: "Maharashtra", country: "India" };

const merge_user = { ...new_user, ...address };

console.log(merge_user); //{ name: 'Ankit', age: 23, state: 'Maharashtra', country: 'India' }

// ✅ Example 5: Expanding Function Arguments

console.log(Math.max(...num)); // 3 Refering the num variable at the start of this topic

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 2️⃣ Rest Operator (...)

// The rest operator gathers multiple values into an array.

const sum = (...args) => {
  return args.reduce((data, num) => data + num, 0);
};

console.log(sum(1, 2, 3, 4)); // 10

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// JavaScript provides several useful methods to work with arrays efficiently. These methods help in iterating, transforming, and filtering data easily.

// ✅ map() → Transforms each element in an array and returns a new array.
// ✅ filter() → Returns a new array with elements that match a condition.
// ✅ reduce() → Reduces the array to a single value (e.g., sum, product).
// ✅ forEach() → Loops through the array (but doesn’t return a new array).
// ✅ find() → Returns the first element that matches a condition.

// 1️⃣ map() – Transforming Elements
// 🔹 map() creates a new array by applying a function to each element.

// ✅ Example 1: Doubling Numbers

const map_eg = [1, 2, 3, 4];

const dobule = map_eg.map((data) => data * 2);

console.log(dobule);

// ✅ Example 2: Extracting Names from Objects

const users_101 = [
  { name: "Pacific", age: 25 },
  { name: "Alex", age: 30 },
];

const extract_name = users_101.map((data) => data.name);

console.log(extract_name); //[ 'Pacific', 'Alex' ]

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 2️⃣ filter() – Selecting Elements
// 🔹 filter() returns a new array containing only elements that match a condition.

// ✅ Example 1: Filtering Even Numbers

const filter_que_1 = [1, 2, 3, 4, 5, 6];

const filter_even_numbers = filter_que_1.filter((data) => data % 2 === 0);
console.log(filter_even_numbers);

// ✅ Example 2: Filtering Adults (age >= 18)
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 30 },
];

const adult = people.filter((data) => data.age >= 18);
console.log(adult);

/* [
  { name: "Jane", age: 25 },
  { name: "Doe", age: 30 }
] */

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

//   3️⃣ reduce() – Reducing to a Single Value
// 🔹 reduce() processes the array and returns a single accumulated result.

// ✅ Example 1: Summing All Numbers

const reduce_eg = [10, 20, 30];

const reduce_res = reduce_eg.reduce((acc, curr) => acc + curr, 0);
console.log(reduce_res); //60

// ✅ Example 2: Finding the Maximum Value

const reduce_eg2_res = reduce_eg.reduce(
  (acc, num) => (num > acc ? num : acc),
  reduce_eg[0]
);

console.log(reduce_eg2_res); //30

// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-
// -/------------------------------------------------------------------------------------------------------/-

// 4️⃣ forEach() – Looping Over an Array
// 🔹 forEach() executes a function on each element but does not return a new array.

// ✅ Example 1: Logging Array Elements

const foreach_eg = ["White", "Black", "Yellow", "Brown"];

const loggin_res = foreach_eg.forEach((data) => console.log(data));
/*

Output:-
White
Black
Yellow
Brown

*/

// ✅ Example 2: Modifying an Array (No Return)

const mod_eg = [1, 2, 3];

mod_eg.forEach((num, index, arr) => {
  arr[index] = num * 2;
});

console.log(mod_eg); // 2,4,6

// 5️⃣ find() – Finding the First Match
// 🔹 find() returns the first element that matches a condition.

// ✅ Example 1: Finding a Specific Number

const found_eg = [3, 7, 10, 15];

const found = found_eg.find((num) => num > 5);

console.log(found); // 7 (first number > 5)

// ✅ Example 2: Finding a Specific User

const users = [
  { name: "Pacific", age: 25 },
  { name: "Alex", age: 30 },
];

const user_result = users.find((data) => data.name === "Pacific");
console.log(user_result); //{ name: 'Pacific', age: 25 }

// 🛠️ Practice Task

// Try implementing the following:

// Create an array of numbers: [5, 10, 15, 20, 25].
// Use map() to triple each value.
// Use filter() to keep only numbers greater than 20.
// Use reduce() to sum all the filtered numbers.

const prac_QUE = [5, 10, 15, 20, 25];

const tripple = prac_QUE.map((data) => data * 3);

const greater_num = prac_QUE.filter((data) => data > 20);

const filtered_numbers = prac_QUE.reduce((acc, curr) => acc + curr, 0);

console.log(tripple);
console.log(greater_num);
console.log(filtered_numbers);
/*
Output:-
[ 15, 30, 45, 60, 75 ]
 [ 25 ]
 75
*/



