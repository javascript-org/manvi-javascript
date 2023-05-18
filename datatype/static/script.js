
function objectDatatype()
{
    let person={
        firstName:'John',
        lastName: 'Doe'
    }
    console.log(person.firstName);
    console.log(person['firstName']);

    console.log('firstName' in person);

    console.log(person);
    delete firstName;
    console.log(person);

    let employee={
        id:1,
        name:'John',
        address:{
            line1: 'Banaglore',
            line2: 'India'
        }
    }

    console.log(employee);
    console.log(employee.id);
    console.log(employee.address.line1);
    console.log('line1' in employee.address);
    delete employee.address.line1;
    console.log(employee);
}

function stringDatatype()
{
    let str1 = 'Hello';
    let str2 = " World";
    let result = str1 + str2;
    str1 += str2;
    console.log(result);
    console.log(str1);

    let status = true;

    // non string type to string
    let num1 = 10;
    result = num1.toString();
    console.log(result);

    result = String(num1);
    console.log(result);

    result = num1+"";
    console.log(result);


    let stateValue = false;
    let stateValueStr = String(stateValue);
    result = Boolean(stateValueStr);

    console.log(result);

    let message = "Welcome John Doe";
    console.log(message[0]);
    console.log(message[1]);

    console.log(message.length);

}
function booleanDatatype()
{
  let result = true;
  result = false;

  let validString ='Hi';
  let nonZeroNumber = -100;
  let person={
    firstName:'John',
    lastName:'Doe'
  }

  result = Boolean(validString);
  console.log(result);
  result = Boolean(nonZeroNumber);
  console.log(result);
  result = Boolean(person);
  console.log(result);

  let stringValue = '';
  result = Boolean(stringValue);
  console.log(result);

  let contact = null;
  result = Boolean(contact);
  console.log(result);

  let student = {};
  result = Boolean(student);
  console.log(result);

  let counter = 0;
  result = Boolean(counter);
  console.log(result);

  let expression = NaN;
  result = Boolean(expression);
  console.log(result);

  result = Boolean(undefined);
  console.log(result);




}

function numberDatatype() {
  let decimalNum = 57;
  console.log(57);

  let binaryValue = 0b10;
  console.log(binaryValue);

  let binaryStrToDecimalValue = parseInt('11', 2);
  console.log(binaryStrToDecimalValue);

  let octalNum = 070;
  console.log(octalNum);

  let octalNum1 = 080;
  console.log(octalNum1); // this will give 80 as first 0 form left ignored.
  // but it should give error as below

  // let octalNum2 = 0o80;
  //console.log(octalNum2);

  let hexaNum = 0x1f;
  console.log(hexaNum);

  let totalPrice = 9.31;
  let taxAmount = 0.34; // works but use as 0.34
  let billAmount = 6.34;

  // bigint is bigger than 2^53 -1
  let pageView = 9007199254740991n;

  //  e indicates exponentiation to the power of 10.
  let number = 3.14e2;
  console.log(number); // 314

  let number1 = 14e-2;
  console.log(number1); // 0.14

  // NaN
  let result = 'a' / 2;
  console.log(result);

  let increment = result + 1;
  console.log(increment); // NaN operation results a NaN

  console.log(NaN == NaN);

}
/**
 * number , boolean, string
 * undefined, null,
 * symbol
 * bigint
 *
 * object
 */
function datatype() {
  let counter = 120; // counter is a number
  counter = false; // counter is now a boolean
  counter = "foo"; // counter is now a string

  counter = 120;
  console.log(typeof counter); // "number"

  counter = false;
  console.log(typeof counter); // "boolean"

  counter = "Hi";
  console.log(typeof counter); // "string"

  let message;
  console.log(message);
  console.log(typeof message); // "undefined"

  // undeclared variable and typeof
  console.log(typeof x); // "undefined"

  let message1 = null;
  console.log(typeof message1);

  console.log(null == undefined);

  // symbol type from ES2015 : used for uniqueness. to discuss later
  let mySymbol = Symbol();
  console.log(mySymbol);
  console.log(typeof mySymbol);

  // bigint from ES2020, not used much, to discuss later.
  let bigValue = 3n; // greater than 2^53 - 1
  console.log(bigValue);
  console.log(typeof bigValue);

  // object type
  let person = {
    firstName: "Alex",
    lastName: "Short",
  };
  console.log(person);
  console.log(typeof person);
  console.log(person.firstName);
  console.log(person["lastName"]);
  person.ssn = "123-456-789";

  console.log(person);
}

function variable() {
  // declaration of variables. here x and y are undefined
  var x; // before ES6
  let y; // from ES6
  console.log(`value of x: ${x}`);
  console.log(`value of y: ${y}`);

  // initialization of variables
  x = 10;
  y = 20;

  console.log(`value of x: ${x}`);
  console.log(`value of y: ${y}`);

  // re-assign the value to variables
  x = 200;
  y = 300;

  console.log(`value of x: ${x}`);
  console.log(`value of y: ${y}`);

  // declare and intialize the variable
  var x1 = 100;
  let y1 = 200;

  console.log(`value of x1: ${x1}`);
  console.log(`value of y1: ${y1}`);

  // undeclared variable
  console.log(message);

  // constant in javascript
  const counter = 100;
  console.log(`value of counter: ${counter}`);

  counter = 200; // Uncaught TypeError: Assignment to constant variable.
}
