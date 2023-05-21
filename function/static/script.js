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
  let returnValue = myFunction2();
  console.log(returnValue);
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

const myFunction5 = function myFunction6() {
  return myFunction4;
};

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
