// 🥈 1️⃣ Higher-Order Functions (HOF)
// Definition: A function that either:

// Takes another function as an argument, or
// Returns a function.

function shoutout(name) {
  return name.toUpperCase();
}

function greet(name, callback) {
  console.log(`Hello, ` + callback(name));
}

greet("Ankit", shoutout); // Hello, ANKIT

// 🥈 2️⃣ Callback Functions

// Definition: A function passed as an argument to another function and called later.

const fetchData = (callback) => {
  setTimeout(() => {
    console.log("Data Fetched!");
    callback();
  }, 2000);
};

const showMessage = () => {
  console.log("Showing message After Fetching the Data");
};

fetchData(showMessage);

// Output:
// Data fetched!
// Showing message after fetching data!

// 🥈 3️⃣ Closures

// Definition: A function that remembers its outer variables even after the outer function has finished executing.

const outer = () => {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
};

//Other Example

// Closure that tracks score in a game:

function gameScore() {
  let score = 0;

  return {
    increase: function (points) {
      score += points;
      console.log(`🏆 Score: ${score}`);
    },

    decrease: function (points) {
      score -= points;
      console.log(`❌ Score: ${score}`);
    },

    reset: function () {
      score = 0;
      console.log(`🔄 Score reset to ${score}`);
    },
  };
}

const player = gameScore();

player.increase(10); //🏆 Score: 10
player.decrease(3); //❌ Score: 7
player.reset(); //🔄 Score reset to 0

// 🥈 4️⃣ Currying
// Definition: Transforming a function with multiple arguments into a series of functions with single arguments.

function division(a) {
  return function (b) {
    return a / b;
  };
}

const multiply = (a) => (b) => a * b;

console.log(multiply(2)(3)); //Output : 6

console.log(division(10)(5)); //Output : 2

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); //Output:-6

// 🥈 5️⃣ Debouncing
// Definition:Debounce is a technique used to limit the rate at which a function is executed.
//  EG:-Wait until the user stops doing something for a certain time before running a function (like typing in search).

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function search(value) {
  console.log(`Searching for: ${value}`);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("A");
debouncedSearch("An");
debouncedSearch("Ank");
debouncedSearch("Ankit");
// ✅ Only logs once: "Searching for: Ankit" (after 500ms pause)

// 🥈 6️⃣ Throttling
// Definition: Limit how often a function runs. Run the function once every fixed interval.

function throttle(func, limit) {
  let isThrottle;

  return function (...args) {
    if (!isThrottle) {
      func.apply(this, args);
      isThrottle = true;  
      setTimeout(() => {
        isThrottle = false;
      }, limit);
    }
  };
}
 
function handleScroll() {
  console.log("Scrolling...");
}

const optimizedScrolling = throttle(handleScroll, 1000);
optimizedScrolling();

// 🥈 7️⃣ Recursion
// Definition: A function that calls itself.

function countDown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);

  countDown(n - 1);
}

countDown(5); // 5, 4, 3, 2, 1, Done!
