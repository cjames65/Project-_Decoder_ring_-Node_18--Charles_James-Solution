// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar", () => {
    // Tests encoding with positive shift values
    it("should encode a string with positive shift value", () => {
      const input = "thinkful";
      const shift = 3;
      const expected = "wklqnixo";
      expect(caesar(input, shift)).to.equal(expected);
    });

    // Tests encoding with negative shift values
    it("should encode a string with negative shift value", () => {
        const input = "thinkful";
        const shift = -3;
        const expected = "qefkhcri";
        expect(caesar(input, shift)).to.equal(expected);
      });
});