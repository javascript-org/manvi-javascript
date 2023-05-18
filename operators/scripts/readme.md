# Logical Assignment Operator

In JavaScript, logical assignment operators are used to perform logical operations and assign the result to a variable in a single step. These operators combine logical operators (such as AND, OR, or XOR) with the assignment operator (=). Here are the logical assignment operators available in JavaScript:

1. Logical AND assignment (&&=):
   - Syntax: `x &&= y`
   - Example: `x &&= y` is equivalent to `x = x && y`
   - Explanation: If `x` is truthy, the value of `y` is assigned to `x`. Otherwise, `x` remains unchanged.

2. Logical OR assignment (||=):
   - Syntax: `x ||= y`
   - Example: `x ||= y` is equivalent to `x = x || y`
   - Explanation: If `x` is falsy, the value of `y` is assigned to `x`. Otherwise, `x` remains unchanged.

3. Logical nullish assignment (??=):
   - Syntax: `x ??= y`
   - Example: `x ??= y` is equivalent to `x = x ?? y`
   - Explanation: If `x` is `null` or `undefined`, the value of `y` is assigned to `x`. Otherwise, `x` remains unchanged.

Note: Logical assignment operators were introduced in ECMAScript 2021 (ES12) and may not be supported in older JavaScript environments.

## Binary Number System in 4 bits

Here's a tabular format for the Binary Number System in 4 bits:

| Decimal | Binary |
|---------|--------|
| 0       | 0000   |
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |
| 7       | 0111   |
| 8       | 1000   |
| 9       | 1001   |
| 10      | 1010   |
| 11      | 1011   |
| 12      | 1100   |
| 13      | 1101   |
| 14      | 1110   |
| 15      | 1111   |

In this table, the left column represents the decimal numbers, and the right column represents their corresponding binary representations using 4 bits. Each row demonstrates a decimal number along with its binary equivalent.

## Decimal to Binary
To convert the decimal number 12 to binary, you can use a simple algorithm. Here's the step-by-step process:

1. Divide the decimal number by 2 and note down the remainder.
   - 12 ÷ 2 = 6 (remainder 0)

2. Divide the quotient from step 1 by 2 and note down the remainder.
   - 6 ÷ 2 = 3 (remainder 0)

3. Repeat step 2 until the quotient is 0.
   - 3 ÷ 2 = 1 (remainder 1)
   - 1 ÷ 2 = 0 (remainder 1)

4. The remainders obtained in reverse order form the binary equivalent of the decimal number.
   - Reversed: 1100

Therefore, the decimal number 12 is equal to the binary number 1100.

## Convert binary 1100 to decimal

To convert the binary number 1100 to decimal, you can use the positional value method. Each digit in the binary number represents a power of 2, starting from the rightmost digit with a power of 0 and increasing by 1 for each subsequent digit to the left.

Here's the step-by-step process:

1. Write down the binary number: 1100.

2. Assign powers of 2 to each digit from right to left: 
   - 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 0 * 2^0.

3. Simplify the equation:
   - 1 * 8 + 1 * 4 + 0 * 2 + 0 * 1 = 8 + 4 + 0 + 0 = 12.

Therefore, the binary number 1100 is equal to the decimal number 12.

# Assignment Operators
In JavaScript, there are several assignment operators that you can use to assign values to variables and perform operations simultaneously. Here are all the assignment operators in JavaScript:

1. Assignment (`=`): Assigns the value on the right to the variable on the left.

   ```javascript
   let x = 5; // x is assigned the value 5
   ```

2. Addition assignment (`+=`): Adds the value on the right to the variable on the left and assigns the result to the variable.

   ```javascript
   let x = 5;
   x += 3; // equivalent to x = x + 3; (x becomes 8)
   ```

3. Subtraction assignment (`-=`): Subtracts the value on the right from the variable on the left and assigns the result to the variable.

   ```javascript
   let x = 5;
   x -= 3; // equivalent to x = x - 3; (x becomes 2)
   ```

4. Multiplication assignment (`*=`): Multiplies the variable on the left by the value on the right and assigns the result to the variable.

   ```javascript
   let x = 5;
   x *= 3; // equivalent to x = x * 3; (x becomes 15)
   ```

5. Division assignment (`/=`): Divides the variable on the left by the value on the right and assigns the result to the variable.

   ```javascript
   let x = 6;
   x /= 3; // equivalent to x = x / 3; (x becomes 2)
   ```

6. Remainder assignment (`%=`): Assigns the remainder of dividing the variable on the left by the value on the right to the variable.

   ```javascript
   let x = 7;
   x %= 3; // equivalent to x = x % 3; (x becomes 1)
   ```

7. Exponentiation assignment (`**=`): Raises the variable on the left to the power of the value on the right and assigns the result to the variable.

   ```javascript
   let x = 2;
   x **= 3; // equivalent to x = x ** 3; (x becomes 8)
   ```

