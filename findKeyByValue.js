// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, value) {
  for(const keyToGet of Object.keys(obj)){
    // console.log("=>>>>>>", Object.keys(obj));
    if(obj[keyToGet] === value) {
      // console.log("=>>>>>>", Object.keys(obj));
      // console.log("==>", keyToGet);
      return keyToGet;
    }
  }
}

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"));