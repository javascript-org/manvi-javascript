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
function studentSubjects(name, standard, ...subjects){
    console.log(subjects, subjects.length);
    console.log(subjects[0]);
    console.log(`student ${name} should learn subjects: ${subjects} in std ${standard}`);
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
  console.log(`got from parent: ${resultFunction} `)
  let result = resultFunction(3);
  console.log(result);

  result = multiply(2)(3);
  console.log(result);
}

function multiply(a) {
  console.log(a);
  function multiplyWith(b=10) { // default parameter
    console.log(a, b);
    return a * b;
  }
  return multiplyWith;
}

function btnHandler11()
{
  studentSubjects('John');
  studentSubjects('Alex','10', 'C++', 'Java', 'SQL');
}