8. Left shift assignment (`<<=`): Performs a bitwise left shift operation on the variable on the left by the number of positions specified on the right and assigns the result to the variable.

   ```javascript
   let x = 5;
   x <<= 2; // equivalent to x = x << 2; (x becomes 20)
   ```

9. Right shift assignment (`>>=`): Performs a bitwise right shift operation on the variable on the left by the number of positions specified on the right and assigns the result to the variable.

   ```javascript
   let x = 20;
   x >>= 2; // equivalent to x = x >> 2; (x becomes 5)
   ```

10. Unsigned right shift assignment (`>>>=`): Performs a bitwise right shift operation on the variable on the left by the number of positions specified on the right and assigns the result to the variable. The difference from the regular right shift is that the leftmost bits are filled with zeros.

    ```javascript
    let x = -20;
    x >>>= 2; // equivalent to x = x >>> 2; (x becomes 1073741828)
    ```

11. Bitwise AND assignment (`&=`): Performs a bitwise AND operation between the variable on the left and the value on the right, and assigns the result to the variable.

    ```javascript
    let x = 5;
    x &= 3; // equivalent to x = x & 3; (x becomes 1)
    ```

12. Bitwise OR assignment (`|=`): Performs a bitwise OR operation between the variable on the left and the value on the right, and assigns the result to the variable.

    ```javascript
    let x = 5;
    x |= 3; // equivalent to x = x | 3; (x becomes 7)
    ```

13. Bitwise XOR assignment (`^=`): Performs a bitwise XOR operation between the variable on the left and the value on the right, and assigns the result to the variable.

    ```javascript
    let x = 5;
    x ^= 3; // equivalent to x = x ^ 3; (x becomes 6)
    ```

These are all the assignment operators available in JavaScript. They provide a concise way to perform operations and assign values to variables simultaneously.

# Truth Table Of Logic Gate

Here are the truth tables for all the basic logic gates:

1. AND gate:

| `A` | `B` | `A & B` |
| --- | --- | --- |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

2. OR gate:

| `A` | `B` | `A \| B` |
| --- | --- | --- |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

3. NOT gate:

| `A` | `~A` |
| --- | --- |
| 0   | 1   |
| 1   | 0   |

4. XOR gate:

| `A` | `B` | `A ⊕ B` |
| --- | --- | --- |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

5. NAND gate:

| `A` | `B` | `~(A & B)` |
| --- | --- | --- |
| 0   | 0   | 1      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

6. NOR gate:

| `A` | `B` | `~(A \| B)` |
| --- | --- | --- |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 0      |

Note that the inputs and outputs of each gate are represented in binary (0 or 1). The output column shows the result of the gate's operation on the given inputs. The tilde (`~`) represents the NOT operation, while the other symbols represent the AND, OR, XOR, NAND, and NOR operations.

# Bitwise Operators
Here is the table of bitwise operations on 4-bit binary numbers in markdown format:

| Operator | Operation | Example 1 | Example 2 |
| --- | --- | --- | --- |
| `&` | Bitwise AND | `1100 & 1010 = 1000` | `1111 & 0000 = 0000` |
| `\|` | Bitwise OR | `1100 \| 1010 = 1110` | `1111 \| 0000 = 1111` |
| `^` | Bitwise XOR | `1100 ^ 1010 = 0110` | `1111 ^ 0000 = 1111` |
| `~` | Bitwise NOT | `~1100 = 0011` | `~0000 = 1111` |
| `<<` | Left shift | `1100 << 1 = 1000` | `1010 << 2 = 1000` |
| `>>` | Right shift | `1100 >> 1 = 0110` | `1010 >> 2 = 0010` |

In this table, the first column lists the bitwise operator being used, while the second column describes the operation that the operator performs. The third and fourth columns contain examples of each operation being performed on two 4-bit binary numbers.

# Represent -5 as binary.

-5 expressed as 2s complement form in binary.

Binary value of 5 is 101
One complement of 5 is 010
Add 1 to above to get 2s complment of 5: 011

As -5 is -ve so the left most bit will be 1.
So 011 becomes 1011.

# Find -5 >> 2

-5 in binary is 1011
so 1011 >> 2 = 10. (this is 2 in decimal)
But what should be the left most bit, it is lost now due to right shift.

As -5 is -ve so remaining 2 left most bits of the result will have 1.
i.e 1 1 10 = -2 

# Find -5 >>> 2

-5 in binary is 1011
so 1011 >> 2 = 10. (this is 2 in decimal)
But what should be the left most bit, it is lost now due to right shift.

As -5 is -ve so remaining 2 left most bits of the result will have 1. But wait we are using >>> operator. So remaning bit should be 0.
i.e 0 0 10 = 2 