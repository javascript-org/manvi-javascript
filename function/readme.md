# Contents

- function
- function expression
- function calling another function
- function return values
- function returning a function
- self calling function
- parametrized function
- defualt parameter
- rest parameter with function
- arrow function
- higher order function
- callback function
- function currying
- bind, call, apply
- function pass by value vs pass by reference
- scope & closures


## Functions

In JavaScript, a function is a block of reusable code that performs a specific task or calculates a value. Functions are defined using the `function` keyword, followed by the function name, a set of parentheses for parameters (optional), and curly braces `{}` to enclose the function body.

Here's an example of a basic JavaScript function that adds two numbers:

```javascript
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
```

In the above example, the function is named `addNumbers` and it takes two parameters `num1` and `num2`. Inside the function body, the two parameters are added together and stored in the `sum` variable. The `return` statement is used to specify the value that the function will output.

To use this function, you can simply call it and provide the arguments (values) for the parameters:

```javascript
var result = addNumbers(5, 3);
console.log(result); // Output: 8
```

In this case, the function is called with `5` and `3` as arguments, which get assigned to `num1` and `num2` respectively. The function then calculates the sum (`5 + 3 = 8`) and returns it. The returned value is stored in the `result` variable, which is then printed to the console.

## Function Expression

In JavaScript, a function expression is another way to define a function. Instead of using the `function` keyword for function declaration, a function expression assigns a function to a variable or a property of an object.

Here's an example of a function expression:

```javascript
var multiplyNumbers = function(num1, num2) {
  var product = num1 * num2;
  return product;
};
```

In the above example, the function expression assigns an anonymous function to the variable `multiplyNumbers`. This function takes two parameters `num1` and `num2`, multiplies them together, and returns the product.

You can use the function expression in the same way as a regular function:

```javascript
var result = multiplyNumbers(5, 3);
console.log(result); // Output: 15
```

The function expression is called with `5` and `3` as arguments, and the product (`5 * 3 = 15`) is returned and stored in the `result` variable.

Function expressions are useful in scenarios where you want to assign a function to a variable dynamically or pass it as an argument to another function. They provide flexibility and enable the creation of anonymous functions that don't need a specific name.

It's worth mentioning that function expressions have some differences compared to function declarations, such as hoisting behavior. Function declarations are hoisted, meaning they are moved to the top of the scope before the code is executed, while function expressions are not hoisted.

## Function calling another Function

In JavaScript, you can call one function from another function by simply using the function name followed by parentheses and any necessary arguments. Here's an example:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

function welcome() {
  console.log("Welcome to our website!");
}

function greetAndWelcome(name) {
  greet(name);
  welcome();
}

greetAndWelcome("John");
```

In the above code, we have three functions: `greet`, `welcome`, and `greetAndWelcome`. The `greetAndWelcome` function takes a `name` parameter. Inside the `greetAndWelcome` function, we call the `greet` function and pass the `name` argument to it. Then, we call the `welcome` function.

When you run `greetAndWelcome("John")`, it will output:

```
Hello, John!
Welcome to our website!
```

The `greetAndWelcome` function acts as a higher-level function that calls other functions to perform specific tasks. By calling one function from another, you can modularize your code, reuse functions, and create more complex functionality.

You can also pass values returned by one function as arguments to another function. Here's an example:

```javascript
function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function multiplyAndAdd(num1, num2, num3) {
  var product = multiply(num1, num2);
  var sum = add(product, num3);
  return sum;
}

