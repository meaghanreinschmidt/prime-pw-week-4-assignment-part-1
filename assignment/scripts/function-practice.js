console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
/**
 * Will log specific name to console
 * @param {string} name Specified name will be called
 * @returns Returns a name 
 */
function helloName( name ) {
  return 'Maddie';
}
// Remember to call the function to test
console.log('Hello,', helloName() + '!');

// 3. Function to add two numbers together & return the result
/**
 * Adds two numbers together and returns outcome 
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns Returns the added numbers 
 */
function addNumbers(firstNumber, secondNumber) {
  return 7 + 27;
  // return firstNumber + secondNumber;
}
console.log('The added numbers equal:', addNumbers());

// 4. Function to multiply three numbers & return the result
/**
 * Multiplies three numbers and returns outcome
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @param {number} thirdNumber 
 * @returns Returns the multiplied numbers 
 */
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return 29 * 40 * 2;
}
console.log('The multiplied numbers equal:', multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
/**
 * Takes in a number and returns true if positve or > 0 or false if negative
 * @param {number} number 
 * @returns Returns a true or false depending on if the number if positive or negative
 */
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
console.log('True or False?', isPositive(17));
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('What happens when I use math?', isPositive(17 + 9));
console.log('What happens if I use math again?', isPositive(24 - 53));
console.log('Let\'s try math one more time!', isPositive(53 * 0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
/**
 * Takes in an array and returns the last item in the array 
 * @param {string} hungryArray an array of many items
 * @returns Returns the last item in the array or 'undefined' if there are no items
 */
function getLast(hungryArray= ['Pizza', 'Bagels', 'Pepperoni', 'Bagel Bites']) {
  if (hungryArray.length >= 0) {
    let theLastItem = hungryArray[hungryArray.length - 1];
    return theLastItem;
  } else {
    return 'undefined';
  }
  
}
console.log(getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
/**
 * Takes in a value and finds it in the array
 * @param {number} value a number that may or may not be in the array
 * @param {number} differentArray an array of numbers
 * @returns Returns true if the value is in the array or false if the value is not in the array
 */

function find(value, differentArray) {
  for(let i = 0; i < differentArray.length; i++) {
    if (value === differentArray[i]) { 
      return true;
  }
}
return false;
}
console.log('Testing:', find(0, [4, 5, 6, 7]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
/**
 * Takes in a letter and finds it as the first letter in the string
 * @param {letter} letter a letter that may or may not be the first letter in the string
 * @param {string} string 
 * @returns Returns true if the letter matches the first letter of the string or false if the letter does not match the first letter in the string
 */
function isFirstLetter(letter, string) {
 if(letter === string.charAt(0)) {
  return true;
 } else {
  return false;
 }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
/**
 * Takes in an array and adds all of the numbers in the array
 * @param numbersArray an array of numbers
 * @returns Returns a number that equals the sum of all numbers in the array
 */

function sumAll(numbersArray) {
  let sum = 0
  // TODO: loop to add items
  for(let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}
console.log(sumAll([76, 44, 53]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
/**
 * Takes in array and sorts out to return only positive numbers
 * @return Returns positive values in array
 */
const inputArray = [-7, 2, -3, 4, -10, 11, 17, -22];

function getPositives() {
  let positives = [];
  for(let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      positives.push(inputArray[i]);
    }
  }
  return positives;
}
console.log(getPositives(inputArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it
// CodeWars: Create a function that takes an integer as an 
// argument and returns "Even" for even numbers or "Odd" for odd numbers.
/**
 * Takes in a number and returns even for even numbera and odd for odd numbers.
 * @param {number} number Number that will return as even or odd 
 * @returns Returns console.log depending on number being even or odd
 */
function even_or_odd(number) {
  if (number % 2 === 0) {
    console.log('The number is even!');
  } else {
    console.log('The number is odd!');
  }
}
even_or_odd(12);
