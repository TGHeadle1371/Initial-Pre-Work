// Spread operators allow us to unpack an array without defining the variable
// Destructuring arrays allows us to do this
// changing a to equal b and b to equal a, omit the const
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
