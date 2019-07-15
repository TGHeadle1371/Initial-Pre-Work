// Counting backwards from 9 to 1, skipping every 2, and pushing the values
// to myArray
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2){
  myArray.push(i);
}
console.log(myArray);
