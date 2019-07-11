// Counting Cards: function that takes in a card #, increases or decreases a count, and will tell you to Bet if the count is greater than 0 or Hold if not.

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
    break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
     return count + " Hold";
  }
  console.log(cc);
   // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(4); cc(7); cc('K'); cc('A');
