const countLetters = require("../countLetters");
const assert = require("chai").assert;

countLetters("Lighthouse in the house");

describe("#countLetters", () => {
  it("returns { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for Lighthouse in the house", () => {
    assert.deepEqual(countLetters("Lighthouse in the house"), { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});