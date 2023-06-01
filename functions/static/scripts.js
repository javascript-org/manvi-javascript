// defining function
function greet() {
  console.log("Welcome John");
}

function btnHandler1() {
  greet(); // calling function
}

// assigning function to a varible or const
const greetMe = function greet1() {
  console.log("Welcome John. Function assignment");
};

function btnHandler2() {
  console.log(greetMe);
  greetMe(); // calling function
}

// function expression
const greetMe1 = function () {
  console.log("Welcome John. Function Expression. Anonymous");
};

function btnHandler3() {
  console.log(greetMe1);
  greetMe1(); // calling function
}

// arrow function
const greetMe2 = () => {
  console.log("Welcome John. Arrow Function");
};

function btnHandler4() {
  console.log(greetMe2);
  greetMe2(); // calling function
}

// self calling
function btnHandler5() {
  function greet() {
    console.log("Welcome John 1, Self calling");
  }

  (function greet() {
    console.log("Welcome John, Self calling");
  })(); //declaration and calling together
}

// w3school html (without css)
// returning values
function btnHandler6() {
  let person1 = getPersonInfo();
  console.log(person1);
  person1.display();
  console.log(person1.firstName);
}

function getPersonInfo() {
  let i = 10;
  let name = "John Doe";

  let person1 = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName, this.lastName);
    },
  };

  return person1;
}

// return a function
function btnHandler7() {
  let resultFunction = parentFunction();
  console.log(resultFunction);
  resultFunction()();

  console.log("invokation chaining");
  parentFunction()()();
}

function parentFunction() {
  console.log("parent function");
  return childFunction;
}

function childFunction() {
  let result = 12 + 3;
  console.log("child function", result);
  return childFunction1;
}

function childFunction1() {
  let result = 12 + 4;
  console.log("child function1", result);
}

function btnHandler8() {
  greet2("John");
  greet2("Alex");
  greet2("Jason", 3);
}

// parameterized function
function greet2(name) {
  console.log(`Welcome ${name}`);
}

// parameterized function
function greet2(name, floor = 1) {
  // default parameters
  console.log(`Welcome ${name}. Your seat booked at ${floor}`);
}

// rest parameters function
function studentSubjects(name, standard, ...subjects) {
  console.log(subjects, subjects.length);
  console.log(subjects[0]);
  console.log(
    `student ${name} should learn subjects: ${subjects} in std ${standard}`
  );
}
/**
 * function expression
 * function assignment
 * arrow function
 * function returning function
 * self calling function
 */

function btnHandler9() {
  const greetMe = (function greet(name, floor = 1) {
    console.log(`Welcome ${name}. Your seat booked at ${floor}`);
  })(function greet(name, floor = 1) {
    console.log(`Welcome ${name}. Your seat booked at ${floor}`);
  })("John");

  (function greet(name, floor = 1) {
    console.log(`Welcome ${name}. Your seat booked at ${floor}`);
  })("John", 4);
}

// parametrized function returing function
// function currying
function btnHandler10() {
  let resultFunction = multiply(2);
  console.log(`got from parent: ${resultFunction} `);
  let result = resultFunction(3);
  console.log(result);

  result = multiply(2)(3);
  console.log(result);
}

function multiply(a) {
  console.log(a);
  function multiplyWith(b = 10) {
    // default parameter
    console.log(a, b);
    return a * b;
  }
  return multiplyWith;
}

function btnHandler11() {
  studentSubjects("John");
  studentSubjects("Alex", "10", "C++", "Java", "SQL");
}

function higherOrderFunction1(x, y, callbackFunction) {
  let result = x + y;
  let squareValue = callbackFunction(result);
  return squareValue;
}

function squareValueFunction(value) {
  return Math.pow(value, 2);
}

function btnHandler12() {
  let result = higherOrderFunction1(8, 2, squareValueFunction);
  console.log(result);
}

function multiplier(a) {
  function multiply(b) {
    return a * b;
  }

  return multiply;
}

function btnHandler13() {
  let resultMultiplier = multiplier(2);
  console.log(resultMultiplier);
  let result = resultMultiplier(5);
  console.log(result);
  result = multiplier(2)(5);
  console.log(result);
}

