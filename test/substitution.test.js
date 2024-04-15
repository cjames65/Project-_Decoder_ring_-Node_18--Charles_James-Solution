// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution cipher", () => {
  // Encoding tests
  it("should encode a message by substituting each letter based on the given alphabet", () => {
    const message = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encodedMessage = substitution(message, alphabet);
    expect(encodedMessage).to.equal("rmwwl");
  });

  // Decoding tests
  it("should decode an encoded message based on the given alphabet", () => {
    const encodedMessage = "rmwwl";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const decodedMessage = substitution(encodedMessage, alphabet, false);
    expect(decodedMessage).to.equal("hello");
  });


  // Error cases
  it("should return false if the alphabet is not exactly 26 characters long", () => {
    const message = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzib"; // Short alphabet
    const result = substitution(message, alphabet);
    expect(result).to.equal(false);
  });

  it("should return false if the alphabet contains repeated characters", () => {
    const message = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzibee"; // Repeated character 'e'
    const result = substitution(message, alphabet);
    expect(result).to.equal(false);
  });

 
 
});
