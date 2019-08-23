// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for(const keyToget of Object.keys(obj)  ) {
    if(callback(obj[keyToget])) {
      return keyToget;
    }
  }
}

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"));