var result = multiplyAndAdd(2, 3, 4);
console.log(result); // Output: 10
```

In this example, the `multiplyAndAdd` function first calls the `multiply` function, passing `num1` and `num2` as arguments. The returned value is stored in the `product` variable. Then, the `add` function is called, passing the `product` and `num3` as arguments. The result is returned and stored in the `result` variable, which is printed to the console.

By calling functions from other functions and passing values between them, you can create more complex and reusable code structures in JavaScript.

## Function returning values or object

In JavaScript, you can return an object from a function. This allows you to encapsulate related data and functionality within an object and use it in different parts of your code. Here's an example:

```javascript
function createPerson(name, age) {
  var person = {
    name: name,
    age: age,
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
  
  return person;
}

var john = createPerson("John Doe", 25);
john.greet(); // Output: Hello, my name is John Doe and I am 25 years old.
```

In the above code, the `createPerson` function takes `name` and `age` as parameters. It creates an object `person` with properties `name` and `age`, and a method `greet` that logs a greeting message to the console, using the object's `name` and `age` properties.

The `createPerson` function then returns the `person` object. When we invoke `createPerson("John Doe", 25)`, it creates a new person object with the provided name and age. We assign it to the `john` variable. Finally, we can call the `greet` method on the `john` object, resulting in the greeting message being printed to the console.

Returning an object from a function allows you to create and initialize objects with specific properties and behaviors in a reusable way. You can create multiple instances of objects by calling the function with different arguments, as demonstrated in the example above.

Keep in mind that when you return an object from a function, you can access its properties and methods using dot notation (e.g., `object.property`, `object.method()`).


## Function Returning Function

In JavaScript, you can return a function from another function. This concept is known as a "function returning a function" or "higher-order functions." It allows you to create functions that generate and return new functions based on certain conditions or parameters. Here's an example:

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

var double = createMultiplier(2);
var triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

In the above code, the `createMultiplier` function takes a `multiplier` parameter. It returns an anonymous function that takes a `number` parameter and multiplies it by the `multiplier` value. This returned function becomes the result of the `createMultiplier` function.

We then call `createMultiplier(2)` and assign the returned function to the `double` variable. Similarly, `createMultiplier(3)` is assigned to the `triple` variable.

When we invoke `double(5)`, it calls the returned function from `createMultiplier(2)` with `number` as `5`, resulting in `5 * 2 = 10`. The same logic applies when invoking `triple(5)`, which returns `5 * 3 = 15`.

By returning functions from other functions, you can create specialized functions with different behavior based on the input parameters. This pattern is widely used in JavaScript for various purposes, such as creating closures, implementing currying, and building modular code structures.

Remember that the returned function can access variables from its lexical scope, even after the outer function has finished executing. This behavior is known as closures and is a powerful aspect of JavaScript.


## Self Calling/Invoking Function

In JavaScript, a self-invoking function, also known as an immediately invoked function expression (IIFE), is a function that is executed immediately after it is defined. It is a way to create a private scope for your code and prevent any variables or functions within the IIFE from polluting the global scope.

Here's an example of a self-invoking function:

```javascript
(function() {
  // Code to be executed immediately
  console.log("This is a self-invoking function!");
})();
```

In the above code, we define an anonymous function enclosed within parentheses `(function() { ... })`. Immediately after the function definition, we append `()` to invoke it immediately.

When the JavaScript interpreter encounters this code, it will execute the function without the need for a separate function call. In this case, it logs the message "This is a self-invoking function!" to the console.

Self-invoking functions are often used to create a private scope and encapsulate code. They allow you to define variables and functions within the function body without exposing them to the global scope. This can help prevent naming conflicts and improve code organization.

Additionally, self-invoking functions can accept arguments just like regular functions. Here's an example:

```javascript
(function(name) {
  console.log("Hello, " + name + "!");
})("John");
```

In this case, we pass the argument `"John"` when invoking the self-invoking function. It logs the greeting message "Hello, John!" to the console.

Self-invoking functions are a useful technique in JavaScript, especially when you want to create a temporary scope or execute code immediately without cluttering the global scope.

## Function Parameters

In JavaScript, you can define functions that accept parameters, allowing you to pass values into the function for processing or manipulation. These parameters provide a way to make your functions more flexible and reusable. Here's an example of a parameterized function:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!
greet("Alice"); // Output: Hello, Alice!
```

In the above code, the `greet` function is defined with a single parameter `name`. When the function is called with an argument, such as `greet("John")`, the value `"John"` is passed as the argument to the `name` parameter inside the function. The function then logs the greeting message with the provided name to the console.

You can define functions with multiple parameters by separating them with commas. Here's an example:

```javascript
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  console.log("The sum is: " + sum);
}

addNumbers(5, 3); // Output: The sum is: 8
addNumbers(10, 2); // Output: The sum is: 12
```

In this case, the `addNumbers` function takes two parameters, `num1` and `num2`. It calculates their sum and logs the result to the console.

When calling a parameterized function, you provide the arguments in the same order as the function's parameter list. The values passed as arguments are assigned to the corresponding parameters inside the function.

Parameterized functions allow you to create more dynamic and reusable code by accepting inputs and processing them based on the provided values. You can pass different values to the function each time you call it, allowing you to perform similar operations on different data.

## Default Parameter in Function

In JavaScript, you can define default parameters for function parameters. Default parameters allow you to specify a default value that is used when an argument is not provided or is `undefined` when calling the function. This feature provides a convenient way to handle missing or optional arguments. Here's an example:

```javascript
function greet(name = "Anonymous") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Anonymous!
greet("John"); // Output: Hello, John!
```

In the above code, the `greet` function is defined with a `name` parameter that has a default value of `"Anonymous"`. If no argument is provided when calling the function, or if `undefined` is passed, the default value `"Anonymous"` is used instead.

When we call `greet()` without an argument, it uses the default parameter value, resulting in the message "Hello, Anonymous!" being logged to the console. When we call `greet("John")`, the provided argument `"John"` is used, and the message "Hello, John!" is logged.

Default parameters are especially useful when you want to handle optional arguments or provide fallback values. You can have multiple parameters with default values, and the default parameters can also be expressions or function calls. Here's an example with multiple default parameters:

```javascript
function createPerson(name = "Anonymous", age = 0) {
  var person = {
    name: name,
    age: age
  };
  console.log(person);
}

createPerson(); // Output: { name: "Anonymous", age: 0 }
createPerson("John"); // Output: { name: "John", age: 0 }
createPerson("Alice", 25); // Output: { name: "Alice", age: 25 }
```

In this example, the `createPerson` function has two parameters, `name` and `age`, both with default values. If either or both arguments are omitted when calling the function, the default values are used. The function creates a `person` object with the provided or default values and logs it to the console.

Default parameters provide a convenient way to handle missing or optional arguments and make your functions more flexible and robust.

## Rest Parameters in Function

In JavaScript, you can use the rest parameter syntax to define a function parameter that captures multiple arguments into an array. The rest parameter allows you to pass an arbitrary number of arguments to a function without explicitly defining each argument. Here's an example:

```javascript
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
```

In the above code, the `sum` function uses the rest parameter syntax by prefixing the `numbers` parameter with three dots (`...`). This indicates that `numbers` will capture any number of arguments passed to the function.

Inside the function, the `numbers` parameter behaves like an array, allowing you to perform array operations on it. In this case, we iterate over the `numbers` array using a `for...of` loop and accumulate the sum of the values in the `total` variable.

When we call `sum(1, 2, 3)`, the function receives the arguments `1`, `2`, and `3`, and the rest parameter `numbers` captures them as an array `[1, 2, 3]`. It calculates and returns the sum, which is `6`.

Similarly, when we call `sum(4, 5, 6, 7, 8)`, the rest parameter `numbers` captures the arguments as an array `[4, 5, 6, 7, 8]`. It computes and returns the sum, which is `30`.

The rest parameter allows you to create functions that can handle a variable number of arguments, providing flexibility and conciseness in your code.

It's important to note that the rest parameter must be the last parameter in the function's parameter list, as it captures all remaining arguments passed to the function.

## Arrow Functions.

In JavaScript, arrow functions provide a concise syntax for defining functions. They are also referred to as "fat arrow" functions. Arrow functions have a shorter syntax compared to traditional function expressions and also have some differences in how they handle the `this` keyword. Here's an example of an arrow function:

```javascript
// Traditional function expression
function multiply(a, b) {
  return a * b;
}

// Arrow function
const multiply = (a, b) => a * b;
```

In the above code, we define a traditional function expression `multiply` that takes two parameters `a` and `b` and returns their product using the `return` keyword.

The equivalent arrow function `multiply` has a more concise syntax. The parameters `a` and `b` are enclosed in parentheses `(` and `)`, followed by the arrow operator `=>`, and the expression `a * b` without the need for the `return` keyword. Arrow functions automatically return the result of the expression without explicitly using `return`.

Arrow functions are particularly useful when writing short and inline functions. They can be assigned to variables or used directly as function arguments. Here are a few more examples:

```javascript
// Traditional function expression
const greet = function(name) {
  console.log("Hello, " + name + "!");
};

// Arrow function
const greet = name => console.log("Hello, " + name + "!");

greet("John"); // Output: Hello, John!

// Traditional function expression
const square = function(x) {
  return x * x;
};

// Arrow function
const square = x => x * x;

console.log(square(5)); // Output: 25
```

In these examples, we define both traditional function expressions and arrow functions for the `greet` and `square` functions. The arrow functions provide a more concise syntax without sacrificing functionality.

Arrow functions also have lexical scoping for the `this` keyword, meaning that they inherit the `this` value from their surrounding context. This behavior is different from traditional functions that have their own `this` value determined by how they are called. Lexical `this` in arrow functions can be beneficial when dealing with callbacks, closures, or method definitions.

However, it's important to note that arrow functions do not have their own `this`, `arguments`, `super`, or `new.target` bindings. If you need to access these values, you would need to use traditional function expressions instead.

Arrow functions have become popular in JavaScript for their concise syntax and lexical scoping, making them a convenient choice for many scenarios.

## Higher Order Function & Callback Function

In JavaScript, higher-order functions are functions that can accept other functions as arguments and/or return functions as their results. They allow you to abstract and manipulate behavior, enabling powerful and flexible programming techniques. Higher-order functions are a fundamental concept in functional programming. Here are a few examples of higher-order functions:

1. Function accepting a function as an argument:

```javascript
function higherOrderFunction(callback) {
  // Perform some operations
  // ...
  // Call the callback function
  callback();
}

function callbackFunction() {
  console.log("Callback function called");
}

higherOrderFunction(callbackFunction);
```

In this example, `higherOrderFunction` is a higher-order function that takes a function `callback` as an argument. Inside `higherOrderFunction`, it performs some operations and then calls the `callback` function. We define a `callbackFunction` and pass it as an argument when calling `higherOrderFunction`. The `callbackFunction` is executed within `higherOrderFunction`, resulting in the message "Callback function called" being logged to the console.

2. Function returning a function:

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```

In this example, `createMultiplier` is a higher-order function that returns a new function. The returned function takes a `number` parameter and multiplies it by the `multiplier` value. We call `createMultiplier(2)` and assign the returned function to the `double` variable. When we call `double(5)`, it multiplies `5` by `2` and returns `10`.

Higher-order functions provide a powerful way to abstract and compose behavior in JavaScript. They allow you to create reusable and flexible code by separating concerns and enabling function composition.

Common higher-order functions in JavaScript include `map`, `filter`, and `reduce`, which are used extensively with arrays. These functions accept a callback function and apply it to each element of an array, allowing for powerful data transformations.

Here's an example using `map`:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this case, `map` is a higher-order function that takes a callback function and applies it to each element of the `numbers` array. It returns a new array with the results of the callback function applied to each element. The callback function multiplies each number by `2`, resulting in the `doubledNumbers` array.

Higher-order functions open up a wide range of possibilities for creating flexible and reusable code. They are a key concept in functional programming and can greatly enhance your JavaScript programming skills.

## Function Currying

Function currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The curried functions can be called either all at once with all the arguments or one at a time, allowing for partial application of arguments. Currying enables code reusability and creates more flexible and composable functions. Here's an example of function currying in JavaScript:

```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}

