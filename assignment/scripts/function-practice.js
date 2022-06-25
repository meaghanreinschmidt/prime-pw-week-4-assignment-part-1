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
function helloName( name ) {
  return 'Maddie';
}
// Remember to call the function to test
console.log('Hello,', helloName() + '!');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  firstNumber = 29;
  secondNumber = 3;
  return 29 + 3;
  // return firstNumber + secondNumber;
}
console.log('The added numbers equal:', addNumbers());
//////////////////////////////////////////////////////////What format to use for return???///////////

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return 42 * 16 * 1;
}
console.log('The multiplied numbers equal:', multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
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
console.log('3 is greater than 0:', isPositive(3));
console.log( 'isPositive - should say false', isPositive(0) );
console.log('0 is greater than 0:', isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('-3 is greater than 0:', isPositive(-3));
// ADD MATH? ////////////////////////////////////////////////////////////////////////////////////////

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

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

// function find(value, differentArray) {
//   for(let i = 0; i < differentArray.length; i++) {
//     if () { // Don't use Array.includes, Array.indexOf, or Array.find/////////////////////////////
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log('Testing:', find(3, [4, 5, 6, 7]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
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
function sumAll() {
  
  let sum = 0

  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
