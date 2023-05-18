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