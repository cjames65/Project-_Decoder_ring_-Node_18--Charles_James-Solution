// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius cipher", () => {
  // Encoding tests
  it("should encode a message by substituting each letter with its corresponding coordinates", () => {
    const message = "hello";
    const encodedMessage = polybius(message);
    expect(encodedMessage).to.equal("3251131343");
  });

  it("should encode a message while preserving spaces", () => {
    const message = "hello world";
    const encodedMessage = polybius(message);
    expect(encodedMessage).to.equal("3251131343 2543241341");
  });

  // Decoding tests
  it("should decode an encoded message back to the original message", () => {
    const encodedMessage = "3251131343";
    const decodedMessage = polybius(encodedMessage, false);
    expect(decodedMessage).to.equal("hello");
  });

  it("should decode an encoded message while preserving spaces", () => {
    const encodedMessage = "3251131343 2543241341";
    const decodedMessage = polybius(encodedMessage, false);
    expect(decodedMessage).to.equal("hello world");
  });

  // Error cases
  it("should return false if the decoded message has an odd number of characters (excluding spaces)", () => {
    const encodedMessage = "325113134";
    const result = polybius(encodedMessage, false);
    expect(result).to.equal(false);
  });

  it("should return false if the encoded message contains characters other than digits and spaces", () => {
    const encodedMessage = "32511!31343";
    const result = polybius(encodedMessage, false);
    expect(result).to.equal(false);
  });
});
