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

const flatten = function(array) {
  let nestedArray = [];
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      let items = array[i];
      for(let j = 0; j < array[i].length; j++) {
        nestedArray.push(items[j]);
      }
    } else {
      nestedArray.push(array[i]);
    }
  }
  console.log("========>", nestedArray);
  return nestedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6, 7]]));