// Write a function that takes an id, prop, and value to modify collection data
//
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// If props is equal to "tracks" and value is not blank and if
// collection[id][prop], push the value to collection[id][prop]. Else,
// collection[id][prop] is equal to collection[id][prop]'s [value].
// Else if, value is not blank, collection[id][prop] = value (updateRecords)
// else, delete the collection[id][prop]. Return the whole collection
// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== ""){
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
    } else if(value !== "") {
      collection[id][prop] = value;
      } else {
        delete collection[id][prop];
      }
    return collection;
};
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
