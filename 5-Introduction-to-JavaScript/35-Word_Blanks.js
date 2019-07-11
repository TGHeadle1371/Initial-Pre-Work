// Form a complete sentence by concatenating strings and variables

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
    result+= "His " +myAdjective+ " " +myNoun+ " " +myVerb+ " incredibly " +myAdverb+".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
