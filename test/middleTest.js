const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");


console.log(assertArrayEqual(middle([1, 2, 3]), middle([1, 2, 2, 3, 4])));