function destructuringValues() {
  let arr = ["Hi", "Hello"];
  let a = arr[0];
  let b = arr[1];
  console.log(a, b);

  let [x, y] = arr;
  console.log(x, y);

  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  let { firstName, lastName } = person;
  console.log(person.firstName, person["lastName"]);
  console.log(firstName, lastName);
}

function btnHandler14() {
  destructuringValues();
}

function destrcuturedParams(x, y, [a, b], { firstName, lastName }) {
  console.log(x, y, a, b, firstName, lastName);
}

function btnHandler15() {
  let x = 10;
  let y = 20;
  let arr = [30, 40];
  let person = {
    firstName: "John",
    lastName: "Doe",
  };
  destrcuturedParams(x, y, arr, person);
}

function passByValue() {
  let age = 10;
  function1(age); //
  console.log(age);
}

function function1(age) {
  age = age + 1;
  console.log(age);
}

function btnHandler16() {
  passByValue();
}

function function2(arr, person) {
  arr[0] = 100;
  console.log(arr);
  person.firstName = "Alex";
  console.log(person);
}

function passByReference() {
  let arr = [10, 20];
  let person = {
    firstName: "John",
    lastName: "Doe",
  };
  function2(arr, person);
  console.log(arr);
  console.log(person);
}

function btnHandler17() {
  passByReference();
}

function callAndApplyExample() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
    display: function (state, city) {
      console.log(this.firstName, this.lastName, state, city);
    },
  };

  person1.display('up', 'noida');

  let person2={
    firstName: 'Alex',
    lastName: 'Cook'
  }
  // function borrowing
  person1.display.call(person2, 'ka', 'blr');
  person1.display.apply(person2, ['KA', 'BLR']);
}


function display(state, city) {
  console.log(this.firstName, this.lastName, state, city);
}

function callAndApplyExample_1() {
  let person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  display('up', 'noida');
  display.call(person1, 'up', 'noida');
  display.call(null, 'up', 'noida');

  let person2={
    firstName: 'Alex',
    lastName: 'Cook'
  }
  display.call(person2, 'ka', 'blr');
  display.apply(person2, ['KA', 'BLR']);
}

function btnHandler18()
{
  callAndApplyExample();
  callAndApplyExample_1();
}


function bindExample()
{
  const display= function(state, city){
    console.log(`${this.firstName}, ${this.lastName} is from ${state} , ${city}`);
  }

  let person = {
    firstName: 'John',
    lastName: 'Doe',
  }

  const copyFunction = display.bind(person,'UP', 'NOIDA');
  console.log(copyFunction);
  copyFunction();

  const copyFunction1 = display.bind(person,'UP');
  console.log(copyFunction1);
  copyFunction1(); // undefined
  copyFunction1('NOIDA');

  const copyFunction2 = display.bind(person);
  console.log(copyFunction2);
  copyFunction2('UP', 'NOIDA');


}

function btnHandler19()
{
  bindExample();
}

// scope : function scope, lexical scope
// closure
let a = 20; // global
function outerFunction()
{
  let x = 10; // function scope
  console.log(x, a);  // accessing a is lexical scope
  function innerFunction()
  {
    let y = 20; // function scope
    let result = x + y + a; // accessing x, a : lexical scope
    console.log(result);
  }
  return innerFunction;

}
outerFunction(); // 10, 20
console.log("======================");
outerFunction()(); // 10, 20  | 50 // currying
// console.log(x);


function timeout()
{
  function display()
  {
    console.log(`I am at display`);
  }
  console.log('Í am about to call timeout');
  let timeoutId = setTimeout(display, 2000); // 2000ms = 2second. 1000ms = 1second
  //clearTimeout(timeoutId);
}

timeout();

function interval()
{
  function display()
  {
    console.log('I am at interval display');
    // 100 lines of code
  }

  let intervalId = setInterval(display, 2000);
  localStorage.setItem("intervalId", intervalId);
 // clearInterval(intervalId);
}

interval();

function clearMyInterval()
{
  let intervalId = localStorage.getItem("intervalId");
  console.log(intervalId);
  clearInterval(intervalId);
}