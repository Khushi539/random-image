//5 make a arry and print it
/*arr = ["1", "34", "33", "34", "23"]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}*/

//1 make a function which takes a value and return that value with 2 addedon it
/*function addtwo(value) {
  return value + 2
}
result = addtwo(3)
console.log(result)*/

//2 make a function which takes  a value and return that value with 2 added on it, if the the data sent during the call is not a number,print that plese pass number
/*function addtwo(value) {
  if (typeof value === "number") {
    return value + 2
  } else {
    console.log("please pass a number")
    return null
  }
}
console.log(addtwo(10))
console.log(addtwo(hello))*/

// 3 make a loop which print all the numbers from 1 to 20
/*for (let i = 1; i < 21; i++)
{
    console.log(i);
}*/

//4 make a loop which prints all numbers from 1 to 20, except 12, 13 , 14

/////
// Make a prompt
/*let input = prompt("Please enter a number:")
// Handle edge cases like cancel button
/*if (input === null) {
  console.log("Action canceled by the user.")
} else {
  // Trim extra spaces
  input = input.trim()

  // Check if the input is a number
  if (isNaN(input) || input === "") {
    console.log("Please enter a valid number.")
  } else {
    // Convert input to a number
    const number = Number(input)

    // Check for positive or negative number
    if (number > 0) {
      console.log("The number is positive.")
    } else if (number < 0) {
      console.log("The number is negative.")
    } else {
      console.log("The number is zero.")
    }
  }
}*/

//make 3 prompts to ask numbers
/*let num1 = prompt("number1")
let num2 = prompt("number2")
let num3 = prompt("number3")

num1 = Number(num1)
num1 = Number(num1)
num1 = Number(num1)*/
//make all numbers from strings

//check if all are numbers
//for failure print all should be numbers
// get the percentage of all the numbers

//date 16/01/2024 1 to 7 questions
//2.3determine the typeoff veariable

//3.1create aloop to print numbers from 1 tp 10
/*for (let i = 1; i < 11; i++) {
  console.log(i)
}*/

//3.2 create a while loop to count down from 10 t0 1
/*let i = 10
while (i >= 1) {
  console.log(i)
  i--
}*/

//3.3 use a for  of loop  for itrate over a array of names
/*const names = ["khushi", "dimple", "khushi2", "tushar"]
for (const name of names) {
  console.log(name)
}*/

//4.1 create an array with 5 elements and log it
/*let a = [1, 2, 3, 4, 5]
console.log(a)*/

//4.2  add a new element to the end of an array(.push()).
/*let a = [1, 2, 3, 4, 5, 6]
a.push(7)
console.log(a)*/

//4.3remove the last element
/*let a = [1, 2, 3, 4, 5, 6]
a.pop(3)
console.log(a)*/

//4.4 iterate over an array and print each element
/*let a = [1, 2, 3, 4, 5, 6]
for (i = 0; i < a.length; i++) {
  console.log(a[i])
}*/

//4.5 find the length of an array
/*let a = [1, 2, 3, 4, 5, 6]
for (i = 1; i < a.length; i++) {
  console.log(a.length)
}*/

//5.1 create a function to add two numbers and the return the result
/*addtwo(value)
{
  return value + 2
}
result = addtwo(2)
console.log("result")*/

/*const a = "swachh bharat ka irada kar kiya hamne"
const first = a.slice(2, 5)
console.log(first)*/

/*5+10
var a = 3
console.log(5 + 10)
va*/

//
/*var a = age(value)
a = age(30)
console.log(a)*/

/*for (var i = 1; i < 21; i++) {
  if (1 / 2 === 0) {
    console.log(i)
  }
}*/

//DATE 17/01/2025

/*var num1 = 5
var num2 = 10
result = num1 + num2
console.log(result)*/

//2
/*var age = 25;
age = 30;
console.log(typeof age);*/

//3 loops
//3.3 print a all odd numbers between 1 20 20
/*for (var i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}*/

