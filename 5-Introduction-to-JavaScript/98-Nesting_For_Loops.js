// Iterating through multi-dimensional arrays
// For loop nested within a for loop
// Multiply the product by the 2 numbers iterated

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    product = product * arr[i][j];
    console.log(product);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
