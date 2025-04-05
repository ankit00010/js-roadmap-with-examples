// Let's dive into Asynchronous JavaScript concepts, including callbacks, promises,
//  async/await, the event loop, and the differences between microtasks and macrotasks.
//  We'll also go over an interview example and code a function that uses async/await.

// 1. Callbacks
// A callback is a function passed into another function as an
// argument and is executed after the completion of an operation, usually asynchronous.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 2000);
}

fetchData(function (message) {
  console.log(message); // Output after 2 seconds: Data fetched successfully
});

//   In this example, fetchData takes a callback function that is executed after a 2-second delay.

// 2. Promises
// A Promise is a more structured way to handle asynchronous code. A promise is an object that represents the eventual
// completion (or failure) of an asynchronous operation and its resulting value.

function newPromiseFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This Data is fetched...");
    }, 2000);
  });
}

newPromiseFetchData()
  .then((message) => {
    console.log("Data =>", message);
  })
  .catch((erorr) => {
    console.log(`Error Message`, erorr);
  });

//   resolve is called when the operation is successful.

// reject is called when the operation fails.

// You can chain .then() to handle the result and .catch() to handle errors.

// 3. Async/Await
// async and await make asynchronous code look and behave more like synchronous code.
// async makes a function return a promise, and
//  await pauses the execution of an async function until a promise is resolved...

async function asyncFetchData() {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Asynchronoues eg");
      resolve("Data Fetched Succesfully!");
    }, 3000);
  });

  console.log(result);
}

asyncFetchData();

// async makes the function return a promise.

// await pauses the function execution until the promise is resolved.

/*

4. Event Loop
The Event Loop is the mechanism that handles asynchronous operations in JavaScript.
 It continuously checks the call stack and the message queue to determine whether or not the code in the queue should be executed.

Steps of the Event Loop:
Call Stack: JavaScript executes all code that is synchronous in a stack-like structure.

Message Queue: Asynchronous code (like setTimeout, Promises) gets placed in the message queue when it is ready to be executed.

The Event Loop continuously checks if the call stack is empty. 
When it is, it pushes the next task from the message queue to the call stack.

Important Types of Tasks:
Macrotasks: These are large tasks like setTimeout, setInterval, or I/O operations.

Microtasks: These are smaller tasks, such as promises (e.g., .then() and .catch()).

Microtasks are executed before macrotasks, even if the macrotask was added to the queue first.

5. Microtasks vs Macrotasks
Macrotasks: Things like setTimeout, setInterval, and I/O operations.

Microtasks: Things like promise .then(), .catch(), and process.nextTick().

Execution Order:
The event loop checks if the call stack is empty.

If the call stack is empty, it processes all microtasks in the queue.

Then, it processes one macrotask (e.g., setTimeout).

This continues in a loop.

6. Interview Example:
Question:
Explain the Event Loop in JavaScript.

Answer:
The Event Loop is a critical part of JavaScript’s concurrency model.
 It allows JavaScript to handle asynchronous operations (like I/O, timers, and events) while still running synchronously.
  The event loop manages the call stack and message queue.

Call Stack: Contains the currently executing functions.

Message Queue: Holds asynchronous tasks that are waiting to be executed.

When a function is called, it is pushed onto the call stack. Once it completes, it is removed from the stack. 
If there are asynchronous operations like setTimeout or a promise, they are placed in the message queue. 
The event loop checks if the call stack is empty and then processes tasks from the message queue.

Microtasks (e.g., promises) are executed first, before macrotasks (e.g., setTimeout).



*/