const addTwo = add(2);
console.log(addTwo(3)); // Output: 5

console.log(add(4)(5)); // Output: 9
```

In this example, the `add` function takes a parameter `a` and returns an inner function that takes another parameter `b` and returns the sum of `a` and `b`. By calling `add(2)`, we create a curried function `addTwo` that adds `2` to any given number. When we call `addTwo(3)`, it adds `2` (from the outer function) and `3` (from the inner function) to produce the result `5`.

Similarly, we can directly call `add(4)(5)` without assigning it to a separate variable. It performs the addition of `4` and `5` and returns the result `9`.

Currying allows us to create specialized functions by fixing some arguments in advance and providing flexibility to provide the remaining arguments later. It helps in code reuse and promotes the creation of more modular and composable functions.

## call, apply, bind

### call

In JavaScript, the `call()` method is a function method that allows you to invoke a function and explicitly specify the `this` value and arguments to be passed to the function. It is a way to borrow a method from one object and use it on another object. The `call()` method is called on a function and accepts the `this` value as the first argument, followed by any arguments to be passed to the function. Here's an example:

```javascript
function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "John" };

sayHello.call(person, "Hello"); // Output: Hello, John
```

In this example, we have a function `sayHello` that takes a `greeting` parameter and logs a message combining the greeting and a `name` property of the `this` object.

Using `call()`, we invoke the `sayHello` function on the `person` object. We pass `person` as the first argument to `call()` to set the `this` value inside the function to `person`. We also pass the `"Hello"` argument to `call()`, which is used as the `greeting` parameter when calling the function. The result is the message "Hello, John" logged to the console.

The `call()` method is useful when you want to invoke a function in the context of a specific object and pass arguments explicitly. It allows you to control the value of `this` inside the function and pass arguments one by one instead of as an array.

In addition to `call()`, JavaScript provides similar methods like `apply()` and `bind()` for invoking functions with a specific `this` value and arguments.

### apply 

In JavaScript, the `apply()` method is a function method that allows you to invoke a function and explicitly specify the `this` value and an array-like or iterable object as the arguments to be passed to the function. The `apply()` method is similar to the `call()` method, but it accepts an array-like or iterable object as the second argument instead of individual arguments. Here's an example:

```javascript
function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "John" };
const args = ["Hello"];

