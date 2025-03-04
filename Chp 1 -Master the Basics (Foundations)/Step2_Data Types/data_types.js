
// ✅ Primitive Types:

const name = "Ankit";     // string
const age = 23;           // number
const isCool = true;      // boolean
const nothing = null;     // null
let notDefined;           // undefined
const uniqueId = Symbol('id'); // symbol
const bigNumber = 12345678901234567890n; // bigint

console.log("name:", name, "| type:", typeof name);              // name: Ankit | type: string
console.log("age:", age, "| type:", typeof age);                // age: 24 | type: number
console.log("isCool:", isCool, "| type:", typeof isCool);       // isCool: true | type: boolean
console.log("nothing:", nothing, "| type:", typeof nothing);    // nothing: null | type: object (weird JS quirk)
console.log("notDefined:", notDefined, "| type:", typeof notDefined); // notDefined: undefined | type: undefined
console.log("uniqueId:", uniqueId, "| type:", typeof uniqueId); // uniqueId: Symbol(id) | type: symbol
console.log("bigNumber:", bigNumber, "| type:", typeof bigNumber); // bigNumber: 12345678901234567890n | type: bigint



// ✅ Reference Types:
// Object, Array, Function

const person = { name: "Ankit" }; // object
const numbers = [1, 2, 3];        // array
function greet() { console.log("Hello"); } // function


console.log(person); // { name: 'Ankit' }
console.log(numbers);// [ 1, 2, 3 ]
greet() ;// Hello

