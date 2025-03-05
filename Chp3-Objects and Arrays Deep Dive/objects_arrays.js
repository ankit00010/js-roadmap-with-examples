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
