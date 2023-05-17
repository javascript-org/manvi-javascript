function logicalOperators()
{
  let result = f1() && f2();
  console.log(`&& operator: ${result}`);

  result = f1() && f3() && f2();
  console.log(`&& operator: ${result}`);

  result = f1() || f2();
  console.log(`|| operator: ${result}`)

  result = f3() || f1() || f2() ; 
  console.log(`|| operator: ${result}`)

  result = !f1();
  console.log(`! operator: ${result}`);
}

function f1()
{
    console.log("inside f1");
    return true;
}


function f2()
{
    console.log("inside f2");
    return true;
}


function f3()
{
    console.log("inside f3");
    return false;
}

function comparisionOperator() {
  let input1 = "12";
  let input2 = 12;
  let result = input1 == input2; // value match
  console.log(`== operator : ${result}`);

  result = input1 === input2; // value and type should match
  console.log(`=== operator : ${result}`);

  result = input1 != input2; // not equal with value
  console.log(`!= operator : ${result}`);

  result = input1 !== input2; // not equal with value and type
  console.log(`!== operator : ${result}`);

  result = input1 > input2;
  console.log(`> operator : ${result}`);

  result = input1 < input2;
  console.log(`< operator : ${result}`);

  result = input1 <= input2;
  console.log(`<= operator : ${result}`);

  result = input1 >= input2;
  console.log(`>= operator : ${result}`);

  result = input1 > input2 ? "yes" : "no"; // ternary operator
  console.log(`? operator : ${result}`);

  // we can use above operator with strings also

  let str1 = 'ABC';
  let str2 = 'DEF';

  result = str1 < str2;
  console.log(`compare 2 strings with < : ${result}`);

  result = str1 > str2;
  console.log(`compare 2 strings with > : ${result}`);
}

function arithmeticOperate() {
  let num1 = 10;
  let num2 = 3;

  console.log(`inputs: ${num1} & ${num2}`);
  let result = num1 + num2;
  console.log(`+ operator = ${result}`);

  result = num1 - num2;
  console.log(`- operator = ${result}`);

  result = num1 * num2;
  console.log(`* operator = ${result}`);

  result = num1 / num2;
  console.log(`/ operator = ${result}`);

  result = num1 % num2;
  console.log(`% operator = ${result}`);

  result = num1 ** num2; // exponention operator
  console.log(`** opeartor = ${result}`);

  let num3 = num1;
  num3++; // num3 = num3+1; // 11
  console.log(`post-increment operator: ${num3}`);
  ++num3; // num3 = num3 +1; // 12
  console.log(`pre-increment operator: ${num3}`);

  num3--; // num3 = num3 -1; // 11
  console.log(`post decrement operator: ${num3}`)

  
  --num3; // num3 = num3 -1; // 10
  console.log(`pre decrement operator: ${num3}`)
}
/**
 *
 */
function bitwiseOperate() {
  /**
        & (AND)
         | (OR)
          ^ (XOR)
           ~ (NEGATION)
           << (left shift) 
            >> (right shift) 
            >>> (unsigned right shift)
     * 
     */

  let num1 = 10; //
  let num2 = 2;

  let result = num1 & num2;
  console.log(`& operator = ${result} `);

  result = num1 | num2;
  console.log(`| operator = ${result}`);

  result = num1 ^ num2;
  console.log(`^ operator = ${result}`);

  result = num1 << 3; // left shift by 3 bits
  console.log(`<< operator = ${result}`);

  result = num1 >> 2; // right shift by 2 bits, its signbit can be 0 or 1 depending on the num1 signbit.
  console.log(`>> operator = ${result}`);

  let num3 = -5;
  intTo4BitBinary(num3);
  result = num3 >> 2; // right shift by 2 bits, its signbit can be 0 or 1 depending on the num1 signbit.
  console.log(`>> operator = ${result}`);

  result = num1 >>> 2;
  console.log(`>>> unsigned right shift with +ve number = ${result} `);

  result = num3 >>> 2;
  console.log(`>>> unsigned right shift with -ve number = ${result} `);
}

function intTo4BitBinary(num) {
  
}

function assignmentOperator()
{
  let num1 = 10;
  let num2 = num1; // = is the assignment operator

  num2 += 2; // num2 = num2 + 2 ; (answer: 12)
  console.log(`+= operator: ${num2}`)

  num2 =+ 2; // num2 = num2 + 2 ; (answer: 14)
  console.log(`+= operator: ${num2}`)

  let message = 'Hello';
  message += ' World'; // message = message + ' World'; 
  console.log(`+= with string operator: ${message}`); // Hello World

  let name;
  name ?? 'Alexa';
  console.log(`${name}`)
  // similarly do for other assignment operators.

}
