console.log(this); // In browser: Window object, In Node.js: global object {}

// Inside a function in strict mode ('use strict'), this is undefined:

("use strict");
function showThis() {
  console.log(this);
}
// showThis(); // undefined

// 🔹 Function Context
// In a regular function, this depends on how the function is called.

const obj = {
  name: "Ankit",
  printName() {
    console.log("Hello ", this.name);
  },
};

obj.printName();

// 2. call, apply, bind
// These methods allow us to explicitly set the value of this when calling a function.

// ✅ call()
// Calls a function with a given this value and individual arguments.

function introduce(country, city) {
  console.log(
    `Hello my name is ${this.name} and I Live in ${country} and my city is ${city}`
  );
}

const user1 = { name: "Ankit" };
const user2 = { name: "Rohit" };
const user3 = { name: "Lisa" };

// Hello my name is Rohit and I Live in USA and my city is undefined
// Hello my name is Ankit and I Live in India and my city is undefined
introduce.call(user1, "India");

introduce.call(user2, "USA");

// ✅ apply()
// Similar to call(), but arguments are passed as an array.

// js
// Copy
// Edit
// Hello my name is Lisa and I Live in Japan and my city is Tokyo
introduce.apply(user3, ["Japan", "Tokyo"]);

// ✅ bind()
// Returns a new function with this permanently bound to a specific object.

// 🔹 3. Arrow Functions and this
// Arrow functions do not have their own this. They inherit this from their surrounding (lexical) scope.
const arrowObj = {
  name: "Ankit",
  show: () => {
    console.log("Arrow this functions eg =>", this.name); // undefined (inherits from global)
  },
};
arrowObj.show();

// To fix this, use a regular function:

const correctObj = {
  name: "Ankit",
  show() {
    console.log("Correct Arrow this functions eg =>", this.name); // undefined (inherits from global)
  },
};
correctObj.show(); // Pacific





//✅ Arrow Function Inside a Method
// When using an arrow function inside a method, it retains this from the surrounding method
const team = {
  name: "Google",
  members: ["Ankit", "Shivam"],
  showMembers() {
    this.members.forEach((member) => {
      console.log(`${member} is in ${this.name}`);
    });
  },
};
team.showMembers();
// Ankit is in Google
// Shivam is in Google



const person = {
  name: "Pacific",
  sayName: function () {
      const inner = () => {
          console.log(this.name);
      };
      inner();
  }
};
person.sayName();


