# Contents
- var, let, const
- conditionals: if, if else, if else-if, if else-if else, ternary
- switch statement
- loops: while, do...while, for index, for multiple index, for each
- break, continue
- return

## If statements

In JavaScript, the `if` statement is used to conditionally execute a block of code based on a specified condition. Here's the basic syntax of an `if` statement:

```javascript
if (condition) {
  // Code to be executed if the condition is true
}
```

Here's an example that demonstrates how to use an `if` statement:

```javascript
let number = 10;

if (number > 0) {
  console.log("The number is positive.");
}
```

In this example, if the `number` variable is greater than 0, the code inside the `if` block will be executed, and the message "The number is positive." will be printed to the console.

You can also include an optional `else` statement to provide an alternative block of code to execute when the condition is false:

```javascript
let number = -5;

if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is non-positive.");
}
```

In this case, since the `number` variable is less than 0, the condition is false, and the code inside the `else` block will be executed. The message "The number is non-positive." will be printed to the console.

Additionally, you can use multiple `if` statements together using the `else if` keyword to check for multiple conditions:

```javascript
let number = 0;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
```

In this example, the code checks whether the `number` variable is greater than 0, less than 0, or equal to 0, and prints the appropriate message accordingly. Since the `number` variable is 0, the message "The number is zero." will be printed to the console.

## Switch statement

In JavaScript, the `switch` statement is used to perform different actions based on different conditions. It provides an alternative to using multiple `if...else if...else` statements when you have multiple cases to consider. Here's the basic syntax of a `switch` statement:

```javascript
switch (expression) {
  case value1:
    // Code to be executed if the expression matches value1
    break;
  case value2:
    // Code to be executed if the expression matches value2
    break;
  case value3:
    // Code to be executed if the expression matches value3
    break;
  // ...
  default:
    // Code to be executed if the expression doesn't match any of the cases
}
```

Here's an example that demonstrates how to use a `switch` statement:

```javascript
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
```

In this example, the value of the `day` variable is compared against different cases using the `switch` statement. If the value matches one of the cases, the corresponding code block is executed, and the `dayName` variable is set to the corresponding day of the week. If the value doesn't match any of the cases, the code inside the `default` block is executed, and the `dayName` variable is set to "Invalid day". Finally, the value of `dayName` is printed to the console.

It's important to include the `break` statement after each case to exit the `switch` block. Otherwise, if a case is matched, the execution will continue to the next case until a `break` statement is encountered or the `switch` block ends.

## while loop

In JavaScript, the `while` loop is used to repeatedly execute a block of code as long as a specified condition evaluates to `true`. The syntax of a `while` loop is as follows:

```javascript
while (condition) {
  // Code to be executed while the condition is true
}
```

Here's an example that demonstrates how to use a `while` loop:

```javascript
let count = 1;

while (count <= 5) {
  console.log("Count: " + count);
  count++;
}
```

In this example, the `while` loop continues to execute as long as the condition `count <= 5` is `true`. The code inside the loop block will be executed repeatedly. In each iteration, the value of `count` is printed to the console, and then `count` is incremented by 1 using the `count++` statement. The loop will stop when `count` becomes greater than 5.

The output of the above code will be:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

It's important to ensure that the condition inside the `while` loop eventually becomes `false` to prevent an infinite loop. If the condition is always `true`, the loop will continue indefinitely, and the code inside the loop will run indefinitely as well.

## do ... while loop
In JavaScript, the `do...while` loop is similar to the `while` loop, but it has a slightly different syntax. The `do...while` loop executes a block of code once, and then repeats the execution as long as a specified condition is `true`. The syntax of a `do...while` loop is as follows:

```javascript
do {
  // Code to be executed
} while (condition);
```

Here's an example that demonstrates how to use a `do...while` loop:

```javascript
let count = 1;

do {
  console.log("Count: " + count);
  count++;
} while (count <= 5);
```

In this example, the `do...while` loop executes the code block first, and then checks the condition `count <= 5`. If the condition is `true`, the loop will repeat and execute the code block again. In each iteration, the value of `count` is printed to the console, and then `count` is incremented by 1 using the `count++` statement. The loop will stop when `count` becomes greater than 5.

The output of the above code will be:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

