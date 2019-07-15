// Function to see if myObj has a property, assigning that property to checkProp,
// if that is true, return the checkProp value, else, "Not found"
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  };
}

// Test your code by modifying these values
checkObj("gift");
