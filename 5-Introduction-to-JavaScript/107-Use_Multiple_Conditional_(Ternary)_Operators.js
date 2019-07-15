// Multiple ternary conditional operators
// function that returns zero, positive, or negative depending on the num

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);
