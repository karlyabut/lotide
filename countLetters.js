// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const count = {};
  str = str.replace(/\s/g, ""); //regex that replaces all white space
  for(const letter of str) {
    if(count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
}
console.log("=>", countLetters("Lighthouse in the house"));