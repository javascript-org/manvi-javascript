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

function destructuringExample() {
  // declaration
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  console.log(person.firstName);

  let { firstName, lastName } = person;
  console.log(firstName, lastName);

  let arr = ["Hi", "Hello"];

  let [x, y] = arr;
  console.log(x, y);
}

destructuringExample(); // invocation executes code

function destructuredParams({ firstName, lastName }, [x, y]) {
  console.log(firstName, lastName, x, y);
}

function ex1() {
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
  };

  let arr = ["Hi", "Hello", "Bye"];

  destructuredParams(person, arr);
}


ex1();

function spreadParam(person, ...nums) // spread param should present at last
{
    console.log(person, nums);
    console.log(nums.length);
}

spreadParam('John');
spreadParam('John', 2,3,4,5,6,'Hello');

function swap(x, y)
{
    let temp = y;
    y = x;
    x = temp;
    console.log(x,y); // 20, 10
}

function ex2()
{
    let a = 10;
    let b = 20;
    swap(a,b); // call by value
    console.log(a,b); // 10, 20
}

ex2();

function swap(num, arr)
{
   let t = num.x;
   num.x = num.y;
   num.y = t;

   let t1 = arr[0];
   arr[0]=arr[1];
   arr[1]=t;
}

function ex3()
{
    let a = 100;
    let b  = 200;

    let num = {
        x: a,
        y: b
    }; // heap object

    let arr = [a,b]; // heap array

    swap(num, arr); // call by reference

    console.log(a,b); // 100, 200

    console.log(num, arr)
}

ex3();


function callExample()
{
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 23,
        display: function(state, city){
            console.log(this.firstName, this.lastName, state, city);
        }
      };

    console.log(person.display);
    person.display('tn','chennai');


    let person2 = {
        firstName: "John1",
        lastName: "Doe1",
        age: 23,
        display: person.display
      };

      person2.display('ka','blr');

      person.display.call(person2, 'ka', 'blr');
      person.display.apply(person2, ['ka', 'blr']);

      let copyDisplay = person.display.bind(person2, 'ka', 'blr');
      copyDisplay();

      copyDisplay = person.display.bind(person2);
      copyDisplay('ka','blr');
     
}

callExample();