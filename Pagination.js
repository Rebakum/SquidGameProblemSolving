//1. Pagination
// let products= [
//     {
//         id: 1,
//         name: "Product 1",
//         price: 100
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         price: 200
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         price: 300
//     },
//     {
//         id: 4,
//         name: "Product 4",
//     }
// ]


// let currentPage = 1;
// let itemsPerPage = 2;

// let startIndex = (currentPage - 1)*itemsPerPage;
// let endIndex = startIndex + itemsPerPage;

// for(let i = startIndex; i < endIndex; i++){
//     if(products[i]){
//         console.log(products[i]);
//     }
// }

// Calculate Total Pages



let totalItems = 20
let itemsPerPage = 5;

let totalPages = Math.ceil(totalItems/itemsPerPage);

// console.log(totalPages);

// Previous & Next Pagination

let currentPage = 1;

function nextPage(){
    if(currentPage < totalPages){
        currentPage++;
        // console.log("CurrentPage:", currentPage);
    }
}
function PreviousPage(){
    if(currentPage >1){
        currentPage--;
        // console.log("CurrentPage:" ,currentPage)
    }
}
nextPage();
PreviousPage();

// 2/Swap Two Variables

let a=20;
let b=10;

let temp = a;
a = b;
b = temp
// console.log("a:", a);
// console.log("b:", b);


// 2. Add Two Numbers
let num1 = 5;
let num2 = 10;
 let sum = num1 + num2;
//  console.log("Sum:", sum);

 // 3. Find Largest Number
 let x = 15;
 let y = 25;
  
 if(x>y){
    // console.log("largest:", x)
 }else{
    // console.log("largest:", y)
 }

 // 4. Even or Odd
 let number = 7;
 if(number % 2 === 0){
    // console.log("Even")
 }else{
    // console.log("odd")
 }

//  5. Reverse String Using Variable
let str = "Hello";
let reversedStr = " ";
for( let i = str.length - 1; i >=0; i--){
    reversedStr += str[i];
}
// console.log("Reversed String:", reversedStr)

// 6. Count Total Characters
let str1 = "Hello Word";
let count = 0;
for(let i = 0; i < str1.length; i++){
    count++;

}
// console.log("total characters:", count)

// 6. Sum of Array
let arr = [1, 2, 3, 4, 5]
let totalSum = 0;
for(let i = 0; i < arr.length; i++){
    totalSum += arr[i]
}
// console.log("Total Sum:", totalSum)

// 8. Find Maximum Value in Array
 let numbers= [10, 5, 20, 15];
 let max = numbers[0];
 for(let i =1; i < numbers.length; i++){
    if(numbers[i]> max){
        max = numbers[i]
    }
 }
//  console.log("Maximum Value:", max)

// 9. Count Vowels

let text = "hello world";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
for(let i=0; i<text.length; i++){
    if(vowels.includes(text[i])){
        vowelCount++
    }    
}
// console.log("vowel count:", vowelCount)

//10. Palindrome Check
let word = "madam";
let reversedWord = ""

for(let i = word.length -1; i >= 0; i-- ){
    reversedWord += word[i]
    // console.log("reversedWord:", reversedWord)
}
if(word === reversedWord){
    // console.log("palindrome")
}else{
    // console.log("not palindrome")
}

// 11. Factorial Calculation

let num = 5
let factorial = 1;
for(let i = 1; i<= num; i++){
    factorial *= i
}
console.log("Factorial:", factorial)



// 12. Fibonacci Series
let n = 10;

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= n; i++) {
  let next = first + second;

  console.log(next);

  first = second;
  second = next;
}


// 13. Remove Duplicates
let numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

console.log(unique);


// 14. Count Frequency
let fruits = ["apple", "banana", "apple", "orange"];

let count = {};

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];

  if (count[fruit]) {
    count[fruit]++;
  } else {
    count[fruit] = 1;
  }
}

console.log(count);


// 15. Find Smallest Number
let numbers = [12, 5, 8, 2, 20];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log(smallest);