sayHello.apply(person, args); // Output: Hello, John
```

In this example, we have the same `sayHello` function and `person` object as in the previous example. Instead of passing the argument directly to `call()`, we create an array-like object `args` that contains the arguments to be passed to the function.

Using `apply()`, we invoke the `sayHello` function on the `person` object. We pass `person` as the first argument to `apply()` to set the `this` value inside the function to `person`. We also pass `args` as the second argument, which is an array-like object containing the arguments for the function. The result is the message "Hello, John" logged to the console.

The `apply()` method is useful when you have arguments stored in an array-like or iterable object and want to invoke a function with those arguments. It allows you to control the value of `this` inside the function and pass arguments as an array-like object.

### bind

In JavaScript, the `bind()` method is a function method that allows you to create a new function with a specified `this` value and, optionally, preset arguments. The `bind()` method returns a new function that, when called, has its `this` value set to the provided value, and the specified arguments are preset. Here's an example:

```javascript
function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "John" };

const sayHelloToPerson = sayHello.bind(person, "Hello");
sayHelloToPerson(); // Output: Hello, John
```

In this example, we have the `sayHello` function and the `person` object as before. We use `bind()` to create a new function called `sayHelloToPerson`. The first argument passed to `bind()` is the value of `this` inside the new function, which is set to the `person` object. The second argument is the preset argument for the `greeting` parameter, which is set to `"Hello"`.

When we call `sayHelloToPerson()`, it invokes the new function with the `this` value set to `person` and the preset argument `"Hello"`. The result is the message "Hello, John" logged to the console.

The `bind()` method is useful when you want to create a new function that has a specific `this` value and, optionally, preset arguments. It allows you to create a function with a fixed context and arguments, which can be helpful in scenarios where you need to pass a callback function with a specific context to another function or event handler.

Here's another example that demonstrates the use of `bind()`:

```javascript
const multiply = function(x, y) {
  return x * y;
};

