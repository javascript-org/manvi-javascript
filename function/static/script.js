function sayHello() {
  // function body
  console.log("hello");
}

/**
 * const varName = function(){
 *
 * }
 */
const display = function () {
  console.log("function expression");
};

function functionCalling() {
  sayHello(); // function calling another function
}

function myFunction() {
  let returnValueAsObject = myFunction2();
  console.log(returnValueAsObject);
}

function myFunction2() {
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  return person;
}

function myFunction4() {
  console.log("I am function 4");
}

// function returning another function
function myFunction3() {
  return myFunction4;
}

function myFunction6() {
  // self calling function
  (function selfcall() {
    console.log("self call");
  })();
}

// param function
function myFunction7() {
  let a = 10,
    b = 20;
  let result = sum(a, b);
  console.log(result);
}

// param based function
function sum(x, y) {
  return x + y;
}

function myFunction8() {
  let a = 10,
    b = 2;
  let result = div(10);
  console.log(result);

  result = div(a, b);
  console.log(result);
}

// default param
function div(x, y = 1) {
  return x / y;
}

function myFunction9() {
  let a = 10,
    b = 20;
  let result = sumWithRestParams(10, 20);
  console.log(result);

  let c = 30,
    d = 40;
  result = sumWithRestParams(a, b, c, d, 100, 200);
  console.log(result);
}
function sumWithRestParams(x, y, ...z) {
  console.log(x, y, z);
  let sumValue = 0;
  sumValue = x + y;
  for (const i of z) {
    sumValue = sumValue + i;
  }
  return sumValue;
}

// arrow function

const myArrowFunction = () => {
  console.log("this is an arrow function");
};

const myArrowFunctionWithParams = (a = 1, b, ...z) => {
  console.log(a, b, z);

  let sum = 0;
  sum = a + b;

  for (const i of z) {
    sum = sum + i;
  }
  return sum;
};

function myFunction10() {
  let x = 10,
    y = 20;
  let result = myArrowFunctionWithParams(x, y, 30, 40);
  console.log(result);
}

// higher order function

function myHigherOrderFunction(param1, callback) {
  console.log(`I am higher order function with param ${param1}`);
  let result = callback(20);
  return result;
}

function callbackFunction(param2) {
  console.log(`I am the callback with param: ${param2}`);
  return param2;
}

function myFunction11() {
  let result = myHigherOrderFunction(10, callbackFunction);
  console.log(result);
}

// function currying

const curry = (a) => (b) => {
  return a + b;
};

function myFunction12() {
  let result = curry(5)(2);
  console.log(result);
  result = curry1(5)(2);
  console.log(result);
}

const curry1 = (a) => {
  let curry2 = (b) => {
    return a + b;
  };
  return curry2;
};

// function and variable declartion inside function
function myFunction13() {
  let x = 10;
  m1();
  function m1() {
    console.log("Inside m1", x);
  }
}

// call

function myFunction14() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
    display: function show(cityname) {
      console.log(this.firstName, this.lastName, cityname);
    },
  };
  person1.display("BLR");

  let person2 = {
    firstName: "Tom",
    lastName: "Holland",
    display: function show(cityname) {
      console.log(this.firstName, this.lastName, cityname);
    },
  };

  person2.display("New Delhi");
}

function myFunction15() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  const display = function show(city, state) {
    console.log(this.firstName, this.lastName, city, state);
  };
  display.call(person1, "Noida", "Up");

  let person2 = {
    firstName: "Tom",
    lastName: "Holland",
  };
  display.call(person2, "Blr", "Ka");
}

// apply
function myFunction16() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  const display = function show(city, state) {
    console.log(this.firstName, this.lastName, city, state);
  };
  display.apply(person1, ["Noida", "Up"]);

  let person2 = {
    firstName: "Tom",
    lastName: "Holland",
  };
  display.apply(person2, ["Mumbai", "Mh"]); // always args goes as array
}

// function borrowing with call and apply
function myFunction17() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
    display: function show(city, state) {
      console.log(this.firstName, this.lastName, city, state);
    },
  };

  person1.display.call(person1, "Noida", "Up");
  person1.display.apply(person1, ["Greater Noida", "Up"]);

  let person2 = {
    firstName: "Tom",
    lastName: "Holland",
  };
  person1.display.call(person2, "Mumbai", "Mh");
  person1.display.apply(person2, ["Navi Mumbai", "Mh"]);
}

// bind
// binding data and code in a single unit
function myFunction18() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  const display = function show(city, state) {
    console.log(this.firstName, this.lastName, city, state);
  };
  const bindDisplay = display.bind(person1, "Noida", "Up");
  bindDisplay();
}

function myFunction19()
{
   let arr = [75, 80];
   let student = {
    firstName: 'John',
    lastName: 'Doe'
   }
   let roll = 23;
   destructuredParam(arr, student, roll);
}

function destructuredParam([x,y],{firstName, lastName}, roll)
{
  console.log(`${roll} has marks: ${x} and ${y}`);
  console.log(`${firstName} and ${lastName}`);
}