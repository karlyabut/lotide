const countOnly = require("../countOnly");
const assert = require("chai").assert;

//NEEDS WORK 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe("#countOnly",() => {
  it("returns 1 for Jason", () => {
    assert.strictEqual(countOnly(result1["Jason"]), 1);
  });
})


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);