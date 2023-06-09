function greet() {
  console.log("greeting for you");
}
greet();

function welcome(firstName, lastName) {
  console.log(firstName, lastName);
}

welcome("Hello");
welcome("Hello", "World");
welcome();

function display(x, y = 2) {
  console.log(x, y);
}

display();
display(3);
display(3, 4);

// function expression
const f1 = function () {
  console.log("greet");
};
f1();

const f2 = function (x, y = 2) {
  console.log("greet", x, y);
};
f2();
f2(10, 4);

// arrow functions
const a1 = () => {
  console.log("this is a arrow function");
};

a1();

const a2 = (x, y = 2) => {
  console.log("this is a arrow function", x, y);
};

a2();
a2(10);
a2(10, 4);

// self calling function

(function greet() {
  console.log("I am self calling");
})();

(function greet(x, y = 2) {
  console.log("I am self calling", x, y);
})(10, 4);

function objectExample() {
  let person = {
    firstName: "John",
    lastName: "Doe",
  };
  console.log(person);
  console.log(person.firstName); // displaying using .
  console.log(person["firstName"]); // diplaying using []
  console.log("lastName" in person); // chekcing if it is present or not

  person.uid = "2445"; // adding a new param
  console.log(person);

  function display(state, city) {
    console.log(this.firstName, this.lastName, state, city);
  }
  display("ka", "blr"); // normal invocation

  person.fullName = display;

  person.fullName("tn", "chhenai"); // invocation with object

  for (let key in person) {
    console.log(key, person[key]);
  }
}

objectExample();

// return values of function

function retVal() {
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    salary: 3456.78,
  };

  return person;
}

function callForReturnVal() {
  let result = retVal();
  console.log(result);
}

callForReturnVal();

// function returning a function
const f11 = function () {
  console.log("outer function");
  function inner() {
    console.log("inner");
  }
  return inner;
};

let f12 = f11();
console.log(f12); // source code of inner
f12();

// function currying
console.log("function currying");
f11()();

// function closure

let c = 10;
const multiply = function (a) {
  console.log("in multiply");
  function multiplier(b) {
    // c: global scope, b : function scope, a : parent scope = lexical scope
    console.log(a, b, c);
    console.log(a * b);
  }
  return multiplier;
};
console.log("function closure");
multiply(2)(3);

let double = multiply(2);
double(4);

let tripple = multiply(3);
tripple(5);

// other way of fucntion currying or closure using arrow function
const multiply1 = (a) => (b) => {
  console.log(a * b);
};
console.log(multiply1);
double = multiply1(2);
console.log(double);
double(3);
multiply1(2)(3);
