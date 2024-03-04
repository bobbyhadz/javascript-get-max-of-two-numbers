// EXAMPLE 1 - Get the Max of two Numbers in JavaScript

console.log(Math.max(5, 10)); // 👉️ 10
console.log(Math.max(0, 20)); // 👉️ 20
console.log(Math.max(-10, 10)); // 👉️ 10
console.log(Math.max(-10, -15)); // 👉️ -10
console.log(Math.max('5', '15')); // 👉️ 15
console.log(Math.max('zero', 'five')); // 👉️ NaN

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Max of two numbers using the ternary operator

// const num1 = 5;
// const num2 = 20;

// const highestNumber = num1 > num2 ? num1 : num2;

// console.log(highestNumber); // 👉️ 20

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Max of two numbers using an `if/else` statement

// const num1 = 5;
// const num2 = 20;

// let highestNumber;

// if (num1 > num2) {
//   highestNumber = num1;
// } else {
//   highestNumber = num2;
// }

// console.log(highestNumber); // 👉️ 20

// ------------------------------------------------------------------

// // EXAMPLE 4 - If you have the numbers stored in an array, use spread syntax (...)

// const numbers = [5, 0, 20, 13, 35];

// const result = Math.max(...numbers);
// console.log(result); // 👉️ 35

// ------------------------------------------------------------------

// // EXAMPEL 5 - Some non-numeric values convert to valid numbers

// console.log(Number([])); // 👉️ 0
// console.log(Number(null)); // 👉️ 0
// console.log(Number(false)); // 👉️ 0
// console.log(Number(true)); // 👉️ 1
// console.log(Number('')); // 👉️ 0