The main difference between a `do...while` loop and a `while` loop is that a `do...while` loop guarantees that the code block will be executed at least once, even if the condition is initially `false`. In a `while` loop, if the condition is `false` from the beginning, the code block will not be executed at all.

## for loop with index

In JavaScript, the `for` loop is used to repeatedly execute a block of code for a specified number of iterations. It provides a concise way to initialize a counter, define the condition for loop continuation, and update the counter after each iteration. The syntax of a `for` loop is as follows:

```javascript
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}
```

Here's an example that demonstrates how to use a `for` loop:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
```

In this example, the `for` loop initializes a variable `i` with an initial value of 1. The loop continues as long as the condition `i <= 5` is `true`. After each iteration, the value of `i` is incremented by 1 using the `i++` statement. The code inside the loop block will be executed repeatedly. In each iteration, the value of `i` is printed to the console.

The output of the above code will be:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

The `for` loop provides more control over the loop structure and is commonly used when you know the exact number of iterations required. The initialization, condition, and increment/decrement expressions within the parentheses can be customized according to the specific requirements of your loop.

## break statement

In JavaScript, the `break` statement is used to exit or terminate a loop or switch statement prematurely. When encountered, the `break` statement immediately terminates the innermost loop or switch statement and transfers the control to the statement immediately following the loop or switch.

Here are a couple of scenarios where the `break` statement can be used:

1. Terminating a Loop:
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}
```
In this example, the `for` loop prints the numbers from 1 to 10. However, when `i` becomes 6, the `break` statement is encountered, and the loop is terminated. The output will be:
```
1
2
3
4
5
```
Note that the loop stops executing once the `break` statement is encountered, and the remaining iterations are skipped.

2. Exiting a Switch Statement:
```javascript
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
  default:
    dayName = "Invalid day";
    break;
}

console.log("The day is: " + dayName);
```
In this example, the `switch` statement is used to assign the corresponding day name based on the `day` variable. Once a matching case is found, the `break` statement is encountered, and the switch statement is exited. Without the `break` statements, the code would continue executing the next cases as well. 

The `break` statement is a powerful tool to control the flow of your code within loops and switch statements, allowing you to exit early when a certain condition is met.

## continue

In JavaScript, the `continue` statement is used within loops to skip the current iteration and continue to the next iteration. When encountered, the `continue` statement immediately stops the execution of the current iteration and moves on to the next iteration of the loop.

Here's an example that demonstrates the use of the `continue` statement within a loop:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

In this example, the `for` loop prints the numbers from 1 to 5. However, when `i` becomes 3, the `continue` statement is encountered. It skips the code block below it for that iteration and moves on to the next iteration. As a result, the number 3 is not printed. The output will be:
```
1
2
4
5
```

The `continue` statement is useful when you want to skip specific iterations based on a condition without terminating the loop entirely. It allows you to selectively exclude certain iterations from executing the code block, providing more control over the loop's behavior.


## for with comma. the multiple index

In JavaScript, the `for` loop allows you to use multiple expressions within each part of the loop's parentheses, separated by commas. This allows you to have multiple initialization expressions, condition expressions, and iteration expressions. Here's the syntax of a `for` loop with multiple expressions:

```javascript
for (expression1, expression2, expression3) {
  // Code to be executed in each iteration
}
```

The expressions can be used as follows:

- **Expression 1**: Initialization expression(s) to set up the loop (optional).
- **Expression 2**: Condition expression(s) to determine whether the loop should continue or terminate (optional).
- **Expression 3**: Iteration expression(s) to update the loop after each iteration (optional).

Here's an example that demonstrates the use of multiple expressions in a `for` loop:

```javascript
for (let i = 1, j = 1; i <= 5; i++, j += 2) {
  console.log("i: " + i + ", j: " + j);
}
```

In this example, there are two initialization expressions: `let i = 1` and `let j = 1`. There is one condition expression: `i <= 5`. And there are two iteration expressions: `i++` and `j += 2`. The loop will execute as long as `i` is less than or equal to 5. In each iteration, the values of `i` and `j` are printed to the console. The output will be:
```
i: 1, j: 1
i: 2, j: 3
i: 3, j: 5
i: 4, j: 7
i: 5, j: 9
```

Using multiple expressions within a `for` loop can be helpful when you need to perform multiple actions during the initialization, condition checking, or iteration steps of the loop.

