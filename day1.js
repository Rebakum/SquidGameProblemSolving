/***
Problem 1: Swap Two Variables  [Easy]
Description: Write a function that swaps the values of two variables without using a third variable.
Example:
Input: a = 5, b = 10 Output: a = 10, b = 5
Hint: Try using destructuring or arithmetic operators.

*/

// Solution using destructuring


function swap(a, b){
    [a, b]=[b, a]
    return {a, b}
}
// console.log(swap(5, 10));

/***

Problem 2: Check Even or Odd  [Easy]
Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
Example:
Input: 4  → Output: trueInput: 7  → Output: false
Hint: Use the modulus (%) operator.

*/

// Solution using modulus operator

function isEven(n){
    if(n%2 === 0){
        return true
    }
    return false
}
// console.log(isEven(4)); // true
// console.log(isEven(7));// false

/***
Problem 3: Find the Largest of Three Numbers  [Easy]
Description: Write a function largest(a, b, c) that returns the largest of three numbers.
Example:
Input: 3, 7, 5  → Output: 7
Hint: Use Math.max() or if-else conditions. */

// Solution using Math.max()
function largest(a, b, c){
    return Math.max(a, b, c)
}
// console.log(largest(3, 7, 5))
//Output: 7


/****
Problem 4: Celsius to Fahrenheit  [Easy]
Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
Example:
Input: 0   → Output: 32Input: 100 → Output: 212
Hint: Formula: (C × 9/5) + 32

*/
// Solution using formula

function toFahrenheit(celsius){
    return (celsius * 9/5)+ 32
}
// console.log(toFahrenheit(0)); // 32
// console.log(toFahrenheit(100)); // 212

/***
Problem 5: Check Positive, Negative or Zero  [Easy]
Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
Example:
Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
Hint: Use if-else if-else statements.
*/
// Solution using if-else if-else statements

function checkSign(n){
    if(n > 0){
        return "positive"
    } else if(n < 0){
        return "negative"
    }
    else{
        return "Zero"
    }
}
console.log(checkSign(1));
console.log(checkSign(-5));
console.log(checkSign(0));