//3.4 create while loop that starts at 10 and decreses by 2 until it reaches 0. log each step
/*var i = 10
while (i >= 0) {
  console.log(i)
  i = i - 2
}*/

//ARRAYS
//4.5 create an array of  yours favorate fruits(at least 5)
/*let fruits = ["apple", "strowberry", "banana", "avocado", "watermelon"]
//add a new fruits at  the end of the aarray
fruits.push("pear")
console.log(fruits)
//Remove the first fruit from the array.
fruits.shift()
//log the updated array
console.log(fruits)*/

//Write a program that iterates over an array of numbers and prints only the numbers greater than 10.
/*var numbers = [1, 2, 3, 4, 21, 34, 20, 29]
for (var i of numbers) {
  if (i > 10) {
    console.log(i)
  }
}*/

//FUNCTIONS
//7.	Write a function multiplyNumbers that takes two numbers as arguments and returns their product. Test the function with values 5 and 6.
/*function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
result = multiplyNumbers(5, 6);
console.log(result);*/

//Write an if...else statement to check if a number is divisible by 3. If it is, log “Divisible by 3,” otherwise log “Not divisible by 3.”

/*function Divisible(number) {
    if (number % 3 === 0){
        console.log("Divisible by 3");
     }
  else {
        console.log("not Divisible by 3");
    }
}  
Divisible(8);
Divisible(3);*/

//Create an object book with properties: title, author, and year. Add a new property genre with the value fiction and log the updated object.
/*let book={
    title: "khush",
    author: "khushi pawar",
    year: 21
}
book.genre = "fiction";
console.log(book);*/

//Write a program that takes a string JavaScript is fun! and:
//•	Converts it to all uppercase.
//•	Extracts the first 10 characters.
//•	Replaces the word fun with awesome.
/*let a = "JavaScript is fun!";
let result = a.toUpperCase();
console.log(result);
let res = a.slice(0, 10);
console.log(res);
let update = a.replace("fun","awesome");
console.log(update);*/

// Basic Console Usage (10 Questions)
//Log your name and favorite hobby to the console.
/*let name = "khushi";
console.log(name);

let hobby = "dancing";
console.log(hobby);*/

//Perform and log the result of 45 * 2 - 10.
/*let num1 = 45;
let num2 = 2;
let num3 = 10;

let result = num1 * num2 - num3;
console.log(result);*/

//3.	Use console.log() to display the current year.
/*let currentYear = new Date().getFullYear();
console.log(currentYear);*/

//4.	Create two variables for first and last name. Concatenate and log them.
/*let firstName = "khushi";
let lastName = "pawar";
result = firstName + lastName;
console.log(result);*/

//5.	Track the value of a variable by logging it before and after updating.
/*let a = 20;
console.log("before update a=",a);

a = 11;
console.log("after update a=",a);*/

//Use console.error() to simulate an error message.
/*let a = 20;
if (a < 21) {
  console.error("a is less than 21");
}*/

//7.	Log the square of the number 12 to the console.
/*let number = 12;
let squre = number * number;
console.log(squre);*/

//8.	Print the type of a variable holding the value true.
/*let a = true;
console.log(typeof a);*/

//9.	Create a variable holding your age and log whether it’s greater than 18.
/*let age = 22;
if (age > 18) {
  console.log("age is greater than 18")
}*/

//10.	Log the result of 100 / 0 and observe the output
/*let a = 100 / 0;
console.log(a);*/

//2. Variables and Data Types (10 Questions)
//11.	Declare a variable using let and log its value.
/*let a = 1;
console.log(a);*/

//12.	Create a constant to store the value of PI and log it.
/*const PI = 3.095475;
console.log(PI);*/

//13.	Reassign a value to a variable declared with let and log the result.
/*let value = "khushi";
value = "pawar";
console.log(value);*/

//14.	Check the type of null and log it.
/*let a = null;
console.log(typeof a);*/

//15.	Create a variable with a number as a string (e.g., "25") and log its type.
/*var number = "25";
console.log(typeof number);*/

