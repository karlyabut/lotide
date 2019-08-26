
const eqArrays = require("./eqArrays");

const assertArrayEqual = function(arr1, arr2) {
  if(!eqArrays(arr1, arr2)){
    console.log(" 👎Assertion Failed ")
  } else {
    console.log(" 👍Assertion Passed ")
  }
}

module.exports = assertArrayEqual;
