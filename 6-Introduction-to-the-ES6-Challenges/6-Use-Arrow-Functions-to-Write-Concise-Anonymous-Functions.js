// Arrow functions are syntactic sugar, simplifying the need to declare
// functions. If it is just returning a value, you do not even have to
// use brackets or return
const magic = () => {
  "use strict";
  return new Date();
};


const magic = () => new Date();