//16.	Use typeof to check the type of a boolean variable.
/*let a = true;
console.log(typeof a);*/

//17.	Create three variables of types string, number, and boolean, and log their values.
/*let a = "khushi";
console.log(typeof a);
let b = "pawar";
console.log(typeof b);
let c = "is strong";
console.log(typeof c);

let num1 = 1;
console.log(typeof num1);
let num2 = 2;
console.log(typeof num2);
let num3 = 3;
console.log(typeof num3);

let ran1 = 12>10;
console.log(typeof ran1);
let ran2 = 10 > 12;
console.log(typeof ran2);
let ran3 = 23 < 8;
console.log(typeof ran3);*/

//18.	Declare a variable without assigning a value. Log its type.
/*var a ; 
console.log(typeof a);*/

//19.	Create a variable with undefined and log its type.
/*var a = undefined;
console.log(typeof a);*/
//
// 20.	Use const to create an array. Try reassigning the array and observe the error.
/*const arr = ["khushi", "pawar", "is", "strong", "woman"];
arr.push("new");
console.log(arr);*/

//3. Loops (10 Questions)
//21.	Write a for loop to print numbers from 1 to 50.
/*for (i = 1; i < 51; i++){
  console.log(i);
}*/
//22.	Use a while loop to sum the numbers from 1 to 10.
/*let i = 1;
while (i < 11;) {
  console.log(i);
  i++
}*/


//23.	Create a for...of loop to log each character of the string "JavaScript".
/*const str = "JavaScript";
for (const char of str) {
  console.log(char);
}*/

//24.	Write a for loop that skips even numbers between 1 and 20.
/*for (i = 1; i < 21; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
}*/


//25.	Use a do...while loop to log numbers from 5 to 1.
/*let i = 5;
do {
  console.log(i);
  i--;
} while (i > 1);*/


//26.	Create a for loop that calculates the factorial of 5.
/*let factorial = 1;
for (i = 1; i <= 5; i++){
  factorial *= i;
}
console.log(factorial);*/

//27.	Write a nested loop to print a 3x3 grid of numbers.
/*for (i = 1; i <= 3; i++){
  let row = '';
  for (j = 1; j <= 3; j++){
    row += `${i * j}`
  }l
  console.log(row.trim());
}*/


//28.	Use a for loop to reverse an array [1, 2, 3, 4].
/*const arr = [1, 2, 3, 4,5];

let revArray = [];
for (let i = arr.length - 1; i >= 0; i--){
  revArray.push(arr[i]);
}
console.log(revArray);*/


//29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
/*let i = 1;
while (i < 101) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
} */


//30.	Use a for...in loop to iterate over an object and log its keys.
/*const movie = {
  title: "strong independent woman",
  writer: "khushi",
  releaseDate: 2025
};

for (let key in movie) {
  console.log(`${key}: ${movie[key]}`);
}*/

//4. Arrays (10 Questions)
//31.	Create an array of your top 5 favorite movies and log it.
/*let arr = ["kux kux hota hai", "ddlj", "kal ho na ho", "three idiots", "chand"];
console.log(arr);*/


//32.	Find and log the second element of an array.
/*let arr = [1, 2, 3, 4, 5, 6,];
let secondElement = arr[1];
console.log(secondElement);*/


//33.	Add two new elements to the start of an array using .unshift().
/*let arr = [1, 2, 3, 4, 5, 6];
arr.unshift(1,2);
console.log(arr);*/
 
//34.	Remove the last element of an array and log the updated array.
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.pop();
console.log(arr);*/

//35.	Use .slice() to extract the first three elements of an array.
/*let arr = [1, 2, 3, 4, 5, 6];
let firstThree = arr.slice(0, 3);
console.log(firstThree);*/


  
//36.	Find the index of a specific element in an array using .indexOf().
/*let arr = [1, 2, 3, 4, 5, 6];
specificElement = arr.indexOf(4);
console.log(specificElement)*/

