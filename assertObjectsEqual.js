const eqObject = function(obj1, obj2) {

  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(const keyToCheck of Object.keys(obj1)) {
    if(Array.isArray(obj1[keyToCheck])) {
      return eqArrays(obj1[keyToCheck], obj2[keyToCheck]);
    } else {
      if(obj1[keyToCheck] !== obj2[keyToCheck]) {
        return false;
      }
    }
  }
  return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bac = { b: "2", a: "1", c: "3" };

//array as value test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(!eqObject(actual, expected)) {
    console.log(` 👎Assertion Failed ${inspect(actual)} !==  ${inspect(expected)}`);
  } else {
    console.log(` 👍Assertion Passed " ${inspect(actual)} === ${inspect(expected)}`);
  }
}

console.log("first test", assertObjectsEqual(ab, bac));
console.log("second test", assertObjectsEqual(ab, ba));