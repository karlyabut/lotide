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

const without = function(source, itemsToRemove) {
  // console.log("=>", index);
  let updatedArray = [];
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      let items = itemsToRemove[j];
      let index = source.indexOf(items);
      if(source[i] === items) {
        source.splice(index, 1);
      }
    }
  }
  return source;
}
console.log(without([1, 2, 3, 4, 5, 6], [1, 2, "3", 4, 6]));
console.log(without(["hello", "world", "lighthouse"], ["lisghthouse"]));