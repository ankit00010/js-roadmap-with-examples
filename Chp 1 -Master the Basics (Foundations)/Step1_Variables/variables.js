// 🥇 Step 1: Variables (var, let, const)
// ✅ var
// Function-scoped.
// Can be re-declared and updated.
// Hoisted (moved to the top), but initialized with undefined.

console.log(name); //✅ hoisted -undefined


var name ="Ankit";
var name ="Mishra";// ✅ re-declare
name="Batman"// ✅ update


console.log(name);  // Batman


// ✅ let
// Block-scoped (inside {}).
// Can be updated, but not re-declared in the same scope.
// Hoisted, but not initialized. 


// console.log(age); ❌ ReferenceError: Cannot access 'age' before initialization

let age = 22;
// let age = 30; ❌ Error (can't re-declare)
age = 23; // ✅ update
console.log(age); // 23


// ✅ const
// Block-scoped.
// Cannot re-declare or update.
// Must be initialized.



const pi = 3.14;
// pi = 3.1415; ❌ Error (can't update)
// const pi = 3.15; ❌ Error (can't re-declare)
console.log(pi); // 3.14




// 🔔 But! For objects/arrays with const, the reference can't change, but the data can:
const person = { name: "Ankit" };
person.name = "Mishra"; // ✅ allowed
console.log(person); // { name: "Mishra" }

const numbers = [1, 2, 3];

numbers.push(4); //✅ Add new element
numbers[0]=99;// ✅ Change an existing element
console.log(numbers);   // [99, 2, 3, 4]



