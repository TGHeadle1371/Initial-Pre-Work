// ParseInt with Radix
// Radix specifies the base of a number in a string (between 2 and 36)

function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");
