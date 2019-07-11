// Local variables can only be called or seen within the function or block it is initialized in

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "foo";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
