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

const assertArrayEqual = function(actual, expected) {
  if(!eqArrays(actual, expected)){
    console.log(" 👎Assertion Failed ")
  } else {
    console.log(" 👍Assertion Passed ")
  }
}

const middle = function(arr) {
  const midIndex = Math.floor(arr.length / 2);
  let middleArray = [];
  for(let i = 0; i <= midIndex; i++) {
    console.log("=>", arr[i]);
    if(arr.length === 1 || arr.length === 2) {
      return middleArray;
    } else if(arr.length % 2 === 0) {
      middleArray.push(arr[midIndex -1], arr[midIndex]);
      return middleArray.slice(0, 2);
    } else {
      middleArray.push(arr[midIndex]);
      return middleArray;
    }
  }
}
console.log(assertArrayEqual(middle([1, 2, 3]), middle([1, 2, 2, 3, 4])));