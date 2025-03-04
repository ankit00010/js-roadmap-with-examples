// ✅ Arithmetic Operators
console.log(5 + 2); // Addition: 7
console.log(5 - 2); // Subtraction: 3
console.log(5 * 2); // Multiplication: 10
console.log(5 / 2); // Division: 2.5
console.log(5 % 2); // Modulus (Remainder): 1
console.log(5 ** 2); // Exponentiation: 25

// ✅ Comparison Operators
console.log('5' == 5);  // Loose Equality (==): true (checks value, allows type coercion)
console.log('5' === 5); // Strict Equality (===): false (checks value and type)
console.log(5 != 3);    // Not Equal (!=): true
console.log(5 !== '5'); // Strict Not Equal (!==): true
console.log(5 > 2);     // Greater Than: true
console.log(5 < 2);     // Less Than: false
console.log(5 >= 5);    // Greater Than or Equal To: true
console.log(5 <= 4);    // Less Than or Equal To: false

// ✅ Logical Operators
console.log(!true);            // NOT (!): false
console.log(true && false);    // AND (&&): false
console.log(true || false);    // OR (||): true

// ✅ Assignment Operators
let x = 10;     // Assign (=)
x += 5;         // Add and assign (+=): 15
x -= 3;         // Subtract and assign (-=): 12
x *= 2;         // Multiply and assign (*=): 24
x /= 4;         // Divide and assign (/=): 6
x %= 5;         // Modulus and assign (%=): 1

// ✅ String Operator
console.log('Hello ' + 'World'); // Concatenation (+): "Hello World"

// ✅ Template Literals (backticks ` `)
const name = "Ankit";
console.log(`Hello, My name is ${name}!`); // Hello, Ankit!


// 📝 Notes:
// Arithmetic operators: For basic math.
// Comparison operators: For checking values (with or without type coercion).
// Logical operators: For combining conditions.
// Assignment operators: For updating variable values easily.
// String operators: For joining text.
// Template literals: For easy string interpolation with ${}.
