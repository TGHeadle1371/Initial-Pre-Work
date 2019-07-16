// Rest operators condense elements into an array
// ...Args passed as argument into a function, means Rest not spread operator.
// Can pass as many args as you want

const sum = (function() {
  "use strict";
  // pass args into sum()
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
