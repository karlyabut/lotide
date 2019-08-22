// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bac = { b: "2", a: "1", c: "3" };

//array as value test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

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


const eqObject = function(obj1, obj2) {
  // console.log("obj1=>", Object.keys(obj1).length);
  // console.log("obj2=>", Object.keys(obj2).length);
  // console.log("obj1==>", Object.values(obj1));
  // console.log("obj2==>", Object.values(obj2));

  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(const keyToCheck of Object.keys(obj1)) {
    // console.log("============>", keyToCheck);
    // console.log("=====>", obj1[keyToCheck], obj2[keyToCheck]);
    // console.log("===>", Array.isArray(obj1[keyToCheck]), Array.isArray(obj2[keyToCheck]))

    if(Array.isArray(obj1[keyToCheck])) {
      // console.log("=>", eqArrays(obj1[keyToCheck], obj2[keyToCheck]));
      return eqArrays(obj1[keyToCheck], obj2[keyToCheck]);
    } else {
      if(obj1[keyToCheck] !== obj2[keyToCheck]) {
        return false;
      }
    }
  }
  return true;
}
console.log("first test", assertEqual(eqObject(ab, ba), true));
console.log("second test", assertEqual(eqObject(ab, bac), true));

console.log("third test", assertEqual(eqObject(cd, dc), true));
console.log("fourth test", assertEqual(eqObject(cd, cd2), true));