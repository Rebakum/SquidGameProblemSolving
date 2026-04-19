"use strict";
/**
1. Reverse a String
Task: Write a function that takes a string and returns it reversed.

Input: string s
Output: string
Constraints: s.length <= 1000.
Edge Case: Single character strings or empty strings.
Hint: Look into built-in string slicing or a simple loop.
*/
// function reverseString(S: string): string {
//   let reversed = "";
//   for (let i = S.length - 1; i >= 0; i--) {
//     reversed += S[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Hello World")) // Output: "dlroW olleH"
/**
2. FizzBuzz
Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

Input: integer n
Output: Printed lines or a list of strings.
Constraints: 1 <= n <= 100.
Edge Case: n = 1.
Hint: Use the modulo operator % to check for remainders.
*/
// function fizzBuzz(n: number): void {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } 
//     else if (i % 3 === 0) {
//       console.log("Fizz");
//     } 
//     else if (i % 5 === 0) {
//       console.log("Buzz");
//     } 
//     else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(15);
/**
3. Find the Largest Number in an Array
Task: Given an array of integers, return the largest value.

Input: int[] nums
Output: integer
Constraints: Array will have at least one element.
Edge Case: Array with all negative numbers.
Hint: Initialize a variable with the first element of the array.
 */
// function findLargest(nums: number[]): number {
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// }
// console.log(findLargest([3, 7, 2, 9, 5]));
// console.log(findLargest([-10, -3, -50, -2]));
/**
4. Check for Palindrome
Task: Determine if a word reads the same forward and backward.

Input: string s
Output: boolean
Constraints: Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
Edge Case: "racecar" (true) vs "hello" (false).
Hint: Compare the string with its reverse.

*/
// function isPalindrome(s: string): boolean {
//   const cleaned = s.toLowerCase();
//   const reversed = cleaned.split('').reverse().join('');
//   return cleaned === reversed;
// }
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));    // false
// console.log(isPalindrome("Madam"));    // true
/**
5. Sum of Array Elements
Task: Calculate the total sum of all numbers in an array.

Input: int[] nums
Output: integer
Constraints: nums.length <= 500.
Edge Case: Empty array (should return 0).
Hint: Use an accumulator variable inside a loop.

*/
// function sumArray(nums: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([5, 10, 15]));  // 30
// console.log(sumArray([]));           // 0
/***
6. Count Vowels
Task: Count how many vowels (a, e, i, o, u) are in a given string.

Input: string s
Output: integer
Constraints: s contains English letters and spaces.
Edge Case: String with no vowels.
Hint: Iterate through the string and check if each character is in a "vowel" set.

*/
// function countVowels(s: string): number {
//   let count = 0;
//   const vowels = "aeiou";
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i].toLowerCase();
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hello"));        // 2
// console.log(countVowels("programming"));  // 3
// console.log(countVowels("sky"));          // 0
/**
7. Factorial Calculation
Task: Find the factorial of a non-negative integer n.

Input: integer n
Output: integer
Constraints: ₀ <= n <= 12.
Edge Case: n = 0 (Factorial of 0 is 1).
Hint: Use a for-loop or recursion.

*/
// function factorial(n: number): number {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5)); // 120
// console.log(factorial(3)); // 6
// console.log(factorial(0)); // 1
/***
8. Even or Odd List
Task: Given an array of numbers, return a new array containing only the even numbers.

Input: int[] nums
Output: int[]
Constraints: nums.length <= 100.
Edge Case: Array with no even numbers.
Hint: Use the modulo operator inside a filter condition.

*/
// function getEvenNumbers(nums: number[]): number[] {
//   const result: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       result.push(nums[i]);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(getEvenNumbers([1, 3, 5, 7]));       // []
/***
9. Fibonacci Sequence
Task: Generate the first n numbers of the Fibonacci sequence.

Input: integer n
Output: int[]
Constraints: n >= 1.
Edge Case: n = 1.
Hint: Start with [0, 1] and add the last two elements to get the next.

 */
// function getEvenNumbers(nums: number[]): number[] {
//   const result: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       result.push(nums[i]);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(getEvenNumbers([1, 3, 5, 7]));       // []
/**
10. Find the Minimum in an Array
Task: Given an array of integers, return the smallest value.

Input: int[] nums
Output: integer
Constraints: Array will not be empty.
Edge Case: Multiple elements with the same minimum value.
Hint: Similar logic to finding the maximum.
*/
function getEvenNumbers(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i]);
        }
    }
    return result;
}
// test
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(getEvenNumbers([1, 3, 5, 7])); // []