//37.	Check if a value exists in an array using .includes().
/*arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let valueExist =arr.includes(1);
console.log(valueExist);*/

//38.	Combine two arrays [1, 2] and [3, 4] using .concat().
/*arr1 = [1, 2];
arr2 = [3, 4];
combine = arr1.concat(arr2);
console.log(combine)*/

//39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
/*let arr = [5, 2, 9, 1];
sort = arr.sort()
console.log(sort);*/


	//40.	Write a program that creates a copy of an array without mutating the original.
/*function copyArray(originalArray) {
  return originalArray.slice();
}
original = [1, 2, 3, 4, 5];
const result = copyArray(original);
console.log(result);*/


//41.	Write a function to check if a number is even or odd.
/*function checkNumber(number) {
  if (number % 2 === 0) {
    console.log("number is even:" + number)
  }
  else {
    console.log("number is odd:" + number)
  }
}
number = 2;
result = checkNumber(number);
console.log(result);*/


//42.	Create a function to calculate the area of a circle with a given radius
/*function calculateArea(r){
  return (Math.PI * r * r);
}
r = 4;
calculation = calculateArea(r);
console.log(calculation);*/

//43.	Write a function that accepts an array and returns the sum of its elements.
/*arr = [1, 2, 3, 4, 5, 6, 7, 8];
function sumElement(arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(sumElement(arr));*/


//	44.	Create a function that checks if a string starts with a specific character.
/*str1="radhe krishna"
function stringStarts(str1,char) {
  return str1.startsWith(char);
}
console.log(stringStarts(str1, "r"));
console.log(stringStarts(str1, "k"));
console.log(stringStarts(str1, "h"));
console.log(stringStarts(str1, "r"));
console.log(stringStarts(str1, "u"));
console.log(stringStarts(str1, "o"));
console.log(stringStarts(str1, "h"));
console.log(stringStarts(str1, "l"));*/


//	45.	Write a function to find the maximum of two numbers.
/*function maximumNumbers(num1,num2) {
  return Math.max(num1,num2);
}
num1 = 2;
num2 = 5;
console.log(maximumNumbers(2, 5));*/


//46.	Create a function that takes a number and returns its factorial.
/*function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++){
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));*/


//47.	Write a function that accepts a string and returns its reverse.
/*str = "radhe radhe krishna radhe radhe"
function stringReverse(str) {
  return str.split('').reverse('').join('');
}
console.log(stringReverse(str));*/


//48.	Create a function to find the largest number in an array.
/*arr = [1, 2, 3, 4, 5, 6, 7, 89];
function largestNumber(arr) {
  return Math.max(...arr);
}
result = largestNumber(arr);
console.log("the largest number of array:" + result);*/
  
//49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").


	//50.	Create a function that logs "Hello, World!" every time it is called.
/*function logsEverytime() {
  return "Hello, World!" 
}
console.log(logsEverytime());*/

//6. Conditionals (10 Questions)
//51.	Write a program to check if a number is positive, negative, or zero.
/*function checkNumber(number) {
  if (number > 0) {
    console.log("number is positive:" + number);
  }
    else if  (number < 0){
    console.log("number is nagative:"+number)
  }
  else {
    console.log("number is nagative");
  }
}
const number = 2;
checkNumber(number);*/


//52.	Create a program to check if a year is a leap year.
  
	//53.	Write an if...else statement to determine if a person can vote based on their age.
	//.	Use a switch statement to log the name of the day based on its number (1 = Monday).
	//55.	Write a program to check if a number is divisible by 3 and 5.
	//56.	Create a program to check the grade of a student based on marks.
	//57.	Write an if condition to compare two strings and log if they are equal.
	//58.	Use a ternary operator to check if a number is even or odd.
	//59.	Write a program to find the largest of three numbers using if...else.
	//60.	Create a program to calculate the discount based on the price of an item.


//expected output: [{name:"laptop", price:110}, {name: "phone. price : 550"}]
  