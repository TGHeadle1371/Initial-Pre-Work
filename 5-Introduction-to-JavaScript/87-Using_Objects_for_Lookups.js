// Converting a switch into an object and returning the val to result

// Setup
function phoneticLookup(val) {
  var result = "";
  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));
