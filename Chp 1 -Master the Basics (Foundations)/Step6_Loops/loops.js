// ✅ for

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("-----------------------------------------------------------");

// ✅ while
let i = 6;
while (i <= 10) {
  console.log(i);

  i++;
}

console.log("-----------------------------------------------------------");

// ✅ for...of (works on arrays)

const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}

console.log("-----------------------------------------------------------");

// ✅ for...in (works on objects)

const person = { name: "Ankit", age: 23 , background :"Flexible Developer" };

for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}


