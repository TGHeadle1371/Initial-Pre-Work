// Queues, Add a number to the end of the arr, remove the first number of the array and return it
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var number = arr.shift();
  return number;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
