// Scope of var and let.
// Let has scope attached to the block it was created in
// Var is a global variable that can be reassigned anywhere
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
