
let message = 'Welcome';
let counter = 0;

function assignment()
{
  let str = message[counter];
  document.getElementById("result").innerText=str;
}

function objectDatatype()
{
    let person = {
        firstName: 'John',
        lastName: 'Doe'
    }

    // Javascript Object Notation: JSON
    console.log(person);
    console.log(person.firstName, person.lastName);
    console.log(person['firstName'], person['lastName']);

    console.log('firstName' in person);
    delete person.firstName;
    console.log(person);

    let employee = {
        id: 1,
        email: 'john.doe@email.com',
        address:{
            line1: 'Bengaluru',
            line2: 'India'
        }
    }

    employee.ssn='123-456-789';
    employee.address.pin='560067';

    console.log(employee);
    delete employee.address.pin;
    console.log(employee);
    console.log('line1' in employee.address);
    employee.address.line1='Mysuru';
    console.log(employee)

}

function stringDatatype() {
  let str1 = "hello";
  let str2 = " world";

  let result = str1 + str2;
  str1 +=str2; // str1 = str1 + str2
  console.log(result);
  console.log(str1);

  let num1 = 10;
  console.log(typeof num1);
  num1 = String(num1);
  console.log(typeof num1);
  num1 = num1.toString();
  console.log(typeof num1);

  let message = 'Welcome';
  console.log(message[0]);
  console.log(message.length);

  let flag = false;
  let flagStr = String(flag); // false string
  console.log(flagStr, typeof flagStr);
  let flag1 = Boolean(flagStr); // true
  console.log(flag1);

}


function booleanDatatype() {
  let result = true;
  result = false;

  let str1 = "hi";
  let number1 = -100;
  let person = {
    firstName: "john",
  };

  result = Boolean(str1);
  console.log(result);

  result = Boolean(number1);
  console.log(result);

  result = Boolean(person);
  console.log(result);

  let str2 = "";
  result = Boolean(str2);
  console.log(result);

  let number2 = 0;
  result = Boolean(number2);
  console.log(result);

  let contact = null;
  result = Boolean(contact);
  console.log(result);

  let employee = {};
  result = Boolean(employee);
  console.log(result);

  let noNumber = NaN;
  result = Boolean(noNumber);
  console.log(result);

  result = Boolean(undefined);
  console.log(result);
}

function numberDatatype() {
  // decimal [0-9] base 10, decimal number system
  let decimalNum = 57;
  console.log(decimalNum);

  // binary [0,1] base 2 number system or binary system
  let binaryNum = 0b101;
  console.log(binaryNum);

  let binaryStrToDecimalValue = parseInt("11", 2); // 1*2^1 +1*2^0
  console.log(binaryStrToDecimalValue);

  // octal [0-7] 8 digits : base 8 number system
  let octalNum = 012; // 1*8^1  + 2*8^0 = 10
  console.log(octalNum);

  // 0 getting ignored and remaining digits becoming like decimal
  let octalNum1 = 080; // 8*8^1 + 0*0^0 =
  console.log(octalNum1);

  let octalNum2 = 0o12;
  console.log(octalNum2);

  // hexa decimal number system: 16 digits base 16
  // [0-9,A-F]
  let hexaNum = 0x1f; // 1 * (16 ^ 1) + f * (16 ^0) = 16 + 15 = 31
  console.log(hexaNum);

  // floating point numbers
  let totalPrice = 9.31;
  let taxValue = 0.45;
  let billAmount = 45.67;

  let number1 = 3.14e2; // 3.14 * 10^2 = 314
  console.log(number1);

  let number2 = 314e-2; // 314 * 10^-2 = 3.14
  console.log(number2);

  let result = "a" / 2;
  console.log(result); // NaN: not a number
  result = result + 1; // NaN
  console.log(result);

  console.log(NaN == NaN); // false
  console.log(1 / 0);
  console.log(Infinity);
}

/**
 *  glass 200ml water
 *  bottle 1000ml water
 *  bucket 10000ml water
 *  1 : number : bits
 * "Hi": string : bits
 * true : boolean: bit
 *
 * 1bit = 1 or 0
 * 8bits = 1 byte
 * 1024bytes = 1mb
 * 1024 mb = 1gb
 *
 */

/**
 * number, boolean, string
 * undefined, null,
 * symbol, bigint
 *
 * object
 */
function datatype() {
  // declaring a vriable and intializing with 120
  let counter = 120;
  console.log(counter); // 120
  console.log(typeof counter); // number

  counter = false;
  console.log(typeof counter);

  counter = "hi";
  console.log(typeof counter);

  // declaring
  let message;
  console.log(message);
  console.log(typeof message);

  let message1 = null;
  console.log(message1);
  console.log(typeof message1);

  console.log(null == undefined); // true

  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  console.log(person);
  console.log(typeof person);

  let mySymbol = Symbol();
  console.log(mySymbol);
  console.log(typeof mySymbol);

  let bigValue = 9007199254740991n; // 2**53 - 1
  console.log(bigValue);
  console.log(typeof bigValue);
  /**
   *  00 = 0
   *  01 = 1
   *  10 = 2
   *  11 = 3 = 2^2 - 1
   * 100 = 4
   * 101 = 5
   * 110 = 6
   * 111 = 7 = 2 ^ 3 - 1
   * 1000 = 8
   */
}
