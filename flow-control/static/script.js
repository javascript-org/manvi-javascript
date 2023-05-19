function ifHandler() {
  let num1 = 10;
  let result;
  if (num1 % 2 == 0) {
    result = "number is even";
  }
  console.log(result);
}

function ifElseHandler() {
  let num1 = 10;
  let result;
  if (num1 % 2 == 0) {
    result = "number is even";
  } else {
    result = "number is odd";
  }
  console.log(result);
}

function ifElseIfHandler() {
  let x = 10;

  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10 && x < 20) {
    message = "number is between 10 and 20";
  }
  console.log(message);
}

// multiple else if
function ifElseIfHandler1() {
  let x = 10;

  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10 && x < 20) {
    message = "number is between 10 and 20";
  } else if (x >= 20 && x < 30) {
    message = "number is between 20 and 30";
  }
  console.log(message);
}

// end with else statement
function ifElseIfElseHandler2() {
  let x = 10;

  let message;
  if (x < 10) {
    message = "number is less than 10";
  } else if (x >= 10 && x < 20) {
    message = "number is between 10 and 20";
  } else if (x >= 20 && x < 30) {
    message = "number is between 20 and 30";
  } else {
    message = "invalid number";
  }
  console.log(message);
}

// nested if statement
function nestedIfStatement() {
  let x = 11;
  let message;
  if (x >= 10) {
    if (x < 20) {
      message = "number is between 10 and 20";
    } else {
      message = "number is greater than 20";
    }
  } else {
    message = "number is less than 10";
  }
  console.log(message);
}

function ternary() {
  let x = 10;
  let message = x > 10 ? "hello" : "hi";
  console.log(message);
}

function dayEvaluatorWithoutSwitch() {
  let day = 3;
  let dayName;

  if (day === 1) {
    dayName = "Monday";
  } else if (day === 2) {
    dayName = "Tuesday";
  } else if (day === 3) {
    dayName = "Wednesday";
  } else if (day === 4) {
    dayName = "Thursday";
  } else if (day === 5) {
    dayName = "Friday";
  } else if (day === 6) {
    dayName = "Saturday";
  } else if (day === 7) {
    dayName = "Sunday";
  } else {
    dayName = "Invalid day";
  }

  console.log("The day is: " + dayName);
}

function dayEvaluatorWithSwitch() {
  let day = 3;
  let dayName;

  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day";
  }

  console.log("The day is: " + dayName);
}

function whileLoop() {
  let count = 1;

  while (count <= 5) {
    console.log("Count: " + count);
    count++;
  }
}

function doWhileLoop() {
  let count = 1;

  do {
    console.log("Count: " + count);
    count++;
  } while (count <= 5);
}

function forLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
  }
}

// used with any of loops or switch statements
function breakStatement() {
  for (let i = 1; i <= 10; i++) {
    if (i === 6) {
      break;
    }
    console.log(i);
  }
}

// used with loops for moving to the next iteration by
// skipping remaning lines
function continueStatement() {
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}

function multipleIndexWithForLoop() {
  for (let i = 1, j = 1; i <= 5; i++, j += 2) {
    console.log("i: " + i + ", j: " + j);
  }
}