const double = multiply.bind(null, 2);

console.log(double(5)); // Output: 10
```

In this example, we have a generic `multiply` function. We use `bind()` to create a new function called `double` with the `this` value set to `null` (since it's not used inside the function) and the preset argument `2` for the `x` parameter. When we call `double(5)`, it multiplies `5` with the preset `2` and returns `10`.

The `bind()` method provides a powerful way to create new functions with a specific `this` value and preset arguments, allowing for more flexible function composition and reuse.

### call vs apply vs bind

`call()`, `apply()`, and `bind()` are function methods in JavaScript that allow you to control the `this` value inside a function and pass arguments. Although they have similarities, they differ in how they accept arguments and their return values.

Here's a summary of the differences between `call()`, `apply()`, and `bind()`:

1. `call(thisArg, arg1, arg2, ...)`: The `call()` method is used to invoke a function with a specific `this` value and individual arguments passed directly. It accepts the `this` value as the first argument (`thisArg`), followed by the function arguments separated by commas. It immediately invokes the function and returns its result.

Example:
```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "John" };
greet.call(person, "Hello"); // Output: Hello, John
```

2. `apply(thisArg, [argsArray])`: The `apply()` method is similar to `call()`, but it accepts the `this` value as the first argument (`thisArg`), and the arguments are passed as an array-like or iterable object (`argsArray`). It immediately invokes the function and returns its result.

Example:
```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "John" };
const args = ["Hello"];
greet.apply(person, args); // Output: Hello, John
```

3. `bind(thisArg, arg1, arg2, ...)`: The `bind()` method returns a new function with a specific `this` value and optional preset arguments. It accepts the `this` value as the first argument (`thisArg`), followed by the arguments that are preset for the function. It does not immediately invoke the function but returns a new function that can be called later.

Example:
```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "John" };
const greetPerson = greet.bind(person, "Hello");
greetPerson(); // Output: Hello, John
```

The key difference between `call()` and `apply()` is how they accept arguments: `call()` accepts arguments individually, while `apply()` accepts arguments as an array-like or iterable object. Both methods immediately invoke the function.

On the other hand, `bind()` does not immediately invoke the function. Instead, it returns a new function with the specified `this` value and optional preset arguments. The returned function can be called later.

These methods are useful for controlling the context (`this` value) and arguments when invoking functions. The choice between them depends on whether you have the arguments as individual values or an array-like object, and whether you want to immediately invoke the function or create a new function for later use.


## Pass By Value vs Pass By Reference

In JavaScript, the concept of pass-by-value and pass-by-reference is often a topic of confusion. However, JavaScript is a pass-by-value language, but with some nuances when it comes to objects (including arrays) and functions. Let's explore the differences:

1. Pass-by-Value:
   - When you pass a primitive data type (e.g., number, string, boolean) as a function argument, a copy of the value is made and assigned to a new variable within the function's scope.
   - Any modifications to the value inside the function do not affect the original value outside the function.
   - Reassigning the variable inside the function will not change the value of the variable outside the function.

Example:

```javascript
function modifyValue(value) {
  value = 10;
  console.log(value); // Output: 10
}

let num = 5;
modifyValue(num);
console.log(num); // Output: 5
```

In this example, `num` is passed to the `modifyValue` function. Although `value` is modified inside the function, the original value of `num` remains unchanged.

2. Pass-by-Reference (for objects and arrays):
   - When you pass an object or an array as a function argument, a reference to that object or array is passed, rather than a copy of the entire object or array.
   - Modifications made to the object or array inside the function affect the original object or array outside the function.
   - However, reassigning the object or array variable inside the function will not change the reference of the original variable outside the function.

Example:

```javascript
function modifyArray(arr) {
  arr.push(4);
  console.log(arr); // Output: [1, 2, 3, 4]
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4]
```

In this example, `myArray` is passed to the `modifyArray` function. The function modifies the array by adding an element. As arrays are passed by reference, the changes made inside the function are reflected in the original `myArray` variable.

It's important to note that although objects and arrays are passed by reference in JavaScript, the reference itself is still passed by value. If you were to reassign the entire object or array variable inside the function, it would only affect the local variable and not the original variable outside the function.

In summary, JavaScript is pass-by-value, but when it comes to objects and arrays, their references are passed by value. This distinction can sometimes lead to confusion when working with mutable objects.
