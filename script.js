// Q:1 1. Write a function that displays current date & time in your browser.
// Ans : function showDateAndTime() {
//   let now = new Date();
//   console.log(now);
// }

// showDateAndTime();

// Q:2 Write a function that takes first & last name and then it greets the user using his full name.
// Ans : let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");

// function greetUser(first, last) {
//   console.log("Hello " + first + " " + last);
// }
// greetUser(firstName, lastName);

// Q:3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Ans : let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");

// function addNumbers(a, b) {
//   return a + b;
// }

// let sum = addNumbers(num1, num2);

// console.log("Sum is: " + sum);

// Q:4 Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// Ans: let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let operator = prompt("Enter operator (+, -, *, /):");

// function calculator(a, b, op) {
//   if(op === "+") {
//     return a + b;
//   } else if(op === "-") {
//     return a - b;
//   } else if(op === "*") {
//     return a * b;
//   } else if(op === "/") {
//     return a / b;
//   } else {
//     return "Invalid operator";
//   }
// }

// let result = calculator(num1, num2, operator);
// console.log("Result: " + result);

// Q:5 Write a function that squares its argument.
// Ans : 
// function square(num) {
//   return num * num;
// }
// let number = +prompt("Enter a number to square:");
// let result = square(number);

// console.log("Square is: " + result);

// Q:6 Write a function that computes factorial of a number.
// Ans : 
// function factorial(n) {
//   let fact = 1;
//   for(let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// let number = +prompt("Enter a number to find factorial:");
// let result = factorial(number);

// console.log("Factorial is: " + result);

// Q:7 Write a function that take start and end number as inputs & display counting in your browser.
// Ans : 
// let start = +prompt("Enter start number:");
// let end = +prompt("Enter end number:");

// function counting(s, e) {
//   for(let i = s; i <= e; i++) {
//     console.log(i);
//   }
// }
// counting(start, end);

// Q:8 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()
// Ans : function calculateHypotenuse() {
//   let base = +prompt("Enter base:");
//   let perpendicular = +prompt("Enter perpendicular:");
//   function calculateSquare(x) {
//     return x * x;
//   }
//   let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//   console.log("Hypotenuse is: " + hypotenuse);
// }
// calculateHypotenuse();

// Q:9 Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// Ans : 
// function areaRectangle(width, height) {
//   return width * height;
// }
// console.log("Area (using values): " + areaRectangle(5, 10)); 
// let w = +prompt("Enter width:");
// let h = +prompt("Enter height:");
// console.log("Area (using variables): " + areaRectangle(w, h));

// Q:10 Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
// Ans : 
// function isPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let word = prompt("Enter a word to check palindrome:");
// if (isPalindrome(word)) {
//   console.log(word + " is a palindrome");
// } else {
//   console.log(word + " is not a palindrome");
// }

// Q:11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.EXAMPLE STRING : 'the quick brown fox' EXPECTED OUTPUT : 'The Quick Brown Fox'
// Ans : 
// function titleCase(str) {
//   let words = str.split(" "); 
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" "); 
// }
// let sentence = prompt("Enter a sentence:");

// let result = titleCase(sentence);
// console.log(result);

// Q:12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development'
// Ans : 
// function findLongestWord(str) {
//   let words = str.split(" "); 
//   let longest = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }
// let sentence = prompt("Enter a sentence:");
// let result = findLongestWord(sentence);
// console.log("Longest word is: " + result);

// Q:13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
// Ans : 
// function countLetter(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// let text = prompt("Enter a string:");
// let char = prompt("Enter a letter to count:");
// let result = countLetter(text, char);
// console.log("The letter '" + char + "' occurs " + result + " times."); 