// Creating an API with getters and setters
// Getters get values of private objects
// Setters update the values of those private objects
// Obtain temperature in celsius
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Farenheit){
      this.Farenheit = Farenheit;
    }
     // getter
    get temperature(){
      return 5/9 * (this.Farenheit - 32);
    }
    // setter
    set temperature(celsius){
      this.Farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
