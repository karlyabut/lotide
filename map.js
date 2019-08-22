const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  } else {
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertArrayEqual = function(arr1, arr2) {
  if(!eqArrays(arr1, arr2)){
    console.log(" 👎Assertion Failed ")
  } else {
    console.log(" 👍Assertion Passed ")
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArrayEqual(["g", "c", "t", "m", "t"], results1)); // success

console.log(assertArrayEqual(["g", "ca", "t", "m", "t"], results1)); // fail
