// Step 1: What is a Prototype?
// In JavaScript, every object has a prototype, which is another object it inherits properties and methods from.

const obj = {};
console.log(Object.getPrototypeOf(obj)); // Shows the prototype object
console.log(obj.__proto__); // Alternative way (not recommended)

// Both will return Object.prototype, which is the base prototype for most objects.

// 1. Prototypal Inheritance in JavaScript
// JavaScript is based on prototypal inheritance. This means that objects can inherit properties and
// methods from other objects. In JavaScript, every object has a hidden internal property called
//  __proto__ that points to its prototype.

// Prototype: The prototype is another object that an object can inherit properties and methods from.
// We have created an based object with a method that is speak
const animal = {
  speak() {
    console.log("Animal is speaking");
  },
};

//Create a new object that inherits the property of dog
const dog = Object.create(animal);

dog.speak(); //Animal is speaking

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Prototype Chain
// When you try to access a property on an object, JavaScript will first check if that property exists on the object itself.
//  If it doesn't, it will look for the property in the object's prototype.
// This process continues up the prototype chain until it reaches Object.prototype, the topmost prototype.

const person = {
  speak() {
    console.log("Speak");
  },
};

const ankit = Object.create(person);

ankit.talk = function () {
  console.log("Talking");
};
ankit.speak(); //Speak

ankit.talk(); //Talking

// Here ankit has its own method i.e. talk method which its in __proto__ and it also have speak which
// is the person.prototype which is
// ankit's prototype

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Classes in JavaScript
// With ES6, JavaScript introduced classes as syntactic sugar over the existing prototype-based inheritance system.
//  Classes allow you to create objects and set up inheritance in a more structured way.

// Here we have created an Animal class that initializes a constructor by taking a 'name' as a parameter.
// This 'name' is then assigned to the instance's 'name' property, so every instance of Animal will have a 'name'.
// When the 'speak' method is called, it uses the instance's 'name' to log a message.
class Animal {
  constructor(name) {
    this.name = name; // 'name' is assigned to the instance property 'name'
  }

  // The 'speak' method logs a message with the animal's name.
  speak() {
    console.log(`${this.name} is speaking`); // Logs the name and "is speaking"
  }
}

// Now, we have created a 'Dog' class which extends the 'Animal' class.
// This means 'Dog' inherits the properties and methods of the 'Animal' class, such as the 'name' property and 'speak' method.
class Dog extends Animal {
  constructor(name, breed) {
    // The 'super' keyword is used to call the constructor of the parent class ('Animal').
    // This allows us to pass the 'name' parameter to the parent class, which assigns it to the 'name' property.
    super(name);

    // 'breed' is a new property specific to the 'Dog' class, which is set for each Dog instance.
    this.breed = breed; // 'breed' is assigned to the instance's 'breed' property
  }

  // The 'bark' method is specific to the 'Dog' class and logs a message about the dog's breed and its bark sound.
  bark() {
    console.log(
      `${this.name} can speak and its breed is ${this.breed} and it says woof!`
    );
  }
}

// Now, we create an instance of the 'Dog' class, called 'newDog'.
// We pass the 'name' ("Pursy") and 'breed' ("Golden Retriever") to the constructor.
const newDog = new Dog("Pursy", "Golden Retriever");

// Calling the 'speak' method inherited from the 'Animal' class.
// This will use the 'name' property inherited from Animal and log: "Pursy is speaking"
newDog.speak();

// Calling the 'bark' method specific to the 'Dog' class.
// This will log the message about the dog's breed and its bark sound:
// "Pursy can speak and its breed is Golden Retriever and it says woof!"
newDog.bark();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Constructor Function vs Classes
// Before ES6, we used constructor functions to simulate object-oriented behavior.
// Now with classes, the syntax is cleaner, but the underlying behavior is still the same.
function NewAnimal(name) {
  this.name = name;
}

NewAnimal.prototype.speak = function () {
  console.log(`${this.name} is speaking`);
};

const dog1 = new NewAnimal("Pursy");

dog1.speak(); //Pursy is speaking

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Interview Example:
// Question:
// How would you implement inheritance in JavaScript, and how does __proto__ work?

// Answer: In JavaScript, inheritance is implemented using prototypes.
// Every object has an internal property called __proto__ which points to its prototype.
// If a property or method is not found on the object,
//  JavaScript looks for it on the prototype chain.

// Using ES6 classes, we can implement inheritance with the extends keyword and use
// super() to call the parent class’s constructor and methods. This creates a much cleaner and more
// readable way to work with inheritance compared to the traditional prototype-based inheritance system.
