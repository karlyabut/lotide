// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 👎Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};

assertEqual(tail([0, 1, 2, 3]), [1, 2, 3]);