function variable() {
  let x = 10;
  x = 100;
  var y = 100;
  y = 200;
  const z = 123;
  //  z = 124;
}

// true or false
/**
 * if(condition){
 *   executed
 * }
 */
function ifHandler() {
  let num = 11;
  let message;
  if (num % 2 == 0) {
    message = "number is even";
  }
  console.log(message);
}

function ifElseHa12nlder() {
  let num = 12;
  let message;
  if (num % 2 == 0) {
    message = "number is even";
  } else {
    message = "number is odd";
  }
  console.log(message);
}

/**
 * if(condition1){
 *    statement
 * }
 * else if(condition2){
 *
 * }
 */
function ifElseIfHandler() {
  let x = 10;
  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10) {
    message = "number is greather than equal to 10";
  }

  console.log(message);
}

function ifElseIfHandler_1() {
  let x = 100;
  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10 && x < 20) {
    message = "number is greather than equal to 10 and less than 20";
  }

  console.log(message);
}

function ifElseIfHandler_3() {
  let x = 15;
  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else {
    if (x >= 10 && x < 20) {
      message = "number is greather than equal to 10 and less than 20";
    }
  }

  console.log(message);
}

function ifElseIfHandler_3() {
  let x = 25;
  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10 && x < 20) {
    message = "number is greather than equal to 10 and less than 20";
  } else if (x >= 20 && x < 30) {
    message = "number is greather than equal to 20 and less than 30";
  }

  console.log(message);
}

function ifElseIfHandler_4() {
  let x = 250;
  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10 && x < 20) {
    message = "number is greather than equal to 10 and less than 20";
  } else if (x >= 20 && x < 30) {
    message = "number is greather than equal to 20 and less than 30";
  } else {
    message = "number not supported";
  }

  console.log(message);
}

function nestedIfStatement() {
  let x = 60;
  let message;
  if (x > 100) {
    if (x < 150) {
      message = "num is greather than 100 and less than 150";
    }
  } else {
    if (x > 10) {
      message = "num is less than 100 and greater than 10";
    }
  }
  console.log(message);
}

function nestedIfStatement_1() {
  let x = 60;
  let message;
  if (x > 100 && x < 150) {
    message = "num is greather than 100 and less than 150";
  } else if (x > 10) {
    message = "num is less than 100 and greater than 10";
  }

  console.log(message);
}

/**
 *  condition ? statement1 : statement2
 */
function ternaryOperator() {
  let x = 101;
  let message = x % 2 == 0 ? "even" : "odd";
  console.log(message);
}

/**
 * while(condition){
 *
 * }
 */
function whileLoop() {
  let num = 5;
  while (num > 0) {
    console.log(num);
    num = num - 1;
  }
}

/**
 *  do{
 *   hi
 * }while(condition);
 *
 */
function doWhileLoop() {
  let num = 5;
  do {
    // pre-entry
    console.log(num);
    num = num - 1;
  } while (num > 0);
}

/**
 *
 *  condition
 *    block execution
 *  increment or decrement
 *  condition
 *    block execution
 *  increment or decrement
 *
 *  for(intialization; condition; increment or decrment){
 *
 * }
 */
function forLoop() {
  for (let i = 0; i < 5; i = i + 2) {
    console.log(i); // 0, 2, 4
  }

  console.log("=======================");

  for (let i = 5; i >= 0; i = i - 1) {
    console.log(i);
  }

  console.log("=========================");

  for (let i = 0, j = 0; i < 5 && j < 5; i = i + 1, j = j + 2) {
    console.log(`i=${i} and j=${j}`);
  }
}

// continue statement used with loops only
function continueStatement()
{
  for(let i =0; i < 5; i=i+1)
  {
    if(i == 3  || i == 2)
    {
      continue;
    }

    console.log(i);
  }
}

// break statement: conditionaly termination a loop
function breakStatement()
{
  for(let i =0; i < 5; i=i+1)
  {
    if(i == 3)
    {
      break;
    }
    
    console.log(i); // 0, 1, 2
  }

  console.log("this is my last message");
}

// return statement: conditionaly termination execution of a function
function returnStatement()
{
  for(let i =0; i < 5; i=i+1)
  {
    if(i == 3)
    {
      return;
    }
    
    console.log(i); // 0, 1, 2
  }

  console.log("this is my last